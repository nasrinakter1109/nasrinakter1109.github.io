"use client";

import { useRef, useCallback } from "react";

export default function MagneticButton({ children, className = "", href, download, target, rel, onClick, ...props }) {
  const innerRef = useRef(null);
  const btnRef = useRef(null);

  const onMove = useCallback((e) => {
    const btn = btnRef.current;
    const inner = innerRef.current;
    if (!btn || !inner) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const dist = Math.sqrt(x * x + y * y);
    const factor = Math.min(1, dist / 120);
    const strength = 0.3;
    inner.style.transform = `translate(${x * strength * factor}px, ${y * strength * factor}px)`;
  }, []);

  const onLeave = useCallback(() => {
    if (innerRef.current) innerRef.current.style.transform = "translate(0, 0)";
  }, []);

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={`magnetic-btn ${className}`}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onClick}
        {...props}
      >
        <span ref={innerRef} className="magnetic-btn-inner">{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      className={`magnetic-btn ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      type="button"
      {...props}
    >
      <span ref={innerRef} className="magnetic-btn-inner">{children}</span>
    </button>
  );
}
