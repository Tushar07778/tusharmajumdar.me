import { FiGithub, FiLinkedin, FiInstagram, FiHeart } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                {/* Logo */}
                <div className="footer-logo">
                    <span className="logo-name">Tushar</span>
                </div>

                {/* Links */}
                <nav className="footer-nav">
                    {['#home', '#about', '#projects', '#contact'].map((href, i) => {
                        const labels = ['Home', 'About', 'Projects', 'Contact']
                        return (
                            <a
                                key={href}
                                href={href}
                                className="footer-nav-link"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                {labels[i]}
                            </a>
                        )
                    })}
                </nav>

                {/* Socials */}
                <div className="footer-socials">
                    <a href="https://github.com/Tushar07778" target="_blank" rel="noreferrer" className="footer-social">
                        <FiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/tushar-majumdar-67a363345/" target="_blank" rel="noreferrer" className="footer-social">
                        <FiLinkedin />
                    </a>
                    <a href="#" className="footer-social"><FiInstagram /></a>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <div className="container">
                    <p className="footer-copy">
                        © {new Date().getFullYear()} Tushar Majumdar. Made with{' '}
                        <FiHeart className="heart-icon" /> using React.
                    </p>
                </div>
            </div>
        </footer>
    )
}
