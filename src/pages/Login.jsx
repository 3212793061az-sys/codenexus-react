import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === 'master@mail.com' && password === '3445') {
      navigate('/home')
    } else {
      setError('Credenciales incorrectas. Usa master@mail.com / 3445')
    }
  }

  return (
    <div style={styles.outer}>
      <div style={styles.glowLeft} />
      <div style={styles.glowRight} />

      <div style={styles.card}>
        <div style={styles.iconCircle}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7c5cfc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <h1 style={styles.title}>Bienvenido</h1>
        <p style={styles.subtitle}>Inicia sesión para continuar</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Correo electrónico</label>
            <div style={styles.inputWrap}>
              <svg style={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <input
                type="email"
                placeholder="tu@email.com"
                style={styles.input}
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Contraseña</label>
            <div style={styles.inputWrap}>
              <svg style={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                type="password"
                placeholder="••••••••"
                style={styles.input}
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div style={styles.optionsRow}>
            <label style={styles.remember}>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                style={styles.checkbox}
              />
              Recordarme
            </label>
            <a href="#" style={styles.forgot} className="login-link">¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" style={styles.button} className="login-btn">
            Iniciar sesión
          </button>
          {error && <p style={styles.error}>{error}</p>}
        </form>

        <p style={styles.signup}>
          ¿No tienes cuenta?{' '}
          <a href="#" style={styles.signupLink} className="login-link">Regístrate</a>
        </p>
      </div>
    </div>
  )
}

const styles = {
  outer: {
    minHeight: '100vh',
    backgroundColor: '#05060f',
    background: 'radial-gradient(circle at 20% 20%, #0a1030 0%, #05060f 45%, #0a0618 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '20px',
  },
  glowLeft: {
    position: 'absolute',
    top: '-20%',
    left: '-10%',
    width: '520px',
    height: '520px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59,130,246,0.16) 0%, transparent 70%)',
    filter: 'blur(30px)',
    pointerEvents: 'none',
  },
  glowRight: {
    position: 'absolute',
    bottom: '-20%',
    right: '-10%',
    width: '520px',
    height: '520px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 70%)',
    filter: 'blur(30px)',
    pointerEvents: 'none',
  },
  card: {
    position: 'relative',
    backgroundColor: '#0f1420',
    border: '1px solid rgba(139,92,246,0.22)',
    borderRadius: '20px',
    padding: '40px 36px',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 0 60px rgba(99,102,241,0.12), 0 0 20px rgba(139,92,246,0.08), 0 20px 60px rgba(0,0,0,0.5)',
    backdropFilter: 'blur(4px)',
  },
  iconCircle: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: 'rgba(124,92,252,0.1)',
    border: '1px solid rgba(124,92,252,0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 20px auto',
  },
  title: {
    color: '#ffffff',
    fontSize: '26px',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '6px',
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: '32px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    color: '#d1d5db',
    fontSize: '14px',
    fontWeight: '500',
  },
  inputWrap: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  inputIcon: {
    position: 'absolute',
    left: '14px',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '13px 14px 13px 44px',
    borderRadius: '10px',
    border: '1px solid #1f2937',
    backgroundColor: '#0a0a0f',
    color: '#ffffff',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  optionsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '13px',
  },
  remember: {
    color: '#9ca3af',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
  },
  checkbox: {
    accentColor: '#7c3aed',
  },
  forgot: {
    color: '#6366f1',
    textDecoration: 'none',
    fontSize: '13px',
  },
  button: {
    marginTop: '8px',
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    border: 'none',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    letterSpacing: '0.3px',
  },
  error: {
    color: '#f87171',
    fontSize: '13px',
    textAlign: 'center',
    marginTop: '4px',
  },
  signup: {
    color: '#9ca3af',
    fontSize: '14px',
    textAlign: 'center',
    marginTop: '28px',
  },
  signupLink: {
    color: '#818cf8',
    textDecoration: 'none',
    fontWeight: '600',
  },
}

export default Login
