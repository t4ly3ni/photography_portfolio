import { motion } from 'framer-motion';

type VideoProject = {
  id: string;
  platform: 'youtube' | 'facebook' | 'instagram' | 'local';
  sourceId: string; // YouTube ID, FB URL, or Instagram ID/URL
  title: string;
  thumbnail: string;
  role: string;
  camera: string;
  network: string;
  year: string;
  isNationalTv: boolean;
};

type VideoSection = {
  id: string;
  title: string;
  subtitle: string;
  projects: VideoProject[];
};

const TELVZATV_LOGO = '/talvzatx-logo.svg';

import beinCover1 from '../../media_ressources/match 1.jpg';
import beinCover2 from '../../media_ressources/match 2.jpg';
import freelanceLocalVid from '../../media_ressources/personal_photos/VID-20260401-WA0005.mp4';

const VAULT_SECTIONS: VideoSection[] = [
  {
    id: 'bein-sports',
    title: 'beIN Sports',
    subtitle: 'CAF Champions League — Live Sports Coverage',
    projects: [
      {
        id: 'bein-yt-1',
        platform: 'youtube',
        sourceId: 'uvIJMxgSK6g',
        title: 'BEIN SPORTS MATCH 01',
        thumbnail: beinCover1,
        role: 'Live Camera Operator',
        camera: 'Broadcast Pedestal',
        network: 'beIN Sports',
        year: '2026',
        isNationalTv: true,
      },
      {
        id: 'bein-yt-2',
        platform: 'youtube',
        sourceId: 'pnQlVLcqHXI',
        title: 'BEIN SPORTS MATCH 02',
        thumbnail: beinCover2,
        role: 'Live Camera Operator',
        camera: 'Broadcast Pedestal',
        network: 'beIN Sports',
        year: '2026',
        isNationalTv: true,
      },
    ],
  },
  {
    id: 'youtube',
    title: 'Watania1 TV',
    subtitle: 'Featured Watania1 TV videos',
    projects: [
      {
        id: 'yt-1',
        platform: 'youtube',
        sourceId: '4JXHjUlDqOc',
        title: 'YOUTUBE FEATURE 01',
        thumbnail: 'https://img.youtube.com/vi/4JXHjUlDqOc/maxresdefault.jpg',
        role: 'Videographer',
        camera: 'ARRI ALEXA Mini',
        network: 'YouTube',
        year: '2025',
        isNationalTv: false,
      },
      {
        id: 'yt-2',
        platform: 'youtube',
        sourceId: 'on4mxeVSSsU',
        title: 'YOUTUBE FEATURE 02',
        thumbnail: 'https://img.youtube.com/vi/on4mxeVSSsU/maxresdefault.jpg',
        role: 'Studio Artist',
        camera: 'Sony VENICE',
        network: 'YouTube',
        year: '2024',
        isNationalTv: false,
      },
      {
        id: 'yt-3',
        platform: 'youtube',
        sourceId: 'ywufmD6ISj4',
        title: 'YOUTUBE FEATURE 03',
        thumbnail: 'https://img.youtube.com/vi/ywufmD6ISj4/maxresdefault.jpg',
        role: 'Director of Photography',
        camera: 'Sony FX9',
        network: 'YouTube',
        year: '2024',
        isNationalTv: false,
      },
      {
        id: 'yt-9',
        platform: 'youtube',
        sourceId: 'aJLF7hXvT04',
        title: 'YOUTUBE FEATURE 09',
        thumbnail: 'https://img.youtube.com/vi/aJLF7hXvT04/maxresdefault.jpg',
        role: 'Cinematographer',
        camera: 'Sony FX6',
        network: 'YouTube',
        year: '2023',
        isNationalTv: false,
      },
      {
        id: 'yt-10',
        platform: 'youtube',
        sourceId: 'OqCYvQi3DfM',
        title: 'YOUTUBE FEATURE 10',
        thumbnail: 'https://img.youtube.com/vi/OqCYvQi3DfM/maxresdefault.jpg',
        role: 'Lead Videographer',
        camera: 'Blackmagic 6K Pro',
        network: 'YouTube',
        year: '2023',
        isNationalTv: false,
      },
    ],
  },
  {
    id: 'video-clip',
    title: 'Video Clip',
    subtitle: 'Professional music and video clips',
    projects: [
      {
        id: 'rap-1',
        platform: 'youtube',
        sourceId: 'WqphQ4KqnXM',
        title: 'VIDEO CLIP 01',
        thumbnail: 'https://img.youtube.com/vi/WqphQ4KqnXM/maxresdefault.jpg',
        role: 'Camera Operator',
        camera: 'Canon C70',
        network: 'YouTube',
        year: '2023',
        isNationalTv: false,
      },
      {
        id: 'rap-2',
        platform: 'youtube',
        sourceId: 'vG8ar-UaD08',
        title: 'VIDEO CLIP 02',
        thumbnail: 'https://img.youtube.com/vi/vG8ar-UaD08/maxresdefault.jpg',
        role: 'Camera Operator',
        camera: 'Sony FX6',
        network: 'YouTube',
        year: '2024',
        isNationalTv: false,
      },
      {
        id: 'rap-fb-1',
        platform: 'facebook',
        sourceId: 'https://www.facebook.com/reel/1185694182429605',
        title: 'VIDEO CLIP 03',
        thumbnail: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=1200&auto=format&fit=crop',
        role: 'Videographer',
        camera: 'Sony FX3',
        network: 'Facebook',
        year: '2025',
        isNationalTv: false,
      },
      {
        id: 'rap-fb-2',
        platform: 'facebook',
        sourceId: 'https://www.facebook.com/reel/1790873145090898',
        title: 'VIDEO CLIP 04',
        thumbnail: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?q=80&w=1200&auto=format&fit=crop',
        role: 'Videographer',
        camera: 'Sony FX3',
        network: 'Facebook',
        year: '2025',
        isNationalTv: false,
      },
      {
        id: 'rap-yt-5',
        platform: 'youtube',
        sourceId: 'SL02vYnyDLE',
        title: 'VIDEO CLIP 05',
        thumbnail: 'https://img.youtube.com/vi/SL02vYnyDLE/maxresdefault.jpg',
        role: 'Videographer',
        camera: 'Sony FX3',
        network: 'YouTube',
        year: '2025',
        isNationalTv: false,
      },
    ],
  },
  {
    id: 'telvza',
    title: 'Facebook - TelvzaTV',
    subtitle: 'Work with TelvzaTV',
    projects: [
      {
        id: 'telvza-1',
        platform: 'facebook',
        sourceId: 'https://www.facebook.com/reel/941043650753658',
        title: 'TELVZATV VIDEO 01',
        thumbnail: TELVZATV_LOGO,
        role: 'Camera Operator',
        camera: 'Broadcast Studio Setup',
        network: 'TelvzaTV',
        year: '2024',
        isNationalTv: true,
      },
      {
        id: 'telvza-2',
        platform: 'facebook',
        sourceId: 'https://www.facebook.com/reel/781174010735223',
        title: 'TELVZATV VIDEO 02',
        thumbnail: TELVZATV_LOGO,
        role: 'Videographer',
        camera: 'Broadcast Rig',
        network: 'TelvzaTV',
        year: '2024',
        isNationalTv: true,
      },
      {
        id: 'telvza-3',
        platform: 'facebook',
        sourceId: 'https://www.facebook.com/reel/722433596729717',
        title: 'TELVZATV VIDEO 03',
        thumbnail: TELVZATV_LOGO,
        role: 'Live Coverage',
        camera: 'Sony FX9',
        network: 'TelvzaTV',
        year: '2024',
        isNationalTv: true,
      },
      {
        id: 'telvza-4',
        platform: 'facebook',
        sourceId: 'https://www.facebook.com/reel/493402680339649',
        title: 'TELVZATV VIDEO 04',
        thumbnail: TELVZATV_LOGO,
        role: 'Broadcast Content',
        camera: 'Multi-Cam Setup',
        network: 'TelvzaTV',
        year: '2024',
        isNationalTv: true,
      },
    ],
  },
  {
    id: 'baccar',
    title: 'Facebook - Freelance',
    subtitle: 'Freelance Projects',
    projects: [
      {
        id: 'baccar-7',
        platform: 'local',
        sourceId: freelanceLocalVid,
        title: 'FREELANCE VIDEO 01',
        thumbnail: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1200&auto=format&fit=crop',
        role: 'Cinematographer',
        camera: 'Sony FX9',
        network: 'Freelance',
        year: '2026',
        isNationalTv: false,
      },
      {
        id: 'baccar-4',
        platform: 'facebook',
        sourceId: 'https://www.facebook.com/reel/1438154277211230',
        title: 'FREELANCE VIDEO 02',
        thumbnail: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1200&auto=format&fit=crop',
        role: 'Director of Photography',
        camera: 'Sony FX9',
        network: 'Freelance',
        year: '2024',
        isNationalTv: false,
      },
      {
        id: 'baccar-5',
        platform: 'facebook',
        sourceId: 'https://www.facebook.com/reel/772735205418988',
        title: 'FREELANCE VIDEO 03',
        thumbnail: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1200&auto=format&fit=crop',
        role: 'Cinematographer',
        camera: 'ARRI Mini LF',
        network: 'Freelance',
        year: '2024',
        isNationalTv: false,
      },
      {
        id: 'baccar-3',
        platform: 'facebook',
        sourceId: 'https://www.facebook.com/reel/3653788164766517',
        title: 'FREELANCE VIDEO 04',
        thumbnail: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1200&auto=format&fit=crop',
        role: 'Director of Photography',
        camera: 'Sony VENICE',
        network: 'Freelance',
        year: '2024',
        isNationalTv: false,
      },
      {
        id: 'baccar-6',
        platform: 'facebook',
        sourceId: 'https://www.facebook.com/reel/9720558298049137',
        title: 'FREELANCE VIDEO 05',
        thumbnail: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1200&auto=format&fit=crop',
        role: 'Cinematographer',
        camera: 'Sony FX9',
        network: 'Freelance',
        year: '2024',
        isNationalTv: false,
      },
    ],
  },
];

