import { motion } from 'framer-motion';

type VideoProject = {
  id: string;
  platform: 'youtube' | 'facebook';
  sourceId: string; // Either youtube ID or full FB url
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

const VAULT_SECTIONS: VideoSection[] = [
  {
    id: 'youtube',
    title: 'YouTube Vault',
    subtitle: 'Official YouTube productions',
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
        id: 'yt-4',
        platform: 'youtube',
        sourceId: 'FkSbPRvZ1cM',
        title: 'YOUTUBE FEATURE 04',
        thumbnail: 'https://img.youtube.com/vi/FkSbPRvZ1cM/maxresdefault.jpg',
        role: 'Cinematographer',
        camera: 'Sony FX6',
        network: 'YouTube',
        year: '2024',
        isNationalTv: false,
      },
      {
        id: 'yt-5',
        platform: 'youtube',
        sourceId: 'GcRGHNcdjOU',
        title: 'YOUTUBE FEATURE 05',
        thumbnail: 'https://img.youtube.com/vi/GcRGHNcdjOU/maxresdefault.jpg',
        role: 'Camera Operator',
        camera: 'Canon C70',
        network: 'YouTube',
        year: '2023',
        isNationalTv: false,
      },
      {
        id: 'yt-6',
        platform: 'youtube',
        sourceId: 'A8cVL8eLLa0',
        title: 'YOUTUBE FEATURE 06',
        thumbnail: 'https://img.youtube.com/vi/A8cVL8eLLa0/maxresdefault.jpg',
        role: 'Lead Videographer',
        camera: 'Blackmagic 6K Pro',
        network: 'YouTube',
        year: '2023',
        isNationalTv: false,
      },
      {
        id: 'yt-7',
        platform: 'youtube',
        sourceId: 'a2z-aiPf7f8',
        title: 'YOUTUBE FEATURE 07',
        thumbnail: 'https://img.youtube.com/vi/a2z-aiPf7f8/maxresdefault.jpg',
        role: 'Videographer',
        camera: 'Sony FX3',
        network: 'YouTube',
        year: '2023',
        isNationalTv: false,
      },
      {
        id: 'yt-8',
        platform: 'youtube',
        sourceId: 'WzBmDjYz7e8',
        title: 'YOUTUBE FEATURE 08',
        thumbnail: 'https://img.youtube.com/vi/WzBmDjYz7e8/maxresdefault.jpg',
        role: 'Camera Operator',
        camera: 'Canon C300 Mark III',
        network: 'YouTube',
        year: '2023',
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
    id: 'rap-video-clip',
    title: 'Rap Video Clip',
    subtitle: 'Dedicated rap clip section',
    projects: [
      {
        id: 'rap-1',
        platform: 'youtube',
        sourceId: 'WqphQ4KqnXM',
        title: 'RAP VIDEO CLIP 01',
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
        title: 'RAP VIDEO CLIP 02',
        thumbnail: 'https://img.youtube.com/vi/vG8ar-UaD08/maxresdefault.jpg',
        role: 'Camera Operator',
        camera: 'Sony FX6',
        network: 'YouTube',
        year: '2024',
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
    title: 'Facebook - Baccar Production',
    subtitle: 'Work with Baccar Production',
    projects: [
      {
        id: 'baccar-1',
        platform: 'facebook',
        sourceId: 'https://www.facebook.com/reel/1048335189982328',
        title: 'BACCAR VIDEO 01',
        thumbnail: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1200&auto=format&fit=crop',
        role: 'Cinematographer',
        camera: 'RED V-Raptor',
        network: 'Baccar Production',
        year: '2023',
        isNationalTv: false,
      },
      {
        id: 'baccar-2',
        platform: 'facebook',
        sourceId: 'https://www.facebook.com/reel/3938233553164538',
        title: 'BACCAR VIDEO 02',
        thumbnail: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1200&auto=format&fit=crop',
        role: 'Camera Lead',
        camera: 'ARRI Mini LF',
        network: 'Baccar Production',
        year: '2024',
        isNationalTv: false,
      },
      {
        id: 'baccar-3',
        platform: 'facebook',
        sourceId: 'https://www.facebook.com/reel/3653788164766517',
        title: 'BACCAR VIDEO 03',
        thumbnail: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1200&auto=format&fit=crop',
        role: 'Director of Photography',
        camera: 'Sony VENICE',
        network: 'Baccar Production',
        year: '2024',
        isNationalTv: false,
      },
    ],
  },
];

const VAULT_DATA: VideoProject[] = VAULT_SECTIONS.flatMap((section) => section.projects);

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

      {VAULT_SECTIONS.map((section) => (
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
