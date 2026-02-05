import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

import img1 from '../assets/girl1.png'
import img2 from '../assets/girl1.png'
import img3 from '../assets/girl1.png'

import clickSound from '../assets/click.mp3'
import memorySound from '../assets/memory.mp3'

const photos = [
  {
    img: img1,
    text: (
      <>
        <span>Keep laughing 💖</span>
        <span>You look the cutest when you do.</span>
      </>
    )
  },
  {
    img: img2,
    text: (
      <>
        <span>Be strong 💪</span>
        <span>You’ve always been stronger than you know.</span>
      </>
    )
  },

  {
    img: img2,
    text: (
      <>
        <span>Drama mode ON 🎭</span>
      <span>Anger today, memory gone tomorrow 😄</span>
      <span>----------------</span>
      <span>Stay cool 😌</span>
      <span>Calm mind, warm heart — and don’t forget the little things 💫</span>
      </>
    )
  },

  {
    img: img2,
    text: (
      <>
        <span>Reel squad 🎬</span>
      <span>Good friends + crazy reels = pure happiness 😄💃</span>
      </>
    )
  },

  {
    img: img2,
    text: (
      <>
       <span>Brainy queen 🧠✨</span>
      <span>Topper by marks, winner by hard work 💪📚</span>
      <span>----------------</span>
      <span>Smart & strong 💕</span>
      <span>Topper in class, inspiration to many.</span>
      </>
    )
  },

 
  {
    img: img3,
    text: (
      <>
        <span>Thanks for clicking this✨ moment 🎬</span>
        <span>
          It was a cute moment.  
          Enjoy the song - 🤍
        </span>
      </>
    )
  }

  
]

export default function Gallery({ next, back }) {
  const [flipped, setFlipped] = useState(null)
  const memoryAudioRef = useRef(null)

  const stopMemorySong = () => {
    if (memoryAudioRef.current) {
      memoryAudioRef.current.pause()
      memoryAudioRef.current.currentTime = 0
      memoryAudioRef.current = null
    }
  }

  const playSound = (index) => {
    const isLastImage = index === photos.length - 1
    stopMemorySong()

    if (isLastImage) {
      const audio = new Audio(memorySound)
      audio.volume = 0.18
      audio.play().catch(() => {})
      memoryAudioRef.current = audio
    } else {
      const click = new Audio(clickSound)
      click.volume = 0.15
      click.play().catch(() => {})
    }
  }

  const handleFlip = (index) => {
    playSound(index)
    setFlipped(flipped === index ? null : index)
  }

  const handleNext = () => {
    stopMemorySong()
    next()
  }

  const handleBack = () => {
    stopMemorySong()
    back()
  }

  return (
    <section className="gallery-section">
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Moments That Make You Smile</h1>

        <p className="gallery-hint">
          ✨ Tap on each moment to reveal a little smile ✨
        </p>

        <div className="gallery-grid">
          {photos.map((item, index) => (
            <div
              key={index}
              className={`photo-card ${flipped === index ? 'flipped' : ''}`}
              onClick={() => handleFlip(index)}
            >
              <div className="photo-inner">
                <div className="photo-front">
                  <img src={item.img} alt="memory" />
                </div>

                <div className="photo-back">
                  <div className="gallery-sparkles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <p className="gallery-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
          <button onClick={handleBack}>← Back</button>
          <button onClick={handleNext}>NEXT →</button>
        </div>
      </motion.div>
    </section>
  )
}