const VAULT_DATA: VideoProject[] = VAULT_SECTIONS.flatMap((section) => section.projects);
const SECTION_ORDER = ['baccar', 'bein-sports', 'youtube', 'video-clip', 'telvza'];

export default function VideoVault({ onSelectVideo }: { onSelectVideo: (id: string) => void }) {
  return (
    <section style={{ padding: '5rem 5vw 8rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(2rem, 5vw, 4.5rem)', fontWeight: 200, letterSpacing: '0.08em' }}>
          THE VAULT
        </h2>
        <p style={{ margin: '0.8rem 0 0', color: 'var(--text-muted)', maxWidth: '780px' }}>
          Organized by platform and partner to make browsing faster. Scroll down to see all sections and videos.
        </p>
      </div>

      {VAULT_SECTIONS
        .slice()
        .sort((a, b) => SECTION_ORDER.indexOf(a.id) - SECTION_ORDER.indexOf(b.id))
        .map((section) => (
        <div key={section.id} style={{ marginBottom: '2.75rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              gap: '1rem',
              marginBottom: '1rem',
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: 'clamp(1.1rem, 2.3vw, 1.8rem)', fontWeight: 500 }}>{section.title}</h3>
              <p style={{ margin: '0.35rem 0 0', color: 'var(--text-muted)', fontSize: '0.95rem' }}>{section.subtitle}</p>
            </div>
            <span
              style={{
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '999px',
                padding: '0.35rem 0.75rem',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}
            >
              {section.projects.length} videos
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1rem',
              paddingBottom: '0.5rem',
            }}
          >
            {section.projects.map((project) => (
              <motion.div
                layoutId={`video-container-${project.id}`}
                onClick={() => onSelectVideo(project.id)}
                key={project.id}
                data-cursor="play"
                style={{
                  aspectRatio: '16/9',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.45)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              >
                <motion.div
                  layoutId={`video-media-${project.id}`}
                  style={{ width: '100%', height: '100%', backgroundColor: '#121212' }}
                >
                  {project.platform === 'facebook' ? (
                    <iframe
                      title={project.title}
                      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(project.sourceId)}&show_text=false&width=560`}
                      width="100%"
                      height="100%"
                      style={{ border: 'none', overflow: 'hidden', pointerEvents: 'none' }}
                      scrolling="no"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  ) : project.platform === 'local' ? (
                    <video
                      src={project.sourceId}
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="metadata"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
                    />
                  ) : (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: '#121212' }}
                    />
                  )}
                </motion.div>

                <div
                  style={{
                    position: 'absolute',
                    inset: 'auto 0 0 0',
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.82) 100%)',
                    padding: '1rem 0.8rem 0.75rem',
                  }}
                >
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{project.title}</div>
                  <div style={{ marginTop: '0.25rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.network}</div>
                </div>

                {project.isNationalTv && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.65rem',
                      right: '0.65rem',
                      padding: '4px 10px',
                      backgroundColor: 'var(--accent)',
                      color: '#000',
                      fontWeight: 800,
                      fontSize: '0.72rem',
                      borderRadius: '999px',
                    }}
                  >
                    ON AIR
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export { VAULT_DATA };
