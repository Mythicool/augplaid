import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

interface TextTrailProps {
  text?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  noiseFactor?: number;
  noiseScale?: number;
  rgbPersistFactor?: number;
  alphaPersistFactor?: number;
  animateColor?: boolean;
  startColor?: string;
  textColor?: string;
  backgroundColor?: number | string;
  colorCycleInterval?: number;
  supersample?: number;
}

const TextTrail = ({
  text = "Vibe",
  fontFamily = "Figtree",
  fontWeight = "900",
  noiseFactor = 1,
  noiseScale = 0.0005,
  rgbPersistFactor = 0.98,
  alphaPersistFactor = 0.95,
  animateColor = false,
  startColor = "#ffffff",
  textColor = "#ffffff",
  backgroundColor = 0x271e37,
  colorCycleInterval = 3000,
  supersample = 2,
}: TextTrailProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set up canvas
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr * supersample;
    canvas.height = rect.height * dpr * supersample;
    ctx.scale(dpr * supersample, dpr * supersample);

    // Set up Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -rect.width / 2,
      rect.width / 2,
      rect.height / 2,
      -rect.height / 2,
      1,
      1000
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvas,
      alpha: true,
      antialias: true 
    });
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(dpr * supersample);

    // Create text texture
    const textCanvas = document.createElement("canvas");
    const textCtx = textCanvas.getContext("2d");
    if (!textCtx) return;

    // Calculate text size
    const fontSize = Math.min(rect.width / text.length * 1.2, rect.height * 0.8);
    textCtx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    const textMetrics = textCtx.measureText(text);
    const textWidth = textMetrics.width;
    const textHeight = fontSize;

    textCanvas.width = textWidth * 1.2;
    textCanvas.height = textHeight * 1.5;

    // Draw text
    textCtx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    textCtx.fillStyle = textColor;
    textCtx.textAlign = "center";
    textCtx.textBaseline = "middle";
    textCtx.fillText(text, textCanvas.width / 2, textCanvas.height / 2);

    // Create texture
    const texture = new THREE.CanvasTexture(textCanvas);
    texture.needsUpdate = true;

    // Create material and geometry
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      alphaTest: 0.1,
    });

    const geometry = new THREE.PlaneGeometry(textWidth, textHeight);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Trail effect variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let time = 0;

    // Color animation
    let currentHue = 0;
    const startColorHSL = hexToHsl(startColor);

    // Trail canvas for effect
    const trailCanvas = document.createElement("canvas");
    const trailCtx = trailCanvas.getContext("2d");
    if (!trailCtx) return;

    trailCanvas.width = canvas.width;
    trailCanvas.height = canvas.height;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - rect.width / 2) * dpr;
      mouseY = -(e.clientY - rect.top - rect.height / 2) * dpr;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      time += 0.016;

      // Smooth mouse following
      targetX += (mouseX - targetX) * 0.1;
      targetY += (mouseY - targetY) * 0.1;

      // Add noise
      const noiseX = (Math.sin(time * 2) + Math.cos(time * 3)) * noiseFactor;
      const noiseY = (Math.cos(time * 2.5) + Math.sin(time * 1.8)) * noiseFactor;

      mesh.position.x = targetX + noiseX;
      mesh.position.y = targetY + noiseY;

      // Color animation
      if (animateColor) {
        currentHue = (currentHue + 0.5) % 360;
        const newColor = hslToHex(currentHue, startColorHSL.s, startColorHSL.l);
        material.color.setHex(parseInt(newColor.replace("#", "0x")));
      }

      // Trail effect
      trailCtx.globalCompositeOperation = "source-over";
      trailCtx.fillStyle = `rgba(0, 0, 0, ${1 - alphaPersistFactor})`;
      trailCtx.fillRect(0, 0, trailCanvas.width, trailCanvas.height);

      trailCtx.globalCompositeOperation = "lighter";
      trailCtx.globalAlpha = rgbPersistFactor;

      // Render
      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    };

    animate();
    setIsLoaded(true);

    // Cleanup
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, [
    text,
    fontFamily,
    fontWeight,
    noiseFactor,
    noiseScale,
    rgbPersistFactor,
    alphaPersistFactor,
    animateColor,
    startColor,
    textColor,
    backgroundColor,
    colorCycleInterval,
    supersample,
  ]);

  // Helper functions
  const hexToHsl = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
  };

  const hslToHex = (h: number, s: number, l: number) => {
    h /= 360;
    s /= 100;
    l /= 100;

    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    const toHex = (c: number) => {
      const hex = Math.round(c * 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        opacity: isLoaded ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    />
  );
};

export default TextTrail;
