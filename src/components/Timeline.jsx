import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Photo from "./Photo";
import { timeline } from "../data/content";

export default function Timeline() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative px-7 py-24">
      <SectionHeading eyebrow="Capítulo a capítulo" title="Nossa História" />

      <div className="relative mx-auto mt-16 max-w-md">
        {/* linha vertical */}
        <div className="absolute left-[14px] top-2 h-full w-px bg-gradient-to-b from-gold/60 via-crimson/40 to-transparent" />

        {timeline.map((item, i) => (
          <motion.button
            key={i}
            onClick={() => setOpen(i)}
            className="group relative mb-10 flex w-full items-start gap-5 text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
          >
            {/* nó */}
            <div className="relative z-10 mt-1.5 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-gold/50 bg-ink">
              <span className="h-2 w-2 rounded-full bg-gold transition-all group-hover:scale-150 group-hover:bg-crimson" />
            </div>

            <div className="glass flex-1 rounded-2xl p-5 transition-all group-hover:border-gold/50">
              <span className="font-body text-[10px] uppercase tracking-[0.3em] text-gold/70">
                {item.date}
              </span>
              <h3 className="mt-1.5 font-display text-xl text-cream">{item.title}</h3>
              <span className="mt-3 inline-flex items-center gap-1.5 font-body text-[11px] text-cream/40">
                toque para abrir <span className="text-gold">→</span>
              </span>
            </div>
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
            <div className="absolute inset-0 bg-ink/80 backdrop-blur-md" />
            <motion.div
              className="glass relative z-10 w-full max-w-sm overflow-hidden rounded-3xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 24, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-56 w-full overflow-hidden">
                <Photo
                  src={timeline[open].photo}
                  alt={timeline[open].title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="font-body text-[10px] uppercase tracking-[0.3em] text-gold/70">
                  {timeline[open].date}
                </span>
                <h3 className="mt-1.5 font-display text-2xl text-cream">{timeline[open].title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-cream/75">
                  {timeline[open].text}
                </p>
                <button
                  onClick={() => setOpen(null)}
                  className="mt-5 font-body text-xs uppercase tracking-[0.2em] text-gold hover:text-crimson"
                >
                  fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <div className="text-center">
      <motion.span
        className="font-body text-[11px] uppercase tracking-[0.4em] text-gold/70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        className="mt-3 font-display text-4xl text-cream"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="mx-auto mt-4 h-px w-12 bg-gold/40"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </div>
  );
}
