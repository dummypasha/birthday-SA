import Confetti from 'react-confetti'
import { useEffect, useState } from 'react'
import birthdayPic from '../assets/ORG_GIRL.png'

export default function Finale({ back, goHome }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 8000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="finale-section">
      {show && <Confetti />}

      <div className="container finale-card">
        {/* Photo */}
        <div className="finale-image">
          <img src={birthdayPic} alt="Birthday Girl" />
        </div>

        <h1>Happiest Birthday Suchitranjali 🎂💖</h1>

        <p>
          You deserve happiness, endless smiles.  
          May this year bring you confidence, peace,  
          and countless reasons to smile 🌸
        </p>

        <p className="final-note">
          Stay exactly the way you are 🤍
        </p>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
          <button onClick={back}>← Back</button>
          <button onClick={goHome}>🏠 From the beginning</button>
        </div>
      </div>
    </section>
  )
}
