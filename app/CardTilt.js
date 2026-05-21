"use client";

import { useRef, useCallback } from "react";

export default function CardTilt({ children, className = "" }) {
  const cardRef = useRef(null);

  const onMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const maxTilt = 6;
    const tiltX = ((y - cy) / cy) * maxTilt;
    const tiltY = ((cx - x) / cx) * maxTilt;

    card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--my", `${(y / rect.height) * 100}%`);

    const inner = card.querySelector(".tilt-card-inner");
    if (inner) inner.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  }, []);

  const onLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    const inner = card.querySelector(".tilt-card-inner");
    if (inner) inner.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="tilt-card-inner">
        <div className="tilt-card-content">{children}</div>
        <div className="tilt-card-glow" aria-hidden="true" />
      </div>
    </div>
  );
}
