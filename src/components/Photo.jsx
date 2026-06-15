import { useState } from "react";
import Heart from "./Heart";

// Foto com fallback elegante: se a imagem não existir ainda,
// mostra um placeholder dourado discreto em vez de quebrar o layout.
export default function Photo({ src, alt = "", className = "", style }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#1a1416] to-[#0D0B0C] ${className}`}
        style={style}
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-2 text-gold/40">
          <Heart size={34} filled={false} strokeWidth={1.2} />
          <span className="font-body text-[10px] tracking-[0.2em] uppercase">sua foto aqui</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
      style={style}
      draggable={false}
    />
  );
}
