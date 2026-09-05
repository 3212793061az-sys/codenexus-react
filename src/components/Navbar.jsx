function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <div style={styles.logoIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <span style={styles.logoText}>CodeNexus</span>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '64px',
    backgroundColor: 'rgba(17, 24, 39, 0.8)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(139, 92, 246, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: '700',
    letterSpacing: '0.5px',
  },
}

export default Navbar
