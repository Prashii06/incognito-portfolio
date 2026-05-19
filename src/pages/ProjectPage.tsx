import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { DOCS_URL, project, STITCH_DESIGN_URL } from '../data/project'
import './ProjectPage.css'

export default function ProjectPage() {
  return (
    <motion.main
      className="project-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-page__hero-wrap">
        <div className="container project-page__hero">
          <div className="project-page__hero-copy">
            <Link to="/" className="project-page__back">
              ← Back home
            </Link>
            <div className="project-page__brand-row">
              <img src={project.logo} alt={`${project.name} logo`} className="project-page__logo" />
              <h1>{project.name}</h1>
            </div>
            <p className="project-page__lead">{project.tagline}</p>

            <div className="project-page__ctas">
              <a
                href={STITCH_DESIGN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="project-page__link"
              >
                View Stitch design ↗
              </a>

              <a
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="project-page__link"
              >
                View docs ↗
              </a>
            </div>
          </div>

          <div className="project-page__hero-visual">
            <div className="project__visual-frame">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
                alt={`${project.name} visual`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="container project-page__description">
        <h3 className="section-label">Project Description</h3>
        <p className="project-page__description-text">{project.brief}</p>

        <div className="project-page__highlights project-page__highlights--description">
          {project.highlights.map((h, i) => (
            <article key={h.label} className="project-page__highlight-card">
              <span className="project-page__highlight-index">0{i + 1}</span>
              <h4>{h.label}</h4>
              <p>{h.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-page__how container">
        <h3 className="section-label">How it works</h3>
        <p>
            The architecture of BroFocus is built on three pillars: invisibility, speed, and
            ritual. We believe the best interface is the one that disappears when you are in your
            flow.
          </p>

          <ul>
            <li>Invisible UI that only appears when invoked.</li>
            <li>Hardware-accelerated rendering for zero input lag.</li>
            <li>Built-in rituals to protect your biological flow.</li>
          </ul>
        </section>

      <section className="project-page__rigor">
        <div className="container project-page__rigor-inner">
          <h2>Tech Stack</h2>
          <p className="project-page__rigor-sub">Engineered from the metal up for uncompromising performance and stability.</p>

          <div className="project-page__rigor-grid">
            {project.stack.map((s) => (
              <div key={s} className="project-page__rigor-card">
                <h4>{s}</h4>
                <p>Core capability powering {s.toLowerCase()} in production.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container project-page__stitch-grid">
        <h3 className="section-label">Stitch Design System</h3>
        <p className="project-page__stitch-desc">The aesthetic foundation of BroFocus.</p>

        <div className="project-page__gallery">
          <div className="project-page__gallery-item">
            <img src="/focus.png" alt="Resource preview" />
          </div>
          <div className="project-page__gallery-item">
            <img src="/focus.png" alt="Dashboard preview" />
          </div>
          <div className="project-page__gallery-item">
            <img src="/focus.png" alt="Focus preview" />
          </div>
        </div>
      </section>
    </motion.main>
  )
}
