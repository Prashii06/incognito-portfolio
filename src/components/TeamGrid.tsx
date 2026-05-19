import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { teamMembers } from '../data/team'
import MemberPhoto from './MemberPhoto'
import './TeamGrid.css'

export default function TeamGrid() {
  return (
    <section className="team" id="team">
      <div className="container">
        <motion.header
          className="team__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="team__label">Our Squad</p>
          <h2 className="team__title">Master Architects behind the Shadows</h2>
        </motion.header>

        <div className="team__grid">
          {teamMembers.map((member, i) => (
            <motion.article
              key={member.id}
              className="team__card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: 'var(--shadow-card)' }}
            >
              <MemberPhoto member={member} className="team__photo" />
              <span className="team__role-label">{member.roleLabel}</span>
              <h3 className="team__name">{member.name}</h3>
              <p className="team__motto">&ldquo;{member.motto}&rdquo;</p>
              <p className="team__bio">{member.shortBio}</p>
              <Link to={`/team/${member.id}`} className="team__know">
                Know more
                <span aria-hidden>→</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
