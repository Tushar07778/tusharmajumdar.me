import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './Projects.css'

const projects = [
    {
        title: 'Closetic E-commerce',
        description: 'A premium wedding store for the entire family with elegant collections and seamless shopping experience.',
        image: '/images/closetic.png',
        tech: ['React', 'Firebase', 'Tailwind'],
        github: 'https://github.com/Tushar07778/Closetic-ecomercesite',
        live: 'https://closetic-ecomercesite.vercel.app/',
        color: '#00d4ff',
    },
    {
        title: 'Expert Session Booking',
        description: 'Full-stack application for booking sessions with experts, featuring real-time availability and user management.',
        image: '/images/expert session.png',
        tech: ['Next.js', 'PostgreSQL', 'Prisma'],
        github: 'https://github.com/Tushar07778/expert-session-booking',
        live: 'https://expert-session-booking.vercel.app/',
        color: '#a855f7',
    },
    {
        title: 'NVFC Match Center',
        description: 'A comprehensive football match center with live updates, detailed stats, and interactive lineup formations.',
        image: '/images/nvfc.png',
        tech: ['React', 'Framer Motion', 'API'],
        github: 'https://github.com/Tushar07778/NVFC',
        live: 'https://nvfc-matchcenter.vercel.app/',
        color: '#00d4ff',
    },
    {
        title: 'Fin-Track Expenses',
        description: 'Professional finance tracking application to manage expenses, visualize data, and track savings goals.',
        image: '/images/fintrack.png',
        tech: ['React', 'Charts.js', 'Firebase'],
        github: 'https://github.com/Tushar07778/Fin-Track.',
        live: 'https://fin-track-tau.vercel.app/',
        color: '#a855f7',
    },
    {
        title: 'Traveloop Guide',
        description: 'Smart travel platform providing destination insights, honest reviews, and seamless trip planning.',
        image: '/images/traveloop.png',
        tech: ['React', 'PHP', 'CSS'],
        github: 'https://github.com/Tushar07778/traveloop',
        live: 'https://traveloop.vercel.app/',
        color: '#00d4ff',
    },
    {
        title: 'Personal Portfolio',
        description: 'A modern, responsive personal portfolio website showcasing my projects, skills, and experience with interactive animations.',
        image: '/images/portfolio.png',
        tech: ['React', 'Vite', 'Framer Motion'],
        github: 'https://github.com/Tushar07778/Tushar-portfolio',
        live: 'https://tushars-portfolio.vercel.app/',
        color: '#a855f7',
    },
]

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' },
    }),
}

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="projects-section section" id="projects" ref={ref}>
            <div className="container">
                {/* Header */}
                <motion.div
                    className="section-header"
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <p className="section-tag">What I've built</p>
                    <h2 className="section-title">Featured <span>Projects</span></h2>
                    <p className="section-subtitle">
                        A selection of projects I've built to sharpen my skills and solve real problems.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <motion.div
                            className="project-card-new glass-card"
                            key={project.title}
                            variants={fadeInUp}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            custom={i * 0.5 + 1}
                            whileHover={{ y: -8 }}
                            style={{ '--card-color': project.color }}
                        >
                            {/* Image */}
                            <div className="card-img-wrapper">
                                <img src={project.image} alt={project.title} className="card-img" />
                                <div className="card-img-overlay" />
                                <div className="card-actions">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="card-action-btn">
                                        <FiGithub />
                                    </a>
                                    <a href={project.live} target="_blank" rel="noreferrer" className="card-action-btn">
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="card-body">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-desc">{project.description}</p>
                                <div className="card-tech">
                                    {project.tech.map((t) => (
                                        <span className="tech-tag" key={t}>{t}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Glow line */}
                            <div className="card-glow-line" />
                        </motion.div>
                    ))}
                </div>

                {/* GitHub CTA */}
                <motion.div
                    className="projects-cta"
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    custom={4}
                >
                    <a
                        href="https://github.com/Tushar07778"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline"
                    >
                        <FiGithub /> View all on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
