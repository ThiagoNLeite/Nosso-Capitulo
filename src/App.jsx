import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Intro from "./components/Intro";
import MusicPlayer from "./components/MusicPlayer";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import HeartGame, { HiddenHearts } from "./components/HeartGame";
import Letters from "./components/Letters";
import Final from "./components/Final";
import Heart from "./components/Heart";
import { music } from "./data/content";

export default function App() {
  const [stage, setStage] = useState("loading"); // loading | intro | story
  const [transitioning, setTransitioning] = useState(false);

  // música
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // jogo dos corações
  const [found, setFound] = useState([]);
  const [lastFound, setLastFound] = useState(null);

  const openChapter = () => {
    setTransitioning(true);
    // inicia a música ao entrar
    const a = audioRef.current;
    if (a) {
      a.volume = 0.7;
      a.play().then(() => setPlaying(true)).catch(() => {});
    }
    setTimeout(() => {
      setStage("story");
      setTimeout(() => setTransitioning(false), 100);
      window.scrollTo(0, 0);
    }, 1200);
  };

  const findHeart = (i) => {
    if (found.includes(i)) return;
    setFound((f) => [...f, i]);
    setLastFound(i);
  };

  const restart = () => {
    setFound([]);
    setLastFound(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStage("intro");
  };

  return (
    <div className="grain relative min-h-[100dvh] w-full bg-ink">
      <audio ref={audioRef} src={music.src} loop preload="auto" />

      {/* Loading 3s */}
      {stage === "loading" && <Loader onDone={() => setStage("intro")} />}

      {/* Tela inicial */}
      <AnimatePresence>
        {stage === "intro" && (
          <motion.div key="intro" exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <Intro onOpen={openChapter} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cortina de transição */}
      <AnimatePresence>
        {transitioning && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-crimson"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: [0, 1.2, 1], rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <Heart size={40} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conteúdo / história */}
      {stage === "story" && (
        <motion.main
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* corações escondidos espalhados por toda a página */}
          <HiddenHearts found={found} onFind={findHeart} />

          <MusicPlayer audioRef={audioRef} playing={playing} setPlaying={setPlaying} />
          <Timeline />
          <Gallery />
          <HeartGame found={found} lastFound={lastFound} clearLast={() => setLastFound(null)} />
          <Letters />
          <Final onRestart={restart} />
        </motion.main>
      )}
    </div>
  );
}
