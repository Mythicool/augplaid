import "./GlassSurface.css";

interface GlassSurfaceProps {
  children: React.ReactNode;
  className?: string;
  blur?: number;
  opacity?: number;
  borderRadius?: number;
}

export default function GlassSurface({
  children,
  className = "",
  blur = 10,
  opacity = 0.1,
  borderRadius = 16,
}: GlassSurfaceProps) {
  return (
    <div
      className={`glass-surface ${className}`}
      style={{
        backdropFilter: `blur(${blur}px)`,
        background: `rgba(255, 255, 255, ${opacity})`,
        borderRadius: `${borderRadius}px`,
      }}
    >
      {children}
    </div>
  );
}
