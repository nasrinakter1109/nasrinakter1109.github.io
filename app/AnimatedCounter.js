"use client";

export default function AnimatedCounter({ value, suffix = "", duration = 1200 }) {
  return (
    <strong
      data-counter
      data-target={value}
      data-suffix={suffix}
      data-duration={duration}
      className="counter-value"
    >
      {value}{suffix}
    </strong>
  );
}
