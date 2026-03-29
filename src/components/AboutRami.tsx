import { motion } from 'framer-motion';

// Import local assets dynamically since they are now available
import img1 from '../../media_ressources/personal_photos/503409482_2765424916987164_6251504125687779431_n.jpg';
import img2 from '../../media_ressources/personal_photos/509361318_2781746268688362_3430735660176414480_n.jpg';
import img3 from '../../media_ressources/personal_photos/559976475_2895443497318638_5794575396664343093_n.jpg';
import img4 from '../../media_ressources/personal_photos/587335051_2938714712991516_6000036510394832408_n.jpg';

export default function AboutRami() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-primary)', padding: '10vw', display: 'flex', flexDirection: 'column', gap: '4rem', zIndex: 50 }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 style={{ fontSize: '5vw', fontWeight: 100, color: 'var(--text-primary)', lineHeight: 1 }}>
          BEHIND<br/>THE LENS.
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        
        {/* Dynamic 4-Photo Asymmetrical Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '1rem', position: 'relative' }}>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
             style={{ borderRadius: '1rem', overflow: 'hidden', height: '38vh', minHeight: '300px', gridRow: 'span 2' }}
          >
            <img src={img1} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '20% 34%' }} alt="Rami Operating Camera 1" />
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             style={{ borderRadius: '1rem', overflow: 'hidden', height: '22vh', minHeight: '190px' }}
          >
            <img src={img2} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '52% 34%' }} alt="Studio Setup 2" />
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.3 }}
             style={{ borderRadius: '1rem', overflow: 'hidden', height: '22vh', minHeight: '190px', transform: 'translateY(-1rem)' }}
          >
            <img src={img3} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '33% 38%' }} alt="Rami Operating Camera 3" />
          </motion.div>

          {/* Floater image spanning bottom */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
             style={{ borderRadius: '1rem', overflow: 'hidden', height: '24vh', minHeight: '200px', gridColumn: 'span 2', marginTop: '-0.5rem' }}
          >
            <img src={img4} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '53% 30%' }} alt="Studio Setup 4" />
          </motion.div>
        </div>

        {/* Bio text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <p style={{ fontSize: '1.5rem', lineHeight: 1.6, color: 'var(--text-primary)', fontWeight: 300 }}>
            I am Rami Ragheb, a dedicated National TV Videographer and Studio Artist obsessed with precision, framing, and light. 
          </p>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--text-muted)', fontWeight: 300 }}>
            With years of high-stakes broadcast experience spanning live news, documentaries, and cinematic studio productions, I specialize in delivering pixel-perfect technical execution. My philosophy is simple: the camera should feel invisible, and the story should feel monumental.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Role</span>
              <span style={{ fontWeight: 600, color: 'var(--accent)' }}>TV Videographer / Artist</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Systems</span>
              <span style={{ fontWeight: 600 }}>ARRI, Sony Cine, RED</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
