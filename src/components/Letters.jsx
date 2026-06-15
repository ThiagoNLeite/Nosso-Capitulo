import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { letters } from "../data/content";
import { SectionHeading } from "./Timeline";

export default function Letters() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative px-7 py-24">
      <SectionHeading eyebrow="Palavras guardadas" title="Cartas para Você" />

      <div className="mx-auto mt-14 grid max-w-md grid-cols-1 gap-5 sm:grid-cols-2">
        {letters.map((letter, i) => (
          <motion.button
            key={i}
            onClick={() => setOpen(i)}
            className="group relative overflow-hidden rounded-2xl glass p-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* envelope */}
            <div className="mb-4 flex h-12 w-16 items-center justify-center">
              <svg width="56" height="40" viewBox="0 0 56 40" className="text-gold">
                <rect x="1" y="1" width="54" height="38" rx="3" fill="rgba(212,175,55,0.08)" stroke="currentColor" strokeWidth="1" />
                <path d="M2 3 L28 22 L54 3" fill="none" stroke="currentColor" strokeWidth="1" className="transition-all group-hover:opacity-40" />
                <path className="text-crimson opacity-0 transition-opacity group-hover:opacity-100" d="M28 18 L26 14 Q24 11 21 13 Q19 15 21 18 L28 24 L35 18 Q37 15 35 13 Q32 11 30 14 Z" fill="currentColor" />
              </svg>
            </div>
            <h3 className="font-display text-lg leading-snug text-cream">{letter.label}</h3>
            <span className="mt-3 inline-flex items-center gap-1.5 font-body text-[11px] text-gold/80">
              abrir carta <span>→</span>
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" />
            <motion.div
              className="relative z-10 w-full max-w-sm overflow-hidden rounded-sm bg-[#f4efe6] p-8 shadow-2xl"
              initial={{ scaleY: 0.05, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0.05, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-5 text-center">
                <span className="font-body text-[10px] uppercase tracking-[0.3em] text-crimson/70">
                  {letters[open].label}
                </span>
                <div className="mx-auto mt-3 h-px w-10 bg-crimson/30" />
              </div>
              <motion.p
                className="font-display text-base leading-relaxed text-ink/85"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                {letters[open].body}
              </motion.p>
              <motion.p
                className="mt-6 text-right font-display italic text-ink/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                — com amor
              </motion.p>
              <button
                onClick={() => setOpen(null)}
                className="mt-6 w-full text-center font-body text-[11px] uppercase tracking-[0.2em] text-crimson hover:text-ink"
              >
                fechar carta
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
