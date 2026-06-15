import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "./Particles";
import Heart from "./Heart";
import { startDate, startDateLabel, recipient } from "../data/content";

function useElapsed() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Date.now() - startDate.getTime();
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setT({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-3xl tabular-nums text-gold sm:text-4xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 font-body text-[10px] uppercase tracking-[0.2em] text-cream/50">
        {label}
      </span>
    </div>
  );
}

export default function Final({ onRestart }) {
  const { d, h, m, s } = useElapsed();

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-7 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-[#120d0f] to-ink" />
      <Particles count={24} color="#B11226" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.span
          className="font-body text-[11px] uppercase tracking-[0.4em] text-gold/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Desde {startDateLabel}
        </motion.span>

        <motion.div
          className="mt-8 flex items-center gap-5 sm:gap-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Unit value={d} label="Dias" />
          <span className="font-display text-2xl text-cream/20">:</span>
          <Unit value={h} label="Horas" />
          <span className="font-display text-2xl text-cream/20">:</span>
          <Unit value={m} label="Min" />
          <span className="font-display text-2xl text-cream/20">:</span>
          <Unit value={s} label="Seg" />
        </motion.div>

        <motion.div
          className="mx-auto mt-12 h-px w-16 bg-gold/40"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        />

        <motion.div
          className="mt-12 max-w-md space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <p className="font-display text-2xl text-cream">{recipient},</p>
          <p className="text-balance font-display italic text-lg leading-relaxed text-cream/85">
            eu não sei quantos capítulos ainda vamos escrever...
          </p>
          <p className="text-balance font-display italic text-lg leading-relaxed text-cream/85">
            mas eu sei que quero continuar escrevendo todos eles com você.
          </p>
          <motion.div
            className="flex justify-center text-crimson"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart size={30} />
          </motion.div>
        </motion.div>

        <motion.button
          onClick={onRestart}
          className="glass mt-14 flex items-center gap-3 rounded-full px-7 py-3.5 font-body text-sm text-cream hover:border-gold/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="text-gold">↺</span>
          <span>Voltar ao começo</span>
        </motion.button>
      </div>
    </section>
  );
}
