import { motion } from 'framer-motion';

const experiences = [
  {
    period: '2024 – 2026',
    role: 'Cameraman — Live Sports & General Programming',
    company: 'Tunisian National Television',
    type: 'National Public Broadcaster',
    highlights: [
      'Lead camera operator for national soccer league matches, tracking fast-paced action and key game moments.',
      'Operating professional broadcast systems for live news and prime-time national programming.',
      'Collaborating with directors via intercom to execute real-time shot changes and dynamic zooms during live sports.',
    ],
  },
  {
    period: '2022 – 2024',
    role: 'Cameraman',
    company: 'Telvza TV',
    type: 'Private Television Channel',
    highlights: [
      'Managed multi-camera setups for studio-based talk shows and cultural variety programs.',
      'Conducted on-location shoots for field reports, managing both video capture and basic lighting.',
      "Enhanced the channel's visual identity through creative and stable shot compositions.",
    ],
  },
  {
    period: '2021 – Present',
    role: 'Freelance Videographer',
    company: 'Independent Projects',
    type: 'Freelance',
    highlights: [
      'Shot and edited song clips, focusing on cinematic storytelling and rhythm-based cuts.',
      'Covered marriages and wedding events with full highlight films and social media edits.',
    ],
  },
];

const education = [
  {
    period: '2021 – 2023',
    title: 'Senior Technician in Audiovisual (prise de vue)',
    institution: 'Centre de Formation Technologique, Tunis',
  },
  {
    period: '2022 – 2023',
    title: 'Technician in Multimedia',
    institution: 'Centre de Formation Technologique, Tunis',
  },
];

export default function WorkExperience() {
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
          top: '12%',
          right: '-5%',
          fontSize: 'clamp(5rem, 18vw, 16rem)',
          fontWeight: 900,
          opacity: 0.02,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.05em',
          transform: 'rotate(-90deg)',
          transformOrigin: 'right top',
        }}
      >
        EXPERIENCE
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
          WORK
          <br />
          EXPERIENCE.
        </h2>
      </motion.div>

      {/* ── Timeline ── */}
      <div style={{ position: 'relative', paddingLeft: '3rem' }}>
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '1px',
            background:
              'linear-gradient(180deg, var(--accent) 0%, rgba(255,191,0,0.15) 100%)',
          }}
        />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              position: 'relative',
              marginBottom: '4rem',
            }}
          >
            {/* Dot on timeline */}
            <div
              style={{
                position: 'absolute',
                left: '-3rem',
                top: '0.35rem',
                width: '11px',
                height: '11px',
                borderRadius: '50%',
                background: 'var(--accent)',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 12px rgba(255,191,0,0.4)',
              }}
            />

            {/* Period pill */}
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                fontWeight: 600,
                color: 'var(--accent)',
                border: '1px solid rgba(255,191,0,0.2)',
                borderRadius: '999px',
                padding: '0.3rem 0.9rem',
                marginBottom: '1rem',
              }}
            >
              {exp.period}
            </span>

            <h3
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                fontWeight: 500,
                marginBottom: '0.4rem',
              }}
            >
              {exp.role}
            </h3>

            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                marginBottom: '1.25rem',
              }}
            >
              {exp.company}{' '}
              <span style={{ opacity: 0.5 }}>— {exp.type}</span>
            </p>

            {/* Bullet points */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {exp.highlights.map((h, j) => (
                <div
                  key={j}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      marginTop: '0.45rem',
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: 'rgba(255,191,0,0.4)',
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: 'rgba(255,255,255,0.6)',
                      fontWeight: 300,
                    }}
                  >
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Education ── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ marginTop: '4rem' }}
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
          Education
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {education.map((edu, i) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                padding: '1.5rem 1.75rem',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  color: 'var(--accent)',
                  fontWeight: 600,
                }}
              >
                {edu.period}
              </span>
              <h4
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  marginTop: '0.6rem',
                  marginBottom: '0.3rem',
                }}
              >
                {edu.title}
              </h4>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                }}
              >
                {edu.institution}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
