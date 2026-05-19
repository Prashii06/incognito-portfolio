import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { TeamMember } from '../data/team'
import AnimatedTag from './AnimatedTag'
import type { CSSProperties } from 'react'
import './MemberPanel.css'

type MemberPanelProps = {
  member: TeamMember | null
  onClose: () => void
}

export default function MemberPanel({ member, onClose }: MemberPanelProps) {
  useEffect(() => {
    document.body.style.overflow = member ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [member])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {member && (
        <>
          <motion.div
            className="member-panel__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="member-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 32 }}
            role="dialog"
            aria-modal
            aria-labelledby="panel-name"
          >
            <button type="button" className="member-panel__close" onClick={onClose} aria-label="Close">
              ×
            </button>

            <div
              className="member-panel__hero"
              style={{ '--panel-accent': member.accent } as CSSProperties}
            >
              <span className="member-panel__initials">{member.avatarInitials}</span>
            </div>

            <AnimatedTag label={member.tag} accent={member.accent} />
            <h2 id="panel-name" className="member-panel__name">
              {member.name}
            </h2>
            <p className="member-panel__role">{member.role}</p>
            <p className="member-panel__motto">“{member.motto}”</p>
            <p className="member-panel__bio">{member.fullBio}</p>

            <h3 className="member-panel__section">Technical stack</h3>
            <ul className="member-panel__stack">
              {member.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <div className="member-panel__links">
              <a href={member.resumeUrl} className="member-panel__btn" download>
                Download résumé
              </a>
              <Link to={`/team/${member.id}`} className="member-panel__btn member-panel__btn--ghost">
                Full profile page →
              </Link>
            </div>

            <div className="member-panel__social">
              {member.social.github && (
                <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {member.social.linkedin && (
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              )}
              {member.social.twitter && (
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              )}
              {member.social.email && (
                <a href={member.social.email}>Email</a>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
