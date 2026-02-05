import { motion } from 'framer-motion'
import gfImage from '../assets/gf.png'

export default function HomeSafePlace({ next, back, stopGfMusic }) {
  return (
    <section className="grandfather-section">
      <motion.div
        className="container grandfather-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h1>Her Safe Place</h1>

        <div className="grandfather-image">
          <img src={gfImage} alt="Home memory" />
        </div>

        <p>
          In every festival, every small moment of happiness 🌸  
          her heart always knew where to return.
        </p>

        <p>
          Her home was never just four walls —  
          it was comfort, warmth, and peace.
        </p>

        <p>
          A place where laughter felt lighter,  
          and worries slowly faded away 🕊️
        </p>

        <p>
          Without many words,  
          they always understood her.
        </p>

        <p>
          They held her during tough days,  
          and celebrated her quiet victories.
        </p>

        <p>
          Even today 🤍  
          no matter how far she goes,  
          her home lives within her —  
          calm, loving, and forever safe.
        </p>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
          <button
            onClick={() => {
              stopGfMusic() // ✅ THIS is the fix
              back()
            }}
          >
            ← Back
          </button>

          <button onClick={next}>A letter →</button>
        </div>
      </motion.div>
    </section>
  )
}
