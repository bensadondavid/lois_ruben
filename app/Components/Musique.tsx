'use client'
import { useState, useRef } from "react";

function Musique(){

  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const srcMusique = '/Musique/tamid.mp3'

  const PlayIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DD5460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <polygon points="3,9 9,9 15,3 15,21 9,15 3,15" />
      <path d="M19 8a5 5 0 0 1 0 8" />
      <path d="M21 5a9 9 0 0 1 0 14" />
    </svg>
  );
  
  const PauseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DD5460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <polygon points="3,9 9,9 15,3 15,21 9,15 3,15" />
      <line x1="19" y1="9" x2="23" y2="15" />
      <line x1="23" y1="9" x2="19" y2="15" />
    </svg>  
  );

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (

    <div className="musique">
      <audio style={{display: 'none'}} ref={audioRef} src={srcMusique} autoPlay loop controls />
      <button onClick={handleMute}>
        {isMuted ? <PauseIcon /> : <PlayIcon /> }
      </button>
    </div>
  );
  
};

export default Musique;