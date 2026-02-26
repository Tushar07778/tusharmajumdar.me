import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiInstagram, FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('Home')

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (label, href) => {
        setActive(label)
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container navbar-inner">
                    {/* Logo */}
                    <a href="#home" className="nav-logo" onClick={() => handleNavClick('Home', '#home')}>
                        <span className="logo-name">Tushar</span>
                    </a>

                    {/* Desktop Nav Links */}
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className={`nav-link ${active === link.label ? 'active' : ''}`}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.label, link.href) }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Social Icons */}
                    <div className="nav-socials">
                        <a href="https://github.com/Tushar07778" target="_blank" rel="noreferrer" className="social-icon">
                            <FiGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/tushar-majumdar-67a363345/" target="_blank" rel="noreferrer" className="social-icon">
                            <FiLinkedin />
                        </a>
                        <a href="#" className="social-icon">
                            <FiInstagram />
                        </a>
                        <a href="#contact" className="btn-hire" onClick={(e) => { e.preventDefault(); handleNavClick('Contact', '#contact') }}>
                            Hire Me
                        </a>
                    </div>

                    {/* Hamburger */}
                    <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className={`mobile-link ${active === link.label ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.label, link.href) }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="mobile-socials">
                    <a href="https://github.com/Tushar07778" target="_blank" rel="noreferrer"><FiGithub /></a>
                    <a href="https://www.linkedin.com/in/tushar-majumdar-67a363345/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
                    <a href="#"><FiInstagram /></a>
                </div>
            </div>

            {/* Overlay */}
            {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
        </>
    )
}
