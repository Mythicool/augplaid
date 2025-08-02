import { useEffect, useRef } from 'react';
import './BlobCursor.css';

export default function BlobCursor() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    const handleMouseMove = (e: MouseEvent) => {
      blob.style.left = `${e.clientX}px`;
      blob.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      blob.style.transform = 'translate(-50%, -50%) scale(0.8)';
    };

    const handleMouseUp = () => {
      blob.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return <div ref={blobRef} className="blob-cursor" />;
}
