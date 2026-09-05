function LanguageCard({ emoji, name, color, onClick }) {
  return (
    <div style={styles.card} onClick={onClick}>
      <div style={{ ...styles.iconWrap, backgroundColor: `${color}15`, border: `1px solid ${color}30` }}>
        <span style={styles.emoji}>{emoji}</span>
      </div>
      <h3 style={styles.name}>{name}</h3>
      <div style={{ ...styles.arrow, color }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: '#111827',
    border: '1px solid rgba(139, 92, 246, 0.15)',
    borderRadius: '16px',
    padding: '32px 28px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    position: 'relative',
    overflow: 'hidden',
  },
  iconWrap: {
    width: '80px',
    height: '80px',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: '40px',
  },
  name: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: '600',
  },
  arrow: {
    marginTop: '4px',
    opacity: 0.6,
  },
}

export default LanguageCard
