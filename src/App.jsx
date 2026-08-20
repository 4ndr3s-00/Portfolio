import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="scanlines pointer-events-none fixed inset-0 z-[100] opacity-[0.04]" />
      <div className="fixed inset-0 z-[100] pointer-events-none border border-white/[0.06] m-2 rounded-xl" />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
