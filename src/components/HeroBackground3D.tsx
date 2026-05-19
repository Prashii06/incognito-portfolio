import { motion } from 'framer-motion'
import './HeroBackground3D.css'

const orbs = [
  { color: '#c4b5fd', size: 280, x: '8%', y: '12%', dur: 7 },
  { color: '#fda4c9', size: 220, x: '78%', y: '8%', dur: 9 },
  { color: '#7dd3fc', size: 200, x: '82%', y: '62%', dur: 8 },
  { color: '#fde68a', size: 160, x: '12%', y: '68%', dur: 10 },
  { color: '#a5f3fc', size: 140, x: '48%', y: '38%', dur: 6 },
]

const shapes = [
  { w: 80, h: 80, x: '20%', y: '25%', rotate: 12, color: 'rgba(255,107,157,0.2)' },
  { w: 60, h: 60, x: '70%', y: '30%', rotate: -18, color: 'rgba(78,205,196,0.25)' },
  { w: 50, h: 50, x: '60%', y: '75%', rotate: 24, color: 'rgba(166,108,255,0.2)' },
]

export default function HeroBackground3D() {
  return (
    <div className="hero-bg-3d" aria-hidden>
      <div className="hero-bg-3d__base" />

      {orbs.map((o, i) => (
        <motion.div
          key={`orb-${i}`}
          className="hero-bg-3d__orb"
          style={{
            width: o.size,
            height: o.size,
            left: o.x,
            top: o.y,
            background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -24, 0],
            x: [0, i % 2 === 0 ? 12 : -12, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: o.dur,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {shapes.map((s, i) => (
        <motion.div
          key={`shape-${i}`}
          className="hero-bg-3d__shape"
          style={{
            width: s.w,
            height: s.h,
            left: s.x,
            top: s.y,
            background: s.color,
            rotate: s.rotate,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [s.rotate, s.rotate + 20, s.rotate],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        className="hero-bg-3d__ring"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="hero-bg-3d__ring hero-bg-3d__ring--inner"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />

      <div className="hero-bg-3d__grid" />
    </div>
  )
}
