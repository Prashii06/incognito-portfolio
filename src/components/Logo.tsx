import { motion } from 'framer-motion'

type LogoProps = {
  size?: number
}

export default function Logo({ size = 36 }: LogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
      whileHover={{ rotateY: 180 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <rect width="40" height="40" fill="#111111" />
      <motion.circle
        cx="20"
        cy="20"
        r="8"
        fill="none"
        stroke="#C5A880"
        strokeWidth="1.5"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <path
        d="M12 26 L20 14 L28 26"
        stroke="#F4F4F4"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}
