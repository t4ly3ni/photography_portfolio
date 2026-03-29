import { ReactLenis } from 'lenis/react'
import { AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import VideoVault from './components/VideoVault'
import CustomCursor from './components/CustomCursor'
import AboutRami from './components/AboutRami'
import { useState } from 'react'
import VideoPlayerOverlay from './components/VideoPlayerOverlay'

function App() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <CustomCursor />
      
      <main className="main-container">
        {/* Parallax Layering: The background holds deep motionless context */}
        <div style={{ position: 'fixed', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.05, fontSize: '20vw', fontWeight: 900, whiteSpace: 'nowrap', zIndex: -1 }}>
          RAMI
        </div>
        
        <Hero />
        
        {/* Personal Bio Section */}
        <AboutRami />

        {/* Film Strip for Vault Videos */}
        <VideoVault onSelectVideo={setActiveVideo} />
      </main>

      {/* Cinematic Zoom-To-Fill Transition */}
      <AnimatePresence>
        {activeVideo && (
          <VideoPlayerOverlay 
            videoId={activeVideo} 
            onClose={() => setActiveVideo(null)} 
          />
        )}
      </AnimatePresence>
    </ReactLenis>
  )
}

export default App
