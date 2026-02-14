import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

import img1 from '../assets/girl1.png'
import img2 from '../assets/girl1.png'
import img4 from '../assets/girl1.png'

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
  img: img2,
  text: (
    <>
      <span>Heyyy 😂
      First of all, I really don’t know how to start this… I don’t have as many words as you do. But jokes apart…✨
      </span> 
    <span>
    The way you are… the way you respect your parents… and the way you carry yourself with your friends — it’s honestly sooo attractive in a personality way.
    Like, not everyone has that balance. 
    Maturity + innocence + little bit drama + little bit attitude = you. 😂✨
     You know exactly how to behave in every situation —
    classy when needed, fun when it’s light, mature when it matters.
    </span>
    <span>
    From our school days till now, it honestly feels unbelievable.
    every thing is unplanned, It just happened… naturally…
     You’re actually the only one I’m still in touch with...
    </span>
    <span>
    You may have your gang, your friends, your fans club also I think 😂
    So I don’t even know what position I hold there from yourside… but in my list of closest people? You’re definitely in top places.
    </span>
    <span>
    Till now what I’ve observed about you — you have great knowledge. Like sometimes I’m like, “Madam encyclopedia aa?” 😂
    and Sometimes i have doubt too … secret ga coaching center kuda nadpiyochu meru ani 😂
    </span>
      <span>
      And from now on, I don’t know why, but I feel like telling you this — 
        if you’re ever holding any pain inside, please don’t carry it alone. Don’t let it weigh you down.
        Everything is already going in a good direction for you.
        In life, education, and in every aspect — don’t overthink about others. 
        You’re already doing good. Just focus on yourself and keep trying your best. 
        That’s more than enough. Don’t compare, don’t stress about others. You’re doing great as you are. 💛
      </span>
      <span>
      So yeah fianlly masth aindi inka … just stay the same.
      But maybe you can reduce fans count a little okay? Fans count koncham control lo petti mamlani kuda grthupetukondi
      </span>
    </>
  )
},

 
  {
    img: img4,
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
