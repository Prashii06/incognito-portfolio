import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import './AnimatedTag.css'

type AnimatedTagProps = {
  label: string
  accent?: string
  delay?: number
  variant?: 'pill' | 'clinical'
}

export default function AnimatedTag({
  label,
  accent = '#8b7cb8',
  delay = 0,
  variant = 'clinical',
}: AnimatedTagProps) {
  return (
    <motion.span
      className={`animated-tag animated-tag--${variant}`}
      style={{ '--tag-accent': accent } as CSSProperties}
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.35 }}
    >
      {label}
    </motion.span>
  )
}
