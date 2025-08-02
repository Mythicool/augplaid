import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef } from "react";
import './Aurora.css';

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  
  float time = uTime * 0.5;
  
  float noise1 = snoise(uv * 2.0 + time * 0.1);
  float noise2 = snoise(uv * 4.0 + time * 0.2);
  float noise3 = snoise(uv * 8.0 + time * 0.3);
  
  float combinedNoise = (noise1 + noise2 * 0.5 + noise3 * 0.25) * uAmplitude;
  
  float gradient = uv.y + combinedNoise * 0.3;
  gradient = smoothstep(0.0, 1.0, gradient);
  
  vec3 color1 = uColorStops[0];
  vec3 color2 = uColorStops[1];
  vec3 color3 = uColorStops[2];
  
  vec3 finalColor;
  if (gradient < 0.5) {
    finalColor = mix(color1, color2, gradient * 2.0);
  } else {
    finalColor = mix(color2, color3, (gradient - 0.5) * 2.0);
  }
  
  finalColor = mix(finalColor, vec3(1.0), combinedNoise * uBlend * 0.1);
  
  fragColor = vec4(finalColor, 1.0);
}
`;

interface AuroraProps {
  colorStops?: string[];
  blend?: number;
  amplitude?: number;
  speed?: number;
}

export default function Aurora({
  colorStops = ["#3A29FF", "#FF94B4", "#FF3232"],
  blend = 0.5,
  amplitude = 1.0,
  speed = 0.5,
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const programRef = useRef<Program | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new Renderer({ canvas, alpha: true });
    rendererRef.current = renderer;

    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    const geometry = new Triangle(gl);

    const colorStopsVec3 = colorStops.map(color => {
      const c = new Color(color);
      return [c.r, c.g, c.b];
    });

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColorStops: { value: colorStopsVec3.flat() },
        uResolution: { value: [canvas.width, canvas.height] },
        uBlend: { value: blend },
      },
    });
    programRef.current = program;

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const { clientWidth, clientHeight } = canvas.parentElement || canvas;
      renderer.setSize(clientWidth, clientHeight);
      program.uniforms.uResolution.value = [clientWidth, clientHeight];
    };

    const animate = () => {
      const elapsed = (Date.now() - startTimeRef.current) * 0.001 * speed;
      program.uniforms.uTime.value = elapsed;
      
      renderer.render({ scene: mesh });
      requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (rendererRef.current) {
        rendererRef.current.gl.canvas.remove();
      }
    };
  }, [colorStops, blend, amplitude, speed]);

  return <canvas ref={canvasRef} className="aurora-canvas" />;
}
