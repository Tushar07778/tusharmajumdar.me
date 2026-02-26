import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaFigma, FaGithub, FaWordpress, FaReact
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { FiMapPin, FiUser, FiCode } from 'react-icons/fi'
import './About.css'

const skills = [
    { icon: <FaHtml5 />, name: 'HTML5', color: '#e34f26' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572b6' },
    { icon: <FaJs />, name: 'JavaScript', color: '#f7df1e' },
    { icon: <FaReact />, name: 'React', color: '#61dafb' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: '#38bdf8' },
    { icon: <FaPhp />, name: 'PHP', color: '#8892be' },
    { icon: <FaPython />, name: 'Python', color: '#3776ab' },
    { icon: <FaFigma />, name: 'Figma', color: '#a259ff' },
    { icon: <FaGithub />, name: 'GitHub', color: '#fff' },
    { icon: <FaWordpress />, name: 'WordPress', color: '#21759b' },
]

const highlights = [
    { icon: <FiUser />, label: 'Frontend Developer', sub: 'Based in Noida, India' },
    { icon: <FiMapPin />, label: 'Noida, UP', sub: 'Open to remote work' },
    { icon: <FiCode />, label: 'Open Source Enthusiast', sub: 'github.com/Tushar07778' },
]

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.55, ease: 'easeOut' },
    }),
}

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="about section" id="about" ref={ref}>
            <div className="container">
                {/* Header */}
                <motion.div
                    className="section-header"
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <p className="section-tag">Get to know me</p>
                    <h2 className="section-title">About <span>Me</span></h2>
                </motion.div>

                <div className="about-grid">
                    {/* Photo */}
                    <motion.div
                        className="about-photo-col"
                        variants={fadeInUp}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        custom={1}
                    >
                        <div className="about-photo-frame">
                            <img src="/images/myimg.png" alt="Tushar Majumdar" className="about-photo" />
                            <div className="photo-overlay" />
                            <div className="photo-badge">
                                <span className="badge-emoji">💻</span>
                                <div>
                                    <div className="badge-title">Frontend Dev</div>
                                    <div className="badge-sub">@tushar</div>
                                </div>
                            </div>
                        </div>

                        {/* Highlight cards */}
                        <div className="about-highlights">
                            {highlights.map((h, i) => (
                                <motion.div
                                    className="glass-card highlight-card"
                                    key={h.label}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate={isInView ? 'visible' : 'hidden'}
                                    custom={3 + i}
                                >
                                    <span className="highlight-icon">{h.icon}</span>
                                    <div>
                                        <div className="highlight-label">{h.label}</div>
                                        <div className="highlight-sub">{h.sub}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        className="about-text-col"
                        variants={fadeInUp}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        custom={2}
                    >
                        <h3 className="about-heading">
                            Hi! I'm Tushar — a passionate{' '}
                            <span className="gradient-text">Creative Developer</span>
                        </h3>
                        <p className="about-bio">
                            I'm a UI/UX Designer and Frontend Developer based in Noida, focused on building
                            beautiful, responsive web experiences. I love bringing ideas to life in the browser,
                            blending clean design with solid code.
                        </p>
                        <p className="about-bio">
                            Currently I'm sharpening my skills in modern web technologies and design tools,
                            building projects that challenge me to grow every day.
                        </p>

                        {/* Skills Heading */}
                        <div className="skills-heading">
                            <p className="section-tag" style={{ marginBottom: 0 }}>Tech stack</p>
                        </div>

                        {/* Skills Grid */}
                        <div className="skills-grid">
                            {skills.map((skill, i) => (
                                <motion.div
                                    className="skill-badge"
                                    key={skill.name}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate={isInView ? 'visible' : 'hidden'}
                                    custom={5 + i * 0.5}
                                    whileHover={{ scale: 1.08, y: -4 }}
                                    style={{ '--skill-color': skill.color }}
                                >
                                    <span className="skill-icon">{skill.icon}</span>
                                    <span className="skill-name">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
