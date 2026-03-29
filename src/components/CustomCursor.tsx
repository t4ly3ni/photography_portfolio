import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringPlay, setHoveringPlay] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="play"]')) {
        setHoveringPlay(true);
      } else {
        setHoveringPlay(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        animate={{
          x: position.x - (hoveringPlay ? 40 : 10),
          y: position.y - (hoveringPlay ? 40 : 10),
          width: hoveringPlay ? 80 : 20,
          height: hoveringPlay ? 80 : 20,
          backgroundColor: hoveringPlay ? 'var(--accent)' : 'transparent',
          borderColor: hoveringPlay ? 'transparent' : 'var(--accent)',
          borderWidth: 2,
        }}
        transition={{ type: 'spring', mass: 0.1, stiffness: 200, damping: 20 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          borderStyle: 'solid',
          zIndex: 9999,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          fontWeight: 800,
          fontSize: '0.8rem',
          mixBlendMode: 'difference'
        }}
      >
        {hoveringPlay && 'PLAY'}
      </motion.div>
    </>
  );
}
