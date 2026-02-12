'use client';

import { useEffect, useRef, useState } from "react";

export default function Musique() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const startedRef = useRef(false);
  const [isMuted, setIsMuted] = useState(false);

  const srcMusique = "/Musique/tamid.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Nettoyage fort pour éviter écho au premier load
    audio.pause();
    audio.currentTime = 0;
    audio.muted = isMuted;
    audio.volume = isMuted ? 0 : 1;

    const startOnce = async () => {
      if (startedRef.current) return;
      startedRef.current = true;

      try {
        await audio.play();
      } catch {}
    };

    // Démarre au premier geste (stable + mobile safe)
    document.addEventListener("click", startOnce, { passive: true });
    document.addEventListener("touchstart", startOnce, { passive: true });

    return () => {
      document.removeEventListener("click", startOnce);
      document.removeEventListener("touchstart", startOnce);
      audio.pause();
      audio.currentTime = 0;
      startedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMute = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Si jamais la musique n’a pas encore démarré
    if (!startedRef.current) {
      startedRef.current = true;
      try { await audio.play(); } catch {}
    }

    const nextMuted = !isMuted;

    audio.muted = nextMuted;
    audio.volume = nextMuted ? 0 : 1;

    setIsMuted(nextMuted);
  };

  const PlayIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DD5460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3,9 9,9 15,3 15,21 9,15 3,15" />
      <path d="M19 8a5 5 0 0 1 0 8" />
      <path d="M21 5a9 9 0 0 1 0 14" />
    </svg>
  );

  const PauseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DD5460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3,9 9,9 15,3 15,21 9,15 3,15" />
      <line x1="19" y1="9" x2="23" y2="15" />
      <line x1="23" y1="9" x2="19" y2="15" />
    </svg>
  );

  return (
    <div className="musique">
      <audio
        ref={audioRef}
        src={srcMusique}
        loop
        playsInline
        preload="auto"
        className="absolute w-0 h-0 opacity-0 pointer-events-none"
      />

      <button type="button" onClick={handleMute}>
        {isMuted ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
}