import { motion } from 'framer-motion';

// Import cinematic clips
import vid1 from '../../media_ressources/full.mp4';
import vid2 from '../../media_ressources/zied_gharsa.mp4';
import vid3 from '../../media_ressources/WhatsApp Video 2026-04-01 at 10.02.47 PM.mp4';
import vid4 from '../../media_ressources/WhatsApp Video 2026-04-01 at 10.04.17 PM.mp4';
import vid5 from '../../media_ressources/WhatsApp Video 2026-04-01 at 10.12.18 PM.mp4';

const clips = [vid1, vid2, vid3, vid4, vid5];

export default function VideoIntroStrip() {
  return (
    <div style={{ 
      width: '100%', 
      height: '55vh', 
      backgroundColor: '#000', 
      display: 'grid', 
      gridTemplateColumns: `repeat(${clips.length}, 1fr)`,
      overflow: 'hidden',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      {clips.map((clip, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: index * 0.15 }}
          style={{ 
            position: 'relative', 
            width: '100%', 
            height: '100%', 
            overflow: 'hidden',
            borderRight: index < clips.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.8,
              filter: 'grayscale(30%)'
            }}
          >
            <source src={clip} type="video/mp4" />
          </video>
          
          {/* Subtle Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)',
            pointerEvents: 'none'
          }} />
          
          {/* Animated Glow on hover */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(255, 191, 0, 0.05)',
              opacity: 0
            }}
            whileHover={{ opacity: 1 }}
          />
        </motion.div>
      ))}
    </div>
  );
}
