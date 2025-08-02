import { useRef, useState } from "react";
import "./SpotlightCard.css";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
  borderRadius?: string;
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
  onClick?: () => void;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(251, 191, 36, 0.3)", // Yellow spotlight for cat cafe theme
  spotlightSize = 300,
  borderRadius = "1.5rem",
  backgroundColor = "rgba(0, 0, 0, 0.4)",
  borderColor = "rgba(255, 255, 255, 0.1)",
  padding = "2rem",
  onClick,
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top 
    });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.8);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const spotlightStyle = {
    background: `radial-gradient(circle ${spotlightSize}px at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
    opacity,
  };

  const cardStyle = {
    backgroundColor,
    borderColor,
    borderRadius,
    padding,
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`spotlight-card ${className}`}
      style={cardStyle}
      tabIndex={0}
    >
      <div
        className="spotlight-card__spotlight"
        style={spotlightStyle}
      />
      <div className="spotlight-card__content">
        {children}
      </div>
    </div>
  );
}
