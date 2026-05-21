"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal() {
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;

    const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));
    const counterElements = Array.from(document.querySelectorAll("[data-counter]"));
    const parallaxElements = Array.from(document.querySelectorAll("[data-parallax]"));
    const wordRevealElements = Array.from(document.querySelectorAll("[data-word-reveal]"));

    if (revealElements.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const type = el.dataset.revealType || "fade-up";
            el.classList.add(type, "is-visible");
            observer.unobserve(el);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      revealElements.forEach((el) => observer.observe(el));
    }

    if (counterElements.length) {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix || "";
            const duration = parseInt(el.dataset.duration, 10) || 1200;
            animateCounter(el, target, suffix, duration);
            counterObserver.unobserve(el);
          });
        },
        { threshold: 0.3 }
      );
      counterElements.forEach((el) => counterObserver.observe(el));
    }

    if (parallaxElements.length) {
      const handleScroll = () => {
        const sy = window.scrollY;
        parallaxElements.forEach((el) => {
          const speed = parseFloat(el.dataset.parallaxSpeed || "0.15");
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          if (center < window.innerHeight + 200 && center > -200) {
            el.style.transform = `translateY(${sy * speed}px)`;
          }
        });
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    if (wordRevealElements.length) {
      const wordObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const words = entry.target.querySelectorAll(".text-reveal-word");
            words.forEach((word, i) => {
              word.style.animationDelay = `${i * 60}ms`;
              word.classList.add("is-revealed");
            });
            wordObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.2 }
      );
      wordRevealElements.forEach((el) => wordObserver.observe(el));
    }
  }, []);

  return null;
}

function animateCounter(el, target, suffix, duration) {
  const start = performance.now();
  const isFloat = target % 1 !== 0;

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;
    el.textContent = (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}
