import { useEffect } from "react";
import { gsap } from "gsap";
import "./BounceCards.css";

interface BounceCardsProps {
  className?: string;
  images?: string[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)"
  ],
  enableHover = true
}: BounceCardsProps) {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay
      }
    );
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = (transformStr: string) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    } else if (transformStr === "none") {
      return "rotate(0deg)";
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform: string, offsetX: number) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return `${baseTransform} translate(${offsetX}px)`;
    }
  };

  return (
    <div
      className={`bounce-cards ${className}`}
      style={{
        width: `${containerWidth}px`,
        height: `${containerHeight}px`,
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="card"
          style={{
            transform: transformStyles[index] || "none",
            backgroundImage: `url(${image})`,
          }}
          onMouseEnter={(e) => {
            if (!enableHover) return;
            const target = e.currentTarget as HTMLElement;
            const baseTransform = transformStyles[index] || "none";
            const noRotationTransform = getNoRotationTransform(baseTransform);
            target.style.transform = noRotationTransform;
            target.style.zIndex = "10";
          }}
          onMouseLeave={(e) => {
            if (!enableHover) return;
            const target = e.currentTarget as HTMLElement;
            target.style.transform = transformStyles[index] || "none";
            target.style.zIndex = "1";
          }}
        />
      ))}
    </div>
  );
}
