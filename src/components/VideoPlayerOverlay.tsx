import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { VAULT_DATA } from './VideoVault';

export default function VideoPlayerOverlay({ videoId, onClose }: { videoId: string, onClose: () => void }) {
  const project = VAULT_DATA.find((p) => p.id === videoId);

  if (!project) return null;

  const isVerticalVideo = project.platform === 'facebook' || project.platform === 'instagram';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)',
      }}
    >
      <button 
        onClick={onClose} 
        style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          background: 'none',
          border: 'none',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          zIndex: 1010
        }}
      >
        <X size={32} />
      </button>

      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        style={{
          position: 'absolute',
          top: '1.35rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: '999px',
          padding: '0.55rem 1rem',
          color: 'var(--text-primary)',
          fontSize: '0.9rem',
          fontWeight: 600,
          letterSpacing: '0.02em',
          backdropFilter: 'blur(12px)',
          zIndex: 1010,
          maxWidth: 'min(90vw, 980px)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {project.title}
      </motion.div>

      {/* Expanded Container: Handles YouTube Wide vs Facebook Vertical */}
      <motion.div 
        layoutId={`video-container-${project.id}`}
        style={{ 
          width: isVerticalVideo ? 'min(92vw, 540px)' : 'min(92vw, 1400px)',
          height: isVerticalVideo ? 'min(88vh, 960px)' : 'auto',
          aspectRatio: isVerticalVideo ? '9/16' : '16/9',
          borderRadius: '1rem', 
          overflow: 'hidden', 
          position: 'relative' 
        }}
      >
        <motion.div 
          layoutId={`video-media-${project.id}`}
          style={{ width: '100%', height: '100%', backgroundColor: '#000' }}
        >
          {project.platform === 'youtube' ? (
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${project.sourceId}?autoplay=1&mute=0`} 
              title={project.title} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen 
              style={{ border: 'none' }}
            />
          ) : project.platform === 'instagram' ? (
            <iframe 
              src={`https://www.instagram.com/reels/${project.sourceId}/embed`}
              width="100%" 
              height="100%" 
              style={{ border: 'none', background: '#000' }}
              scrolling="no" 
              allowTransparency={true}
              frameBorder="0" 
            />
          ) : project.platform === 'local' ? (
            <video
              src={project.sourceId}
              controls
              autoPlay
              style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000' }}
            />
          ) : (
            <iframe 
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(project.sourceId)}&show_text=false&width=540&height=960`}
              width="100%" 
              height="100%" 
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          )}
        </motion.div>

        {/* Title is now displayed above the player for all platforms */}

      </motion.div>
    </motion.div>
  );
}
