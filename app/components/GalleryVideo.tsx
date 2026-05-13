'use client';

import { useEffect, useRef } from 'react';

export default function GalleryVideo({ src, speed = 1, startTime = 0 }: { src: string; speed?: number; startTime?: number }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.playbackRate = speed;

    const seek = () => {
      if (startTime > 0) el.currentTime = startTime;
      el.playbackRate = speed;
    };

    el.addEventListener('canplay', seek, { once: true });
    if (el.readyState >= 3) seek();

    return () => el.removeEventListener('canplay', seek);
  }, [speed, startTime]);

  return (
    <video
      ref={ref}
      src={startTime > 0 ? `${src}#t=${startTime}` : src}
      autoPlay
      loop
      muted
      playsInline
      disablePictureInPicture
      className="w-full h-full object-cover pointer-events-none"
    />
  );
}
