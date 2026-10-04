import { useState, useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Mail, ArrowRight, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import OrbitalNetwork from './OrbitalNetwork'
import { siteLinks } from '../data/siteLinks'

export default function Hero() {
  const heroRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })
  const [isFinePointer, setIsFinePointer] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(pointer: fine)').matches
    }
    return false
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')
    const handlePointerChange = (e) => setIsFinePointer(e.matches)
    mediaQuery.addEventListener('change', handlePointerChange)
    return () => mediaQuery.removeEventListener('change', handlePointerChange)
  }, [])

  const handleMouseMove = (e) => {
    if (!isFinePointer || shouldReduceMotion) return

    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window

    const rawX = (clientX / innerWidth - 0.5) * 2
    const rawY = (clientY / innerHeight - 0.5) * 2

    const x = Math.max(-1, Math.min(1, rawX))
    const y = Math.max(-1, Math.min(1, rawY))

    setMouseOffset({ x, y })
  }

  const handleScrollTo = (targetId) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92svh] w-full flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-8 overflow-hidden scroll-mt-24"
    >
      {/* Main Two-Column Composition */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto py-2">
        {/* LEFT COLUMN: Editorial Text Content (7 cols) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left z-10"
        >
          {/* Eyebrow Label */}
          <motion.div variants={itemVariants} className="mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFEAE1] border border-[#DDD8CF] text-xs font-mono tracking-widest text-[#667085]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF624A]" />
              <span>FULL-STACK DEVELOPER</span>
            </div>
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-[42px] sm:text-[56px] md:text-[66px] lg:text-[74px] font-bold tracking-tight text-[#101722] leading-[1.08] mb-5"
          >
            Ideas into <br />
            <span className="text-[#FF624A]">interactive</span> products.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#667085] font-normal leading-relaxed max-w-xl mb-7"
          >
            I'm <span className="font-semibold text-[#101722]">Roshni</span>, a full-stack developer building modern web applications, real-time systems and useful digital products. Based in Nepal, focused on turning ideas into clean, functional experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3.5 mb-7 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                handleScrollTo('projects')
              }}
              className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm text-white bg-[#FF624A] hover:bg-[#EA4E38] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs w-full sm:w-auto cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleScrollTo('contact')
              }}
              className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm text-[#101722] bg-[#FFFDFC] border border-[#DDD8CF] hover:border-[#101722] hover:bg-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs w-full sm:w-auto cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={14} className="text-[#667085] group-hover:text-[#101722] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </motion.div>

          {/* Social Icons & Intentional Technical Micro-Note */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1"
          >
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#8B9098] font-mono uppercase tracking-wider mr-1">
                Connect:
              </span>

              {/* GitHub */}
              {siteLinks.githubProfile ? (
                <a
                  href={siteLinks.githubProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#FFFDFC] border border-[#DDD8CF] hover:border-[#101722] text-[#667085] hover:text-[#101722] flex items-center justify-center transition-all duration-150 shadow-xs hover:-translate-y-0.5"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={14} />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  title="GitHub profile link coming soon"
                  aria-label="GitHub profile link coming soon"
                  className="w-8 h-8 rounded-lg bg-[#FFFDFC]/60 border border-[#DDD8CF]/70 text-[#8B9098] flex items-center justify-center cursor-not-allowed select-none opacity-60 shadow-xs"
                >
                  <GithubIcon size={14} />
                </button>
              )}

              {/* LinkedIn */}
              {siteLinks.linkedin ? (
                <a
                  href={siteLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#FFFDFC] border border-[#DDD8CF] hover:border-[#101722] text-[#667085] hover:text-[#101722] flex items-center justify-center transition-all duration-150 shadow-xs hover:-translate-y-0.5"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={14} />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  title="LinkedIn profile link coming soon"
                  aria-label="LinkedIn profile link coming soon"
                  className="w-8 h-8 rounded-lg bg-[#FFFDFC]/60 border border-[#DDD8CF]/70 text-[#8B9098] flex items-center justify-center cursor-not-allowed select-none opacity-60 shadow-xs"
                >
                  <LinkedinIcon size={14} />
                </button>
              )}

              {/* Email */}
              <a
                href={siteLinks.email}
                className="w-8 h-8 rounded-lg bg-[#FFFDFC] border border-[#DDD8CF] hover:border-[#101722] text-[#667085] hover:text-[#101722] flex items-center justify-center transition-all duration-150 shadow-xs hover:-translate-y-0.5"
                aria-label="Email Roshni"
                title="Email Roshni"
              >
                <Mail size={14} />
              </a>
            </div>

            {/* Restrained developer annotation */}
            <div className="flex items-center gap-2 text-[#8B9098] font-mono text-xs select-none">
              <span className="hidden sm:inline text-[#DDD8CF]">•</span>
              <span className="tracking-wide">build • solve • improve</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Orbital Skills Visualization (5 cols) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-5 flex items-center justify-center w-full mt-4 lg:mt-0 relative"
        >
          <OrbitalNetwork mouseOffset={mouseOffset} />
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-6 flex flex-col items-center justify-center gap-1 pointer-events-none select-none"
      >
        <span className="text-[10px] font-mono tracking-widest text-[#8B9098] uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[#667085] flex items-center justify-center"
        >
          <ArrowDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  )
}
