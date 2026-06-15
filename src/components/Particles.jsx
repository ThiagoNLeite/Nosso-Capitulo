import { useMemo } from "react";
import { motion } from "framer-motion";

// Partículas douradas suaves flutuando de baixo para cima, por toda a área.
// Usa Framer Motion (animação garantida, independente de keyframes CSS).
export default function Particles({ count = 24, color = "#D4AF37" }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        top: 20 + Math.random() * 80, // posição inicial espalhada na altura
        size: 2 + Math.random() * 3,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 8,
        opacity: 0.2 + Math.random() * 0.45,
        drift: (Math.random() - 0.5) * 50,
        rise: 200 + Math.random() * 300, // quanto sobe (px)
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background: color,
            boxShadow: `0 0 ${d.size * 4}px ${color}`,
          }}
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{
            y: [0, -d.rise],
            x: [0, d.drift, 0],
            opacity: [0, d.opacity, d.opacity, 0],
            scale: [1, 1.3],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.12, 0.88, 1],
          }}
        />
      ))}
    </div>
  );
}
