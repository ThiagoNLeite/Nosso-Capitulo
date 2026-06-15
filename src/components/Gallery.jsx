import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Photo from "./Photo";
import { gallery } from "../data/content";
import { SectionHeading } from "./Timeline";

const rotations = ["-4deg", "3deg", "-2deg", "5deg", "-3deg", "2deg"];

export default function Gallery() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative px-7 py-24">
      <SectionHeading eyebrow="Momentos guardados" title="Galeria de Memórias" />

      <div className="mx-auto mt-14 flex max-w-md flex-wrap justify-center gap-6">
        {gallery.map((item, i) => (
          <motion.button
            key={i}
            onClick={() => setOpen(i)}
            className="bg-cream p-2.5 pb-8 shadow-2xl"
            style={{ rotate: rotations[i % rotations.length], width: "44%" }}
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: rotations[i % rotations.length] }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
            whileHover={{ scale: 1.05, rotate: "0deg", zIndex: 10 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="aspect-square w-full overflow-hidden bg-ink">
              <Photo src={item.photo} alt={item.caption} className="h-full w-full object-cover" />
            </div>
            <p className="mt-2 text-center font-display text-sm italic text-ink">{item.caption}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center p-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <div className="absolute inset-0 bg-ink/85 backdrop-blur-xl" />
            <motion.div
              className="relative z-10 flex flex-col items-center"
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-cream p-3 pb-10 shadow-2xl" style={{ maxWidth: "78vw" }}>
                <div className="max-h-[55vh] overflow-hidden bg-ink">
                  <Photo
                    src={gallery[open].photo}
                    alt={gallery[open].caption}
                    className="max-h-[55vh] w-full object-contain"
                  />
                </div>
                <p className="mt-3 text-center font-display text-base italic text-ink">
                  {gallery[open].caption}
                </p>
              </div>
              <motion.p
                className="mt-7 max-w-xs text-balance text-center font-display italic text-lg text-cream"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {gallery[open].message}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
