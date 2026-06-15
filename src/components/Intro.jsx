import { motion } from "framer-motion";
import Photo from "./Photo";
import Particles from "./Particles";
import Heart from "./Heart";
import { photos, recipient, startDateLabel } from "../data/content";

export default function Intro({ onOpen }) {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden px-7">
      {/* fundo: foto do casal desfocada */}
      <div className="absolute inset-0">
        <Photo
          src={photos.hero}
          alt="Nós dois"
          className="h-full w-full object-cover scale-110 blur-[6px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/90" />
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      <Particles count={30} />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.span
          className="mb-6 font-body text-[11px] uppercase tracking-[0.45em] text-gold/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Um presente para você
        </motion.span>

        <motion.h1
          className="font-display text-5xl leading-tight text-cream sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.1 }}
        >
          Nosso Capítulo
        </motion.h1>

        <motion.p
          className="mt-3 font-display italic text-xl text-gold sm:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.2 }}
        >
          Escrevendo Nossa História
        </motion.p>

        <motion.div
          className="my-7 h-px w-16 bg-gold/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 0.9 }}
        />

        <motion.p
          className="font-body text-base text-cream/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 1 }}
        >
          Para {recipient}{" "}
          <span className="inline-block align-middle text-crimson">
            <Heart size={15} />
          </span>
        </motion.p>

        <motion.p
          className="mt-1 font-body text-xs uppercase tracking-[0.3em] text-cream/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Desde {startDateLabel}
        </motion.p>

        <motion.button
          onClick={onOpen}
          className="glass group mt-12 flex items-center gap-3 rounded-full px-8 py-4 font-body text-sm tracking-wide text-cream transition-all hover:border-gold/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <span>Abrir nosso capítulo</span>
          <motion.span
            className="text-gold"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.button>
      </div>

      {/* dica de scroll após a entrada */}
      <motion.div
        className="absolute bottom-8 font-body text-[10px] uppercase tracking-[0.3em] text-cream/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ delay: 3.5, duration: 2.5, repeat: Infinity }}
      >
        toque para começar
      </motion.div>
    </section>
  );
}
