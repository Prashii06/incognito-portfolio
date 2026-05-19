import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { STITCH_DESIGN_URL, DOCS_URL } from '../data/project'
import './ProjectBrief.css'

export default function ProjectBrief() {
  return (
    <section className="product" id="projects">
      <div className="container product__inner">
        <motion.div
          className="product__visual"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="product__image-wrap"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          >
            <img
              src="/focus.png"
              alt="BroFocus focus environment on a desk setup"
              className="product__image"
              loading="lazy" width={250} height={700}
            />
            <div className="product__image-overlay" aria-hidden />
          </motion.div>
        </motion.div>

        <motion.div
          className="product__content"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="product__label">Internship Project</p>
          <h2 className="product__title">BroFocus — The Future of Work & Productivity</h2>
          <p className="product__text">
            BroFocus is a next-generation AI productivity tracker built to streamline your workflow and supercharge deep work. By combining a one-click Google Workspace integration hub with advanced multimodal AI, BroFocus acts as your ultimate intelligent assistant. Interact seamlessly via natural voice or text, execute real-time web searches for instant fact-checking, and leverage cutting-edge computer vision to extract actionable tasks directly from your screenshots, photos, and camera inputs. Stop chasing your tools—let your tools work for you.
          </p>

          <Link
            to="/project"
            className="product__cta"
          >
            Know more
            <span aria-hidden>→</span>
          </Link>

          <div className="product__links">
            <a
              href={STITCH_DESIGN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="product__link"
            >
              View Stitch design ↗
            </a>
            <a href={DOCS_URL} className="product__link">
              View docs ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
