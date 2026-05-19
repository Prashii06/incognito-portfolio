import { motion } from 'framer-motion'
import { TEAM_MOTTO } from '../data/team'
import HeroWelcome from './HeroWelcome'
import './Hero.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const hasAccent = TEAM_MOTTO.includes("isn't ready to see.")

  return (
    <section className="hero" id="home">
      <motion.div className="hero__grid" aria-hidden />
      <motion.div
        className="hero__glow hero__glow--1"
        animate={{ opacity: [0.4, 0.65, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero__glow hero__glow--2"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <motion.div className="hero__content container">
        <HeroWelcome />

        <motion.blockquote
          className="hero__headline hero__headline--quoted"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {hasAccent ? (
            <>
              We vanish into the dark to build what the world{' '}
              <em className="hero__accent">isn&apos;t ready to see.</em>
            </>
          ) : (
            TEAM_MOTTO
          )}
        </motion.blockquote>

        <motion.p className="hero__sub" custom={1} variants={fadeUp} initial="hidden" animate="show">
          We operate entirely within the blindspot of mainstream innovation, we engineer the impossible
          from the shadows of the tech world. Combining ghost developers who deploy code in absolute
          silence with invisible designers crafting seamless, untraceable experiences, we orchestrate
          our breakthroughs in total secrecy—remaining completely undetected until the exact moment we
          change everything.
        </motion.p>

        <motion.a
          href="#team"
          className="hero__cta"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Meet the team
          <span className="hero__cta-arrow" aria-hidden>→</span>
        </motion.a>
      </motion.div>
    </section>
  )
}
