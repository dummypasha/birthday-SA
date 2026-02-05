import { useState, useRef, useEffect } from 'react'

import Intro from './components/Intro'
import Timeline from './components/Timeline'
import Dreams from './components/Dreams'
import Gallery from './components/Gallery'
import Parents from './components/Parents'
import Grandfather from './components/Grandfather'
import Message from './components/Message'
import Finale from './components/Finale'

import introSong from './assets/intro_song.mp3'
import gfMusic from './assets/gaf_music.mp3'

export default function App() {
  const [step, setStep] = useState(0)

  const introAudioRef = useRef(null)
  const gfAudioRef = useRef(null)

  const introStarted = useRef(false)
  const gfStarted = useRef(false)

  /* =====================
     NAVIGATION
     ===================== */

  const next = () => setStep(prev => Math.min(prev + 1, 7))
  const back = () => setStep(prev => Math.max(prev - 1, 0))
  const goHome = () => {
  stopGfMusic()        // ⭐ stop grandfather music
  introStarted.current = false
  setStep(0)
}



  /* =====================
     INTRO MUSIC (Intro + Timeline)
     ===================== */

  const startMusic = () => {
    if (!introStarted.current && introAudioRef.current) {
      introAudioRef.current.volume = 0.2
      introAudioRef.current.play().catch(() => {})
      introStarted.current = true
    }
  }

  const stopIntroMusic = () => {
    if (introAudioRef.current) {
      introAudioRef.current.pause()
      introAudioRef.current.currentTime = 0
    }
  }

  const stopGfMusic = () => {
  if (gfAudioRef.current) {
    gfAudioRef.current.pause()
    gfAudioRef.current.currentTime = 0
  }
  gfStarted.current = false
}


  /* =====================
     PAGE-BASED MUSIC FLOW
     ===================== */

  useEffect(() => {
    // Stop intro music after Timeline
    if (step > 1) {
      stopIntroMusic()
    }

    // Start grandfather music ONCE at Grandfather page
    if (step >= 5 && gfAudioRef.current && !gfStarted.current) {
      gfAudioRef.current.volume = 0.22
      gfAudioRef.current.play().catch(() => {})
      gfStarted.current = true
    }
  }, [step])

  /* =====================
     PAGES
     ===================== */

  const pages = [
    <Intro next={next} startMusic={startMusic} />,
    <Timeline next={next} back={back} />,
    <Dreams next={next} back={back} />,
    <Gallery next={next} back={back} />,
    <Parents next={next} back={back} />,
    <Grandfather next={next} back={back} stopGfMusic={stopGfMusic} />,
    <Message next={next} back={back} />,
    <Finale back={back} goHome={goHome} />

  ]

  return (
    <>
      {/* 🎵 Intro + Timeline music */}
      <audio ref={introAudioRef} preload="auto" loop>
        <source src={introSong} type="audio/mpeg" />
      </audio>

      {/* 🎵 Grandfather → Finale music */}
      <audio ref={gfAudioRef} preload="auto" loop>
        <source src={gfMusic} type="audio/mpeg" />
      </audio>

      {pages[step]}
    </>
  )
}
