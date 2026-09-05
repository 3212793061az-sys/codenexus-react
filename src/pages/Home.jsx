import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import LanguageCard from '../components/LanguageCard'

function Home() {
  const navigate = useNavigate()

  const languages = [
    { emoji: '🐍', name: 'Python', color: '#3b82f6', path: '/python' },
    { emoji: '🟨', name: 'JavaScript', color: '#eab308', path: '/javascript' },
    { emoji: '🎨', name: 'CSS', color: '#6366f1', path: '/css' },
    { emoji: '☕', name: 'Java', color: '#f97316', path: '/java' },
    { emoji: '🐙', name: 'Git', color: '#ef4444', path: '/git' },
    { emoji: '🌐', name: 'HTML', color: '#f59e0b', path: '/html' },
    { emoji: '🟢', name: 'Node', color: '#22c55e', path: '/node' },
    { emoji: '🐘', name: 'PHP', color: '#8b5cf6', path: '/php' },
    { emoji: '🔌', name: 'API', color: '#14b8a6', path: '/api' },
  ]

  return (
    <div style={styles.outer}>
      <div style={styles.glowLeft} />
      <div style={styles.glowRight} />

      <Navbar />

      <div style={styles.content}>
        <h1 style={styles.title}>Bienvenido</h1>
        <p style={styles.subtitle}>Selecciona un lenguaje para comenzar a aprender.</p>

        <div style={styles.grid}>
          {languages.map((lang) => (
            <LanguageCard
              key={lang.name}
              emoji={lang.emoji}
              name={lang.name}
              color={lang.color}
              onClick={() => navigate(lang.path)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const styles = {
  outer: {
    minHeight: '100vh',
    backgroundColor: '#000000',
    position: 'relative',
    overflow: 'hidden',
  },
  glowLeft: {
    position: 'fixed',
    top: '-20%',
    left: '-10%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  glowRight: {
    position: 'fixed',
    bottom: '-20%',
    right: '-10%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  content: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '120px',
    paddingBottom: '60px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  title: {
    color: '#ffffff',
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '12px',
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: '16px',
    marginBottom: '48px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px',
    width: '100%',
    maxWidth: '820px',
  },
}

export default Home
