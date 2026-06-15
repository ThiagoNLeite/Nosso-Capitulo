import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heart from "./Heart";

const phrases = [
  "Preparando uma surpresa...",
  "Reunindo nossas memórias...",
  "Abrindo o nosso capítulo...",
];

export default function Loader({ onDone }) {
  const [phrase, setPhrase] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhrase(1), 1000);
    const t2 = setTimeout(() => setPhrase(2), 2000);
    const t3 = setTimeout(() => setLeaving(true), 2900);
    const t4 = setTimeout(() => onDone(), 3500);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink px-8"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* selo dourado pulsante */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-gold"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart size={46} filled={false} strokeWidth={1.2} />
            </motion.div>
          </motion.div>

          <div className="h-7 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={phrase}
                className="font-display italic text-lg text-cream/80 text-center"
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {phrases[phrase]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* barra de progresso fina */}
          <div className="mt-10 h-px w-44 overflow-hidden bg-cream/10">
            <motion.div
              className="h-full bg-gradient-to-r from-crimson to-gold"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.9, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
