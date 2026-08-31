import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      navigate('/home')
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
            <a href="#" style={styles.forgot}>¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" style={styles.button}>
            Iniciar sesión
          </button>
        </form>

        <div style={styles.divider}>
          <span style={styles.dividerLine} />
          <span style={styles.dividerText}>o continúa con</span>
          <span style={styles.dividerLine} />
        </div>

        <div style={styles.socialRow}>
          <button style={styles.socialBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google
          </button>
          <button style={styles.socialBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </button>
        </div>

        <p style={styles.signup}>
          ¿No tienes cuenta?{' '}
          <a href="#" style={styles.signupLink}>Regístrate</a>
        </p>
      </div>
    </div>
  )
}

const styles = {
  outer: {
    minHeight: '100vh',
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  glowLeft: {
    position: 'absolute',
    top: '-20%',
    left: '-10%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  glowRight: {
    position: 'absolute',
    bottom: '-20%',
    right: '-10%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  card: {
    position: 'relative',
    backgroundColor: '#111827',
    border: '1px solid rgba(139,92,246,0.15)',
    borderRadius: '16px',
    padding: '40px 36px',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 0 40px rgba(99,102,241,0.08), 0 20px 60px rgba(0,0,0,0.5)',
    margin: '20px',
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
  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    margin: '28px 0 22px 0',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    backgroundColor: '#1f2937',
  },
  dividerText: {
    color: '#6b7280',
    fontSize: '13px',
    whiteSpace: 'nowrap',
  },
  socialRow: {
    display: 'flex',
    gap: '14px',
  },
  socialBtn: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #1f2937',
    backgroundColor: '#0a0a0f',
    color: '#d1d5db',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
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
