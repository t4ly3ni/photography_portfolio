import { motion } from 'framer-motion';

const contactItems = [
  {
    label: 'Email',
    value: 'ramiragheb04@gmail.com',
    href: 'mailto:ramiragheb04@gmail.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    external: false,
  },
  {
    label: 'Phone',
    value: '+216 98 906 017',
    href: 'tel:+21698906017',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    external: false,
  },
  {
    label: 'Facebook',
    value: 'Rami Ragheb',
    href: 'https://www.facebook.com/rami.ragueb',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    external: true,
  },
  {
    label: 'Instagram',
    value: '@rami.ragheb_',
    href: 'https://www.instagram.com/rami.ragheb_/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    external: true,
  },
];

export default function Contact() {
  return (
    <footer
      style={{
        position: 'relative',
        padding: '10vw',
        overflow: 'hidden',
      }}
    >
      {/* Giant watermark */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-6%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 'clamp(6rem, 20vw, 18rem)',
          fontWeight: 900,
          opacity: 0.025,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        CONNECT
      </div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ marginBottom: '5rem' }}
      >
        <h2 style={{ fontSize: '5vw', fontWeight: 100, color: 'var(--text-primary)', lineHeight: 1 }}>
          GET IN<br />TOUCH.
        </h2>
      </motion.div>

      {/* Contact cards – 2×2 grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.25rem',
        }}
      >
        {contactItems.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.external ? '_blank' : '_self'}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(255,191,0,0.3)' }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              padding: '1.5rem 1.75rem',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              backdropFilter: 'blur(12px)',
              transition: 'border-color 0.3s ease, background 0.3s ease',
            }}
          >
            {/* Icon box */}
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: 'rgba(255,191,0,0.07)',
                border: '1px solid rgba(255,191,0,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>

            {/* Text */}
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontSize: '0.68rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  marginBottom: '0.35rem',
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.value}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Divider + copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          marginTop: '6rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em' }}>
          © {new Date().getFullYear()} RAMI RAGHEB
        </p>
        <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          National TV Videographer &bull; Studio Artist
        </p>
      </motion.div>

      {/* Bottom amber accent line */}
      <div
        style={{
          marginTop: '2rem',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)',
          opacity: 0.25,
        }}
      />
    </footer>
  );
}
