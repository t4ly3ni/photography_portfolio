import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Sports Cinematography',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="22" y1="12" x2="18" y2="12" /><line x1="6" y1="12" x2="2" y2="12" /><line x1="12" y1="6" x2="12" y2="2" /><line x1="12" y1="22" x2="12" y2="18" />
      </svg>
    ),
    items: [
      'Tracking fast-moving subjects',
      'Understanding soccer game flow for optimal framing',
      'Pitch-side camera operation',
    ],
  },
  {
    title: 'Camera Systems',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" />
      </svg>
    ),
    items: [
      'Professional Broadcast Pedestals',
      'DSLR / Mirrorless',
      'Handheld Rigs & Stabilizers',
    ],
  },
  {
    title: 'Technical Production',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="2" x2="12" y2="12" /><line x1="12" y1="12" x2="18.93" y2="5.07" /><line x1="12" y1="12" x2="5.07" y2="5.07" />
      </svg>
    ),
    items: [
      'Three-point lighting',
      'Color grading',
      'Lens management',
    ],
  },
  {
    title: 'Software',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    items: [
      'Adobe Premiere Pro',
      'After Effects',
      'DaVinci Resolve',
    ],
  },
];

const languages = [
  { name: 'Arabic', level: 'Native', percent: 100 },
  { name: 'French', level: 'Fluent', percent: 90 },
  { name: 'English', level: 'Professional', percent: 75 },
];

export default function TechnicalSkills() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '10vw',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-4%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 'clamp(6rem, 20vw, 18rem)',
          fontWeight: 900,
          opacity: 0.02,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        SKILLS
      </div>

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ marginBottom: '5rem' }}
      >
        <h2
          style={{
            fontSize: '5vw',
            fontWeight: 100,
            color: 'var(--text-primary)',
            lineHeight: 1,
          }}
        >
          TECHNICAL
          <br />
          SKILLS.
        </h2>
      </motion.div>

      {/* ── Skills grid: 4 columns ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.25rem',
          marginBottom: '5rem',
        }}
      >
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.02,
              borderColor: 'rgba(255,191,0,0.25)',
            }}
            style={{
              padding: '2rem',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(12px)',
              transition: 'border-color 0.3s ease',
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(255,191,0,0.07)',
                border: '1px solid rgba(255,191,0,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                marginBottom: '1.25rem',
              }}
            >
              {cat.icon}
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                marginBottom: '1rem',
                letterSpacing: '0.03em',
              }}
            >
              {cat.title}
            </h3>

            {/* Skill items */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {cat.items.map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                  }}
                >
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.55)',
                      fontWeight: 300,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Languages ── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h3
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            fontWeight: 200,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '2rem',
          }}
        >
          Languages
        </h3>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            maxWidth: '600px',
          }}
        >
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                }}
              >
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                  {lang.name}
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {lang.level}
                </span>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  width: '100%',
                  height: '3px',
                  background: 'rgba(255,255,255,0.06)',
                  borderRadius: '999px',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percent}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    height: '100%',
                    borderRadius: '999px',
                    background:
                      'linear-gradient(90deg, var(--accent), rgba(255,191,0,0.4))',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
