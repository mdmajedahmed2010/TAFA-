"use client";

import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
}

export function BlossomPetalsOverlay() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check user accessibility preference
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // TAFA (তাফা) royal emerald green, imperial gold & silk shimmer palette
    const petalColors = [
      "rgba(19, 56, 39, 0.35)",   // Royal Emerald silk shimmer
      "rgba(212, 175, 55, 0.45)", // Imperial Gold luster
      "rgba(250, 247, 242, 0.50)",// Warm Cream silk mist
      "rgba(14, 41, 28, 0.30)",   // Deep Forest Emerald glow
    ];

    const PETAL_COUNT = Math.min(22, Math.floor(width / 60));
    const petals: Petal[] = [];

    for (let i = 0; i < PETAL_COUNT; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 8 + 6,
        speedX: Math.random() * 1.2 - 0.4,
        speedY: Math.random() * 0.9 + 0.6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.4 + 0.35,
        color: petalColors[Math.floor(Math.random() * petalColors.length)] ?? "rgba(247, 200, 208, 0.55)",
      });
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;

      // Realistic curved petal shape
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, -p.size / 4, p.size, 0);
      ctx.bezierCurveTo(p.size, p.size / 3, p.size / 2, p.size / 1.5, 0, p.size);
      ctx.bezierCurveTo(-p.size / 3, p.size / 1.5, -p.size / 2, p.size / 3, 0, 0);
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        if (!p) continue;
        p.x += p.speedX + Math.sin(p.y * 0.005) * 0.5;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        // Wrap around boundaries
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
