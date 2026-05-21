"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const orbs = [
      { size: 400, x: "5%", y: "10%", color: "rgba(99,102,241,0.08)", speed: 0.05 },
      { size: 300, x: "80%", y: "30%", color: "rgba(129,140,248,0.06)", speed: 0.08 },
      { size: 500, x: "60%", y: "60%", color: "rgba(99,102,241,0.05)", speed: 0.03 },
      { size: 250, x: "20%", y: "70%", color: "rgba(139,143,245,0.07)", speed: 0.06 },
      { size: 350, x: "90%", y: "80%", color: "rgba(79,70,229,0.05)", speed: 0.04 },
    ];

    const elements = orbs.map((orb) => {
      const el = document.createElement("div");
      el.className = "parallax-orb";
      el.style.width = `${orb.size}px`;
      el.style.height = `${orb.size}px`;
      el.style.left = orb.x;
      el.style.top = orb.y;
      el.style.background = orb.color;
      el.dataset.speed = String(orb.speed);
      container.appendChild(el);
      return el;
    });

    const onScroll = () => {
      const sy = window.scrollY;
      elements.forEach((el) => {
        const speed = parseFloat(el.dataset.speed);
        const startY = parseFloat(el.style.top);
        el.style.transform = `translateY(${sy * speed}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      elements.forEach((el) => el.remove());
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }} />;
}
