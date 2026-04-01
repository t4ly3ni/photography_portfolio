import { ReactLenis } from 'lenis/react'
import { AnimatePresence } from 'framer-motion'
import VideoIntroStrip from './components/VideoIntroStrip'
import Hero from './components/Hero'
import VideoVault from './components/VideoVault'
import CustomCursor from './components/CustomCursor'
import ContactBubble from './components/ContactBubble'
import AboutRami from './components/AboutRami'
import WorkExperience from './components/WorkExperience'
import TechnicalSkills from './components/TechnicalSkills'
import Contact from './components/Contact'
import { useState } from 'react'
import VideoPlayerOverlay from './components/VideoPlayerOverlay'

function App() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <CustomCursor />
      <ContactBubble />
      
      <main className="main-container">
        {/* Parallax Layering */}
        <div style={{ position: 'fixed', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.05, fontSize: '20vw', fontWeight: 900, whiteSpace: 'nowrap', zIndex: -1 }}>
          RAMI
        </div>
        
        <Hero />

        {/* Cinematic Intro Strip under Broadcast section */}
        <VideoIntroStrip />
        
        {/* Personal Bio Section */}
        <AboutRami />

        {/* Career Timeline */}
        <WorkExperience />

        {/* Technical Proficiencies */}
        <TechnicalSkills />

        {/* Film Strip for Vault Videos */}
        <VideoVault onSelectVideo={setActiveVideo} />

        {/* Contact Footer */}
        <Contact />
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
