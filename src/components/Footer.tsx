import { Link } from 'react-router-dom'
import BrandMark from './BrandMark'
import './Footer.css'

const footerLinks = {
  projects: [{ label: 'BroFocus', to: '/#projects' }],
  company: [
    { label: 'Our team', to: '/#team' },
    { label: 'About Incognito', to: '/#home' },
  ],
  support: [{ label: 'Contact us', to: '/contact' }],
  legal: [
    { label: 'Privacy policy', to: '#' },
    { label: 'Terms of use', to: '#' },
    { label: 'Cookies', to: '#' },
  ],
}

function FooterLink({ item }: { item: { label: string; to: string } }) {
  return <Link to={item.to}>{item.label}</Link>
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <img src="/favicon.png" alt="" width={48} height={48} className="footer__logo" />
          <div>
            <BrandMark size="footer" />
            <p className="footer__tagline">Building what the world isn&apos;t ready to see.</p>
          </div>
        </div>

        <div className="footer__columns">
          <div>
            <h4>Projects</h4>
            <ul>
              {footerLinks.projects.map((item) => (
                <li key={item.label}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              {footerLinks.support.map((item) => (
                <li key={item.label}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              {footerLinks.legal.map((item) => (
                <li key={item.label}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} Team Incognito. All rights reserved.</p>
      </div>
    </footer>
  )
}
