import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const leftPanelX = useTransform(smoothProgress, [0, 1], ["0%", "-100%"]);
  const rightPanelX = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const videoScale = useTransform(smoothProgress, [0, 1], [0.8, 1]);
  const overlayOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} style={{ height: '200vh', position: 'relative' }}>
      
      {/* Background Masked Player: 21:9 Cinema Scope */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
        <motion.div 
          style={{ width: '90vw', maxWidth: '1200px', aspectRatio: '21/9', scale: videoScale, borderRadius: '1rem', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
        >
          {/* We use a high-quality free stock URL representing National TV quality footage for demo */}
          <video 
            autoPlay loop muted playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src="https://videos.pexels.com/video-files/5003303/5003303-uhd_2560_1440_30fps.mp4"
          />
          {/* Shadow Vignette */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'var(--shadow-vignette)' }} />
        </motion.div>
      </div>

      {/* Split Screens (Foreground) */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100vh', overflow: 'hidden', display: 'flex' }}>
        
        {/* Left Side: Broadcast */}
        <motion.div 
          style={{ flex: 1, backgroundColor: 'var(--bg-primary)', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '2rem', x: leftPanelX, zIndex: 10 }}
        >
          <motion.h1 style={{ fontSize: '10vw', fontWeight: 900, opacity: overlayOpacity, textTransform: 'uppercase', letterSpacing: '-0.05em', color: 'var(--text-primary)' }}>BROAD</motion.h1>
        </motion.div>
        
        {/* Right Side: Studio */}
        <motion.div 
          style={{ flex: 1, backgroundColor: 'var(--bg-primary)', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '2rem', x: rightPanelX, zIndex: 10 }}
        >
          <motion.h1 style={{ fontSize: '10vw', fontWeight: 900, opacity: overlayOpacity, textTransform: 'uppercase', letterSpacing: '-0.05em', color: 'var(--text-muted)' }}>CAST</motion.h1>
        </motion.div>

        <motion.div
          style={{
            opacity: overlayOpacity,
            position: 'absolute',
            left: '50%',
            bottom: '2.2rem',
            transform: 'translateX(-50%)',
            width: '28px',
            height: '46px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.32)',
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '8px',
            zIndex: 30,
            pointerEvents: 'none',
          }}
        >
          <motion.span
            animate={{ y: [0, 13, 0], opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '4px',
              height: '9px',
              borderRadius: '999px',
              backgroundColor: 'var(--accent)',
              display: 'block',
            }}
          />
        </motion.div>

      </div>
    </div>
  );
}
