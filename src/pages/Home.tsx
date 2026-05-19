import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import TeamGrid from '../components/TeamGrid'
import ProjectBrief from '../components/ProjectBrief'
import './Home.css'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash !== '#team') return
    const timer = window.setTimeout(() => {
      document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })
    }, 120)
    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  return (
    <motion.main
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <TeamGrid />
      <ProjectBrief />
    </motion.main>
  )
}
