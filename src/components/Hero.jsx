import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import './Hero.css'

const roles = ['Frontend Developer', 'UI/UX Designer', 'React Developer', 'Creative Coder']

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const current = roles[roleIndex]
        let timeout

        if (!isDeleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 100)
        } else if (!isDeleting && displayed.length === current.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 55)
        } else if (isDeleting && displayed.length === 0) {
            setIsDeleting(false)
            setRoleIndex((i) => (i + 1) % roles.length)
        }

        return () => clearTimeout(timeout)
    }, [displayed, isDeleting, roleIndex])

    const handleContactClick = (e) => {
        e.preventDefault()
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero section" id="home">
            <div className="container hero-inner">
                {/* Left Content */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {/* Badge */}
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <span className="badge-dot" />
                        Available for work
                    </motion.div>

                    {/* Greeting */}
                    <motion.p
                        className="hero-greeting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Hello, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        className="hero-name"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                    >
                        Tushar<br />
                        <span className="gradient-text">Majumdar</span>
                    </motion.h1>

                    {/* Typewriter Role */}
                    <motion.div
                        className="hero-role"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <span className="role-text">{displayed}</span>
                        <span className="cursor" />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        Passionate Frontend Developer based in <span className="highlight">Noida</span>,
                        crafting beautiful, responsive web experiences with modern technologies.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <a href="#contact" className="btn-primary" onClick={handleContactClick}>
                            <span>Let's Connect</span>
                            <FiArrowRight />
                        </a>
                        <a href="https://drive.google.com/file/d/1NMIwfpWUythV3_SpKJDOc6FohBzW2wgR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-outline">
                            Resume <FiDownload />
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        {[
                            { count: '6+', label: 'Projects Built' },
                            { count: '8+', label: 'Technologies' },
                            { count: '1+', label: 'Years Learning' },
                        ].map((stat) => (
                            <div className="stat-item" key={stat.label}>
                                <span className="stat-count">{stat.count}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right - Photo */}
                <motion.div
                    className="hero-photo-wrapper"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                >
                    {/* Floating Card 1 */}
                    <motion.div
                        className="float-card float-card-1"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    >
                        <FiGithub className="float-icon" />
                        <span>github.com/Tushar07778</span>
                    </motion.div>

                    {/* Photo Ring */}
                    <div className="photo-ring">
                        <div className="photo-ring-inner">
                            <div className="photo-glow" />
                            <img
                                src="/images/myimg.png"
                                alt="Tushar Majumdar"
                                className="hero-photo"
                            />
                        </div>
                    </div>

                    {/* Floating Card 2 */}
                    <motion.div
                        className="float-card float-card-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                    >
                        <FiLinkedin className="float-icon" />
                        <span>LinkedIn Connected</span>
                    </motion.div>

                    {/* Decorative dots */}
                    <div className="hero-dots">
                        {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className="dot" />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
            >
                <div className="scroll-mouse">
                    <div className="scroll-wheel" />
                </div>
                <span>Scroll down</span>
            </motion.div>
        </section>
    )
}
