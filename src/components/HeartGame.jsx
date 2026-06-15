import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./Timeline";
import Heart from "./Heart";

// Posições fixas dos 7 corações escondidos, espalhados pela página inteira.
// top em % da altura total do documento; left em % da largura.
const HIDDEN = [
  { top: "8%", left: "86%" },
  { top: "23%", left: "6%" },
  { top: "37%", left: "90%" },
  { top: "52%", left: "10%" },
  { top: "66%", left: "84%" },
  { top: "79%", left: "14%" },
  { top: "93%", left: "88%" },
];

const MESSAGES = [
  "Você encontrou uma parte da nossa história",
  "Mais um pedacinho de nós",
  "Você está chegando perto",
  "Cada coração é um momento meu com você",
  "Faltam poucos... continue",
  "Quase lá, meu amor",
  "O último — e o mais importante",
];

export function HiddenHearts({ found, onFind }) {
  return (
    <>
      {HIDDEN.map((pos, i) =>
        found.includes(i) ? null : (
          <button
            key={i}
            onClick={() => onFind(i)}
            className="absolute z-30 text-crimson opacity-25 transition-opacity hover:opacity-90"
            style={{ top: pos.top, left: pos.left }}
            aria-label="coração escondido"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
            >
              <Heart size={22} />
            </motion.div>
          </button>
        )
      )}
    </>
  );
}

export default function HeartGame({ found, lastFound, clearLast }) {
  const total = 7;
  const count = found.length;
  const done = count === total;

  return (
    <section className="relative px-7 py-24">
      <SectionHeading eyebrow="Um jogo só nosso" title="Caça aos Nossos Corações" />

      <motion.p
        className="mx-auto mt-6 max-w-sm text-center font-body text-sm leading-relaxed text-cream/65"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Existem 7 corações escondidos por toda a nossa história. Role a página com calma e
        encontre cada um deles.
      </motion.p>

      {/* contador */}
      <div className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full glass px-6 py-3">
        <span className="text-crimson">
          <Heart size={18} />
        </span>
        <span className="font-body text-sm tracking-wide text-cream">
          Corações encontrados: <span className="text-gold">{count}/{total}</span>
        </span>
      </div>

      {/* progresso de corações */}
      <div className="mx-auto mt-6 flex w-fit gap-2 text-gold">
        {Array.from({ length: total }).map((_, i) => (
          <Heart key={i} size={18} filled={i < count} strokeWidth={1.3} className="transition-all" />
        ))}
      </div>

      {/* mensagem final ao completar */}
      <AnimatePresence>
        {done && (
          <motion.div
            className="mx-auto mt-12 max-w-sm rounded-3xl glass p-8 text-center"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="font-display text-xl text-gold">Você encontrou todos os pedaços...</p>
            <p className="mt-4 font-display italic text-lg leading-relaxed text-cream/85">
              Mas existe algo que nenhum jogo consegue medir:
              <br />o quanto você é importante.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL ao encontrar cada coração — fundo escurecido + cartão branco */}
      <AnimatePresence>
        {lastFound !== null && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-center justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onAnimationComplete={() => setTimeout(clearLast, 2200)}
          >
            {/* backdrop bem escuro com blur */}
            <div
              className="absolute inset-0 bg-ink/90 backdrop-blur-md"
              onClick={clearLast}
            />

            <motion.div
              className="relative z-10 flex w-full max-w-xs flex-col items-center rounded-3xl bg-[#f6f1e8] px-8 py-10 text-center shadow-2xl"
              initial={{ scale: 0.6, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", damping: 16, stiffness: 220 }}
            >
              {/* coração com partículas */}
              <div className="relative mb-5">
                {[...Array(10)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-crimson"
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                      x: Math.cos((i / 10) * Math.PI * 2) * 60,
                      y: Math.sin((i / 10) * Math.PI * 2) * 60,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                ))}
                <motion.div
                  className="text-crimson"
                  animate={{ scale: [0.6, 1.25, 1] }}
                  transition={{ duration: 0.7 }}
                  style={{ filter: "drop-shadow(0 4px 14px rgba(177,18,38,0.35))" }}
                >
                  <Heart size={64} />
                </motion.div>
              </div>

              <motion.p
                className="text-balance font-display text-lg leading-relaxed text-ink/85"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                {MESSAGES[lastFound] ?? MESSAGES[0]}
              </motion.p>

              <span className="mt-5 font-body text-[10px] uppercase tracking-[0.25em] text-crimson/60">
                {count}/{total} encontrados
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
