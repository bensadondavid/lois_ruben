'use client';

import { useEffect, useRef, useState } from "react";

export default function Musique() {
  const audioRef = useRef<HTMLAudioElement>(null);

  // UI: true = son coupé (icône mute), false = son actif
  const [isMuted, setIsMuted] = useState(true);

  const srcMusique = "/Musique/tamid.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // On démarre en mode "autoplay autorisé" (muted)
    audio.muted = true;
    audio.volume = 0;

    const unlockAndPlay = async () => {
      const a = audioRef.current;
      if (!a) return;

      try {
        // On passe en son actif
        a.muted = false;
        a.volume = 1;

        await a.play();

        setIsMuted(false);

        document.removeEventListener("click", unlockAndPlay);
        document.removeEventListener("touchstart", unlockAndPlay);
        document.removeEventListener("keydown", unlockAndPlay);
      } catch {
        // si encore bloqué, on retentera au prochain geste
      }
    };

    // Tentative immédiate (souvent bloquée en mobile)
    audio.play().catch(() => {});

    // On écoute uniquement des gestes "valables"
    document.addEventListener("click", unlockAndPlay, { passive: true });
    document.addEventListener("touchstart", unlockAndPlay, { passive: true });
    document.addEventListener("keydown", unlockAndPlay);

    return () => {
      document.removeEventListener("click", unlockAndPlay);
      document.removeEventListener("touchstart", unlockAndPlay);
      document.removeEventListener("keydown", unlockAndPlay);
    };
  }, []);

  const handleMute = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    // On s'assure que c'est bien "débloqué" par un geste user
    try { await audio.play(); } catch {}

    const nextMuted = !isMuted;

    // Ici on fait les deux (muted + volume) pour être robuste
    audio.muted = nextMuted;
    audio.volume = nextMuted ? 0 : 1;

    setIsMuted(nextMuted);
  };

  const SoundOnIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DD5460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3,9 9,9 15,3 15,21 9,15 3,15" />
      <path d="M19 8a5 5 0 0 1 0 8" />
      <path d="M21 5a9 9 0 0 1 0 14" />
    </svg>
  );

  const MutedIcon = () => (
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
        autoPlay
        loop
        playsInline
        preload="auto"
        // IMPORTANT: on ne met PAS muted={true} en dur !
        muted={isMuted}
        className="absolute w-0 h-0 opacity-0 pointer-events-none"
      />

      <button type="button" onClick={handleMute}>
        {isMuted ? <MutedIcon /> : <SoundOnIcon />}
      </button>
    </div>
  );
}