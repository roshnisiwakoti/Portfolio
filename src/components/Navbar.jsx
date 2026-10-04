import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const sections = ['home', 'projects', 'about', 'skills', 'experience', 'contact']

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Near top of document
      if (window.scrollY < 80) {
        setActiveSection('home')
        return
      }

      // Check if user is scrolled near bottom to highlight contact
      const scrollPosition = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      if (documentHeight - scrollPosition < 80) {
        setActiveSection('contact')
        return
      }

      // Determine active section by offset
      const currentOffset = window.scrollY + 160
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && currentOffset >= el.offsetTop) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    // IntersectionObserver scroll spying
    const observerCallback = (entries) => {
      if (window.scrollY < 80) {
        setActiveSection('home')
        return
      }

      const visibleEntries = entries.filter((entry) => entry.isIntersecting)
      if (visibleEntries.length > 0) {
        visibleEntries.sort(
          (a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
        )
        setActiveSection(visibleEntries[0].target.id)
      }
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-15% 0px -40% 0px',
      threshold: [0, 0.25, 0.5, 0.75],
    })

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Escape key closes mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const handleLinkClick = (hrefOrId) => {
    setMobileMenuOpen(false)
    const targetId = hrefOrId.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(targetId)
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', `#${targetId}`)
      }
    }
  }

  return (
    <motion.header
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-4 sm:px-6 lg:px-8 ${
        isScrolled ? 'py-3' : 'py-4 sm:py-5'
      }`}
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-200 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-2.5 ${
          isScrolled
            ? 'bg-[#FFFDFC]/92 backdrop-blur-md border border-[#DDD8CF] shadow-[0_2px_12px_rgba(16,23,34,0.06)]'
            : 'bg-[#FFFDFC]/85 backdrop-blur-sm border border-[#DDD8CF]/80 shadow-[0_1px_4px_rgba(16,23,34,0.03)]'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick('home')
          }}
          className="group flex items-center gap-1 focus:outline-none select-none cursor-pointer"
          aria-label="Roshni Home"
        >
          <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-[#101722] transition-colors group-hover:text-[#FF624A]">
            ROSHNI
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF624A]" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.href)
                }}
                className={`relative py-1 text-[13px] font-sans transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? 'text-[#101722] font-semibold'
                    : 'text-[#667085] hover:text-[#101722]'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FF624A] rounded-xs"
                    transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* Right CTA Button (Compact & Precise) */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick('contact')
            }}
            className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#FF624A] hover:bg-[#EA4E38] transition-all duration-200 shadow-xs hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Let's Work Together</span>
            <span className="text-xs font-sans group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150">↗</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#101722] bg-[#EFEAE1] border border-[#DDD8CF] hover:bg-[#E5DFD4] transition-colors focus:outline-none cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-2 mx-auto max-w-lg rounded-xl border border-[#DDD8CF] bg-[#FFFDFC]/98 backdrop-blur-xl px-5 py-4 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id
                return (
                  <motion.a
                    key={link.name}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.18 }}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(link.href)
                    }}
                    className={`text-sm py-2 px-3 rounded-lg flex items-center justify-between transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#FF624A] font-semibold bg-[#EFEAE1]'
                        : 'text-[#667085] hover:text-[#101722] hover:bg-[#EFEAE1]/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs opacity-50">↗</span>
                  </motion.a>
                )
              })}

              <div className="pt-2.5 mt-1 border-t border-[#DDD8CF]">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick('contact')
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#FF624A] hover:bg-[#EA4E38] transition-all cursor-pointer"
                >
                  <span>Let's Work Together</span>
                  <span>↗</span>
                </a>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-[#8B9098] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for work</span>
                </div>
                <span>Nepal</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
