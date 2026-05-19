import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import MemberPage from './pages/MemberPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const location = useLocation()

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/team/:memberId" element={<MemberPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
