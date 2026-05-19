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
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
              alt="BroFocus focus environment on a desk setup"
              className="product__image"
              loading="lazy"
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
          <p className="product__label">Flagship Product</p>
          <h2 className="product__title">BroFocus — The Future of Execution.</h2>
          <p className="product__text">
            A gallery-grade focus environment engineered for deep work. BroFocus strips away
            digital noise to reveal a high-performance interface where your attention is the only
            metric that matters.
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
