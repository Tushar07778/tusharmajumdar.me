import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <>
            {/* Background Effects */}
            <div className="bg-grid" />
            <div className="orb orb-1" />
            <div className="orb orb-2" />

            {/* Main Content */}
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
