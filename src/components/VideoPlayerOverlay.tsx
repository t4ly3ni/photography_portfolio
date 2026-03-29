import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { VAULT_DATA } from './VideoVault';

export default function VideoPlayerOverlay({ videoId, onClose }: { videoId: string, onClose: () => void }) {
  const project = VAULT_DATA.find((p) => p.id === videoId);

  if (!project) return null;

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

      {/* Expanded Container: Handles YouTube Wide vs Facebook Vertical */}
      <motion.div 
        layoutId={`video-container-${project.id}`}
        style={{ 
          width: '90vw', 
          maxWidth: '1400px',
          aspectRatio: '16/9',
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
          ) : (
            <iframe 
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(project.sourceId)}&show_text=false&width=1280`}
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

        {/* Floating Technical Specs Glassmorphism Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            borderRadius: '12px',
            color: 'var(--text-primary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
          }}
        >
          <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent)' }}>{project.title}</h3>
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
