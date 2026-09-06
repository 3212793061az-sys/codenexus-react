import { useEffect, useState } from 'react'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function CatPet() {
  const [side, setSide] = useState(0)
  const [speaking, setSpeaking] = useState(false)

  useEffect(() => {
    let cancelled = false
    const run = async () => {
      while (!cancelled) {
        setSpeaking(true)
        await sleep(2600)
        setSpeaking(false)
        await sleep(300)
        setSide((s) => (s === 0 ? 1 : 0))
        await sleep(4000)
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [])

  const facingRight = side === 1

  return (
    <div style={styles.wrap}>
      <div style={{ ...styles.pet, ...(facingRight ? styles.petRight : styles.petLeft) }}>
        {speaking && (
          <div style={styles.bubble}>
            miau
            <div style={styles.bubbleTail} />
          </div>
        )}
        <div style={{ ...styles.catFlip, transform: facingRight ? 'scaleX(-1)' : 'scaleX(1)' }}>
          <div style={styles.catBob}>🐱</div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  wrap: {
    position: 'fixed',
    bottom: 24,
    left: 0,
    right: 0,
    height: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  },
  pet: {
    position: 'absolute',
    bottom: 0,
    width: 64,
    height: 64,
    transition: 'left 4s linear',
  },
  petLeft: {
    left: 28,
  },
  petRight: {
    left: 'calc(100% - 92px)',
  },
  catFlip: {
    width: 64,
    height: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  catBob: {
    fontSize: '58px',
    lineHeight: 1,
    filter: 'drop-shadow(0 6px 12px rgba(139,92,246,0.35))',
    animation: 'cat-bob 1.2s ease-in-out infinite',
  },
  bubble: {
    position: 'absolute',
    bottom: 78,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#ffffff',
    color: '#292524',
    padding: '8px 14px',
    borderRadius: '16px',
    fontSize: '14px',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    boxShadow: '0 6px 20px rgba(0,0,0,0.35)',
    animation: 'bubble-pop 0.25s ease-out',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  bubbleTail: {
    position: 'absolute',
    bottom: -5,
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)',
    width: 12,
    height: 12,
    backgroundColor: '#ffffff',
    borderRadius: '2px',
  },
}

export default CatPet