import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { teamMembers } from '../data/team'
import MemberPhoto from '../components/MemberPhoto'
import './MemberPage.css'

export default function MemberPage() {
  const { memberId } = useParams()
  const member = teamMembers.find((m) => m.id === memberId)
  const portraitRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleMouse(e: MouseEvent) {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      const el = portraitRef.current
      if (!el) return
      const moveX = (x - 0.5) * 10
      const moveY = (y - 0.5) * 10
      el.style.transform = `rotate(${2 + moveX / 5}deg) translate(${moveX}px, ${moveY}px)`
    }

    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  if (!member) return <Navigate to="/" replace />

  return (
    <motion.main
      className="member-page stitch-member"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ '--page-accent': member.accent } as CSSProperties}
    >
      <nav className="member-topbar">
        <div className="brand">Incognito _</div>
        <div className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/#team">TEAM</Link>
          <Link to="/project">PROJECTS</Link>
        </div>
        <div className="menu-icon">☰</div>
      </nav>

      <div className="member-main container">
        <section className="member-hero">
          <div className="hero-copy">
            <div className="hero-tags">
              {member.isTeamLeader && <span className="pill lead">[ENGINE LEAD]</span>}
              <span className="pill">[{member.tag.toUpperCase()}]</span>
              <span className="pill">[BACKEND OPS]</span>
            </div>

            <h1 className="hero-name">{member.name}</h1>

            <blockquote className="hero-quote">"{member.motto}"</blockquote>

            <div className="hero-bios">
              <p className="hero-bio-main">{member.fullBio}</p>
              <p className="hero-bio-sub">{member.shortBio}</p>
            </div>

            <div className="hero-social">
              {member.social.linkedin && (
                <a href={member.social.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
              )}
              {member.social.github && (
                <a href={member.social.github} target="_blank" rel="noreferrer">GITHUB</a>
              )}
              {member.social.email && <a href={member.social.email}>EMAIL</a>}
            </div>
          </div>

          <div className="hero-portrait">
            <div ref={portraitRef} className="portrait-wrap rotate-2">
              <MemberPhoto member={member} />
            </div>
            <div className="geo-pop left" />
            <div className="geo-pop right" />
          </div>
        </section>

        <section className="stack-section">
          <h2 className="stack-title">The Technical Stack</h2>
          <div className="stack-grid">
            {member.stack.map((s, i) => (
              <div
                key={s}
                className="stack-item"
                style={{ borderTopColor: i % 2 === 0 ? 'var(--page-accent)' : 'var(--lime-dark)' }}
              >
                <span className="stack-index">0{i + 1}</span>
                <h3>{s}</h3>
                <p>Architecting memory-safe execution for {s}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-copy">
            <h2>Build the engine.</h2>
            <p>
              {member.name} is currently accepting collaborators for the V3 Kernel Project. Interested
              in pushing the limits of system performance?
            </p>
            <Link to="/contact" className="cta-button">GET IN TOUCH</Link>
          </div>
        </section>
      </div>

      <footer className="member-footer">
        <div className="footer-inner container">
          <div className="brand">Incognito _</div>
          <div className="footer-links">
            <Link to="/project">BroFocus</Link>
            <Link to="/#team">Team</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </motion.main>
  )
}
