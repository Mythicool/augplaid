import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Dock.css";

interface DockItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  mouseX: any;
  spring: any;
  distance: number;
  magnification: number;
  baseItemSize: number;
  to?: string;
}

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  to,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  const content = (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {children}
    </motion.div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return content;
}

interface DockProps {
  items: Array<{
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    to?: string;
  }>;
  panelHeight?: number;
  baseItemSize?: number;
  magnification?: number;
  distance?: number;
}

export default function Dock({
  items,
  panelHeight = 68,
  baseItemSize = 50,
  magnification = 70,
  distance = 100,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const spring = { damping: 25, stiffness: 700 };

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="dock-panel"
      style={{ height: panelHeight }}
    >
      {items.map((item, index) => (
        <DockItem
          key={index}
          mouseX={mouseX}
          spring={spring}
          distance={distance}
          magnification={magnification}
          baseItemSize={baseItemSize}
          onClick={item.onClick}
          to={item.to}
          className="dock-item-wrapper"
        >
          <div className="dock-item-content" title={item.label}>
            {item.icon}
          </div>
        </DockItem>
      ))}
    </motion.div>
  );
}
