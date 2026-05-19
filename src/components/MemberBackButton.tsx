import type { CSSProperties, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './MemberBackButton.css'

type MemberBackButtonProps = {
  accent: string
}

export default function MemberBackButton({ accent }: MemberBackButtonProps) {
  const navigate = useNavigate()

  const goToTeam = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate({ pathname: '/', hash: 'team' })
  }

  return (
    <motion.button
      type="button"
      className="member-back-btn"
      style={{ '--back-accent': accent } as CSSProperties}
      onClick={goToTeam}
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      aria-label="Back to team"
    >
      <motion.span
        className="member-back-btn__arrow"
        aria-hidden
        whileHover={{ x: -4 }}
        transition={{ type: 'spring', stiffness: 420, damping: 20 }}
      >
        ←
      </motion.span>
      Back
    </motion.button>
  )
}
