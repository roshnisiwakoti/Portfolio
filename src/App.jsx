import BackgroundEffects from './components/BackgroundEffects'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './sections/Work'
import About from './sections/About'
import Skills from './sections/Skills'
import Journey from './sections/Journey'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-[#F6F2EA] text-[#101722] overflow-x-hidden selection:bg-[#FF624A]/15 selection:text-[#101722]">
      {/* Architectural subtle background effects */}
      <BackgroundEffects />

      {/* Clean, precise floating navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col w-full">
        <Hero />
        <Work />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </main>
    </div>
  )
}

export default App
