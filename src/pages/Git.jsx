import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function Git() {
  const navigate = useNavigate()

  return (
    <div style={styles.outer}>
      <Navbar />
      <div style={styles.content}>
        <button onClick={() => navigate('/home')} style={styles.back}>← Volver</button>
        <h1 style={styles.title}>🐙 Git</h1>
        <p style={styles.subtitle}>Contenido de aprendizaje de Git en construcción.</p>
        <div style={styles.placeholder}>Próximamente</div>
      </div>
    </div>
  )
}

const styles = {
  outer: {
    minHeight: '100vh',
    backgroundColor: '#05060f',
  },
  content: {
    paddingTop: '120px',
    paddingLeft: '24px',
    paddingRight: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  back: {
    alignSelf: 'flex-start',
    background: 'none',
    border: 'none',
    color: '#818cf8',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  title: {
    color: '#ffffff',
    fontSize: '36px',
    fontWeight: '700',
    margin: 0,
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: '16px',
    margin: 0,
    textAlign: 'center',
  },
  placeholder: {
    marginTop: '40px',
    padding: '40px 60px',
    borderRadius: '16px',
    backgroundColor: '#111827',
    border: '1px solid rgba(139, 92, 246, 0.15)',
    color: '#6b7280',
    fontSize: '18px',
  },
}

export default Git