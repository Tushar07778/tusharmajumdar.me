import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiSend, FiLoader } from 'react-icons/fi'
import './Contact.css'

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// Replace these values with yours from https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID = 'service_tpgpf31'
const EMAILJS_TEMPLATE_ID = 'template_k6e19n9'
const EMAILJS_PUBLIC_KEY = 'cljcmpAxf54s0kpVu'
// ─────────────────────────────────────────────────────────────────────────────

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
    }),
}

export default function Contact() {
    const ref = useRef(null)
    const formRef = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | sending | success | error

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            )
            setStatus('success')
            setFormData({ name: '', email: '', message: '' })
            setTimeout(() => setStatus('idle'), 5000)
        } catch (err) {
            console.error('EmailJS error:', err)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 4000)
        }
    }

    const isLoading = status === 'sending'

    return (
        <section className="contact-section section" id="contact" ref={ref}>
            <div className="container">
                {/* Header */}
                <motion.div
                    className="section-header"
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <p className="section-tag">Get in touch</p>
                    <h2 className="section-title">Let's <span>Work Together</span></h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="contact-grid">
                    {/* Left: Info */}
                    <motion.div
                        className="contact-info-col"
                        variants={fadeInUp}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        custom={1}
                    >
                        <div className="contact-info-card glass-card">
                            <h3 className="contact-info-title">Contact Information</h3>
                            <p className="contact-info-sub">
                                Feel free to reach out! I'm always open to discussing new projects,
                                creative ideas, or opportunities.
                            </p>

                            <div className="contact-items">
                                <a href="mailto:tushar24@navgurukul.org" className="contact-item-row">
                                    <span className="contact-item-icon"><FiMail /></span>
                                    <div>
                                        <div className="contact-item-label">Email</div>
                                        <div className="contact-item-value">tushar24@navgurukul.org</div>
                                    </div>
                                </a>
                                <div className="contact-item-row">
                                    <span className="contact-item-icon"><FiMapPin /></span>
                                    <div>
                                        <div className="contact-item-label">Location</div>
                                        <div className="contact-item-value">Noida, Uttar Pradesh, India</div>
                                    </div>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="contact-socials">
                                <span className="contact-socials-label">Find me on</span>
                                <div className="contact-social-links">
                                    <a href="https://github.com/Tushar07778" target="_blank" rel="noreferrer" className="contact-social-btn">
                                        <FiGithub />
                                    </a>
                                    <a href="https://www.linkedin.com/in/tushar-majumdar-67a363345/" target="_blank" rel="noreferrer" className="contact-social-btn">
                                        <FiLinkedin />
                                    </a>
                                    <a href="#" className="contact-social-btn"><FiInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        className="contact-form-col"
                        variants={fadeInUp}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        custom={2}
                    >
                        <form className="contact-form glass-card" ref={formRef} onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <div className="form-alert form-alert-success">
                                    🎉 Message sent! I'll get back to you soon.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="form-alert form-alert-error">
                                    ❌ Something went wrong. Please try again or email me directly.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`btn-primary form-submit ${status === 'success' ? 'sent' : ''}`}
                            >
                                {isLoading ? (
                                    <><FiLoader className="spin-icon" /><span>Sending...</span></>
                                ) : status === 'success' ? (
                                    <span>Message Sent! 🎉</span>
                                ) : (
                                    <><span>Send Message</span><FiSend /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
