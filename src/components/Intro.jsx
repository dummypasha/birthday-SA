import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Intro({ next, startMusic }) {
  const [revealed, setRevealed] = useState(false)
  const [musicOn, setMusicOn] = useState(false)

  const handleReveal = () => {
    if (!revealed) setRevealed(true)
  }

  const handlePlayMusic = () => {
    startMusic()          // ✅ guaranteed on all devices
    setMusicOn(true)
  }

  return (
    <section className="intro-section">
      <div className="stars">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>

      <motion.div
        className="container intro-card intro-click-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        onClick={handleReveal}
      >
        <h1>This is for you.</h1>

        {!revealed && (
          <p className="tap-text">Tap here 💖</p>
        )}

        {revealed && (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              A small journey through your strength and kindness.
            </motion.p>

            {!musicOn && (
              <button
                onClick={handlePlayMusic}
                style={{ marginTop: '18px' }}
              >
                Tap here
              </button>
            )}

            {musicOn && (
              <button onClick={next} style={{ marginTop: '18px' }}>
                Begin →
              </button>
            )}
          </>
        )}
      </motion.div>
    </section>
  )
}