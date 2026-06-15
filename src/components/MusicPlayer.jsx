import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Photo from "./Photo";
import { music, photos } from "../data/content";

function fmt(s) {
  if (!s || isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

const MusicPlayer = ({ audioRef, playing, setPlaying }) => {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => {
      setCurrent(a.currentTime);
      setProgress(a.duration ? (a.currentTime / a.duration) * 100 : 0);
    };
    const onMeta = () => setDuration(a.duration);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
    };
  }, [audioRef]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().catch(() => {});
      setPlaying(true);
    }
  };

  const seek = (e) => {
    const a = audioRef.current;
    if (!a || !a.duration || !barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const x = (e.clientX ?? e.touches?.[0]?.clientX) - rect.left;
    a.currentTime = (x / rect.width) * a.duration;
  };

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-7 py-20">
      <motion.span
        className="mb-10 font-body text-[11px] uppercase tracking-[0.4em] text-gold/70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Nossa trilha sonora
      </motion.span>

      {/* disco de vinil */}
      <motion.div
        className="relative h-64 w-64 sm:h-72 sm:w-72"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* brilho suave */}
        <div className="absolute -inset-6 rounded-full bg-crimson/20 blur-3xl" />
        {/* sulcos do vinil */}
        <div
          className={`relative h-full w-full rounded-full bg-[#0a0809] shadow-2xl ${
            playing ? "animate-spinSlow" : ""
          }`}
          style={{
            boxShadow:
              "0 0 0 8px #111, inset 0 0 60px rgba(0,0,0,0.9), 0 30px 60px rgba(0,0,0,0.6)",
          }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-cream/5"
              style={{ inset: `${14 + i * 12}px` }}
            />
          ))}
          {/* foto central (label do disco) */}
          <div className="absolute inset-[34%] overflow-hidden rounded-full ring-2 ring-gold/40">
            <Photo src={photos.vinyl} alt="Nós" className="h-full w-full object-cover" />
          </div>
          {/* furo central */}
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink ring-2 ring-cream/20" />
        </div>
      </motion.div>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h3 className="font-display text-2xl text-cream">{music.title}</h3>
        <p className="mt-1 font-body text-sm tracking-wide text-cream/60">{music.artist}</p>
      </motion.div>

      {/* barra de progresso */}
      <div className="mt-8 w-full max-w-xs">
        <div
          ref={barRef}
          onClick={seek}
          className="group relative h-1.5 w-full cursor-pointer rounded-full bg-cream/10"
        >
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-crimson to-gold"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-gold shadow"
            style={{ left: `calc(${progress}% - 6px)` }}
          />
        </div>
        <div className="mt-2 flex justify-between font-body text-[11px] text-cream/40">
          <span>{fmt(current)}</span>
          <span>{fmt(duration)}</span>
        </div>
      </div>

      {/* play / pause */}
      <motion.button
        onClick={toggle}
        className="glass mt-8 flex h-16 w-16 items-center justify-center rounded-full text-gold hover:border-gold/60"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={playing ? "Pausar" : "Tocar"}
      >
        {playing ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5.5v13l11-6.5z" />
          </svg>
        )}
      </motion.button>

      <motion.p
        className="mt-10 max-w-sm text-balance text-center font-display italic text-lg leading-relaxed text-cream/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        “{music.note}”
      </motion.p>
    </section>
  );
};

export default MusicPlayer;
