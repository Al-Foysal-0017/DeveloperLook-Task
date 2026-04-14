"use client";
import { useEffect, useState } from "react";

const CustomCursor = ({ text, isVisible }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] px-4 py-2 bg-blue-600 text-white rounded-full font-black text-xs uppercase tracking-tighter whitespace-nowrap transition-transform duration-100 ease-out"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%) rotate(-10deg)", // একটু বাঁকানো লুকের জন্য
      }}
    >
      {text}
    </div>
  );
};

export default CustomCursor;