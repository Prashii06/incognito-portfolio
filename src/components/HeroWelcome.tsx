import { motion } from 'framer-motion'
import './HeroWelcome.css'

const LINE_TWO = ['We', 'are', 'team', 'Incognito'] as const

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const word = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function HeroWelcome() {
  return (
    <motion.div
      className="hero-welcome"
      variants={container}
      initial="hidden"
      animate="show"
      aria-label="Welcome. We are team Incognito"
    >
      <motion.p className="hero-welcome__line" variants={word}>
        <motion.span
          className="hero-welcome__word hero-welcome__word--shine"
          whileHover={{ y: -2, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        >
          Welcome.
        </motion.span>
      </motion.p>

      <p className="hero-welcome__line hero-welcome__line--main">
        {LINE_TWO.map((w, i) => (
          <motion.span
            key={w}
            className={`hero-welcome__word hero-welcome__word--shine${
              w === 'Incognito' ? ' hero-welcome__word--brand' : ''
            }`}
            variants={word}
            style={{ animationDelay: `${i * 0.35}s` }}
            whileHover={{ y: -3, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 420, damping: 20 }}
          >
            {w}
          </motion.span>
        ))}
      </p>
    </motion.div>
  )
}
