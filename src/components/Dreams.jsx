import { motion } from 'framer-motion'

export default function Dreams({ next, back }) {
  return (
    <section>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Dreams Built with Patience</h1>

        <p>Inter BiPC. Long-term preparation.</p>
        <p>One unwavering dream — MBBS.</p>

        <p>📚 Late nights filled with textbooks and hope.</p>
        <p>🌙 Learning patience when results took time.</p>
        <p>🌸 Holding on when giving up felt easier.</p>
        <p>💫 Turning struggle into strength, silently.</p>
        <p>✨ Growing every day — disciplined, determined, and brave.</p>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
          <button onClick={back}>← Back</button>
          <button onClick={next}>Memories →</button>
        </div>
      </motion.div>
    </section>
  )
}
