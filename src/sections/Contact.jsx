import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Mail, ArrowRight, ArrowUpRight, Copy, Check } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import { siteLinks } from '../data/siteLinks'

export default function Contact() {
  const shouldReduceMotion = useReducedMotion()
  const [copied, setCopied] = useState(false)
  const [activeNode, setActiveNode] = useState(null) // 'email' | 'linkedin' | 'github' | null

  const emailAddress = siteLinks.email.replace('mailto:', '')
  const linkedinUrl = siteLinks.linkedin || 'https://www.linkedin.com/in/roshni-siwakoti-255520378/'
  const githubUrl = siteLinks.githubProfile || 'https://github.com/roshnisiwakoti'

  const handleCopyEmail = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative z-10 border-t border-[#DDD8CF] scroll-mt-20 sm:scroll-mt-24 overflow-hidden"
    >
      {/* Background Architectural Technical Accents (Restrained, low opacity) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Subtle grid fragment in top corner */}
        <div className="absolute -top-6 -right-6 w-48 h-48 bg-tech-grid opacity-25" />

        {/* Technical coordinates and datum marks */}
        <div className="absolute top-8 right-6 sm:right-10 text-[10px] font-mono tracking-widest text-[#8B9098]/40 uppercase hidden sm:block">
          27.7172° N // 85.3240° E
        </div>
        <div className="absolute bottom-24 left-6 sm:left-10 text-[9px] font-mono tracking-widest text-[#8B9098]/30 uppercase hidden md:block">
          SYS.CHANNEL // 05.OUTPUT
        </div>

        {/* Faint crosshair */}
        <div className="absolute top-1/2 left-4 w-3 h-3 text-[#DDD8CF] opacity-60">
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
            <line x1="6" y1="0" x2="6" y2="12" />
            <line x1="0" y1="6" x2="12" y2="6" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 relative">
        {/* Two-Column Editorial-Tech Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          
          {/* LEFT COLUMN: Narrative & Status */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            {/* Top Label & Secondary Channel Identifier */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-5">
              <span className="text-xs font-mono font-medium tracking-widest text-[#8B9098] uppercase">
                05 / CONTACT
              </span>
              <span className="text-[#DDD8CF]">•</span>
              <span className="text-xs font-mono tracking-widest text-[#FF624A] uppercase font-semibold">
                OPEN CHANNEL
              </span>
            </motion.div>

            {/* Main Editorial Heading */}
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#101722] leading-[1.08] mb-5"
            >
              Let's make <br />
              something useful<span className="text-[#FF624A]">.</span>
            </motion.h2>

            {/* Concise Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-[#667085] font-normal leading-relaxed max-w-md mb-6"
            >
              Have an idea, opportunity or collaboration in mind? Choose a channel and say hello.
            </motion.p>

            {/* Availability Status (Clean, subtle indicator) */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-8 select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono tracking-wider text-[#667085] uppercase">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>

            {/* Primary Action Button (Desktop display; mobile order places CTA after channels) */}
            <motion.div variants={itemVariants} className="hidden lg:block pt-1">
              <a
                href={siteLinks.email}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-white bg-[#FF624A] hover:bg-[#EA4E38] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624A] focus-visible:ring-offset-2"
              >
                <span>Start a conversation</span>
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Connection Network */}
          <div className="lg:col-span-7 w-full">
            {/* DESKTOP DIAGRAM VIEW (lg and up): Asymmetrical Connection Diagram */}
            <div className="hidden lg:block relative min-h-[380px] w-full">
              {/* Technical SVG connecting lines between the three nodes */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                viewBox="0 0 600 380"
                fill="none"
              >
                {/* Segment 1: Email (Node 1) to LinkedIn (Node 2) */}
                <path
                  d="M 360 55 C 440 55, 180 175, 230 175"
                  stroke={activeNode === 'email' || activeNode === 'linkedin' ? '#FF624A' : '#DDD8CF'}
                  strokeWidth={activeNode === 'email' || activeNode === 'linkedin' ? 1.75 : 1}
                  strokeDasharray={activeNode === 'email' || activeNode === 'linkedin' ? 'none' : '3 4'}
                  className="transition-all duration-300"
                />

                {/* Segment 2: LinkedIn (Node 2) to GitHub (Node 3) */}
                <path
                  d="M 230 195 C 160 195, 420 315, 370 315"
                  stroke={activeNode === 'linkedin' || activeNode === 'github' ? '#FF624A' : '#DDD8CF'}
                  strokeWidth={activeNode === 'linkedin' || activeNode === 'github' ? 1.75 : 1}
                  strokeDasharray={activeNode === 'linkedin' || activeNode === 'github' ? 'none' : '3 4'}
                  className="transition-all duration-300"
                />

                {/* Junction beacon markers */}
                <circle
                  cx="360"
                  cy="55"
                  r={activeNode === 'email' ? 3.5 : 2}
                  fill={activeNode === 'email' ? '#FF624A' : '#8B9098'}
                  className="transition-all duration-200"
                />
                <circle
                  cx="230"
                  cy="185"
                  r={activeNode === 'linkedin' ? 3.5 : 2}
                  fill={activeNode === 'linkedin' ? '#FF624A' : '#8B9098'}
                  className="transition-all duration-200"
                />
                <circle
                  cx="370"
                  cy="315"
                  r={activeNode === 'github' ? 3.5 : 2}
                  fill={activeNode === 'github' ? '#FF624A' : '#8B9098'}
                  className="transition-all duration-200"
                />
              </svg>

              {/* NODE 1: EMAIL (Offset Left) */}
              <div className="relative z-10 w-full max-w-[360px]">
                <div
                  onMouseEnter={() => setActiveNode('email')}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`group relative flex items-center justify-between rounded-xl border bg-[#FFFDFC] transition-all duration-200 shadow-[0_1px_4px_rgba(16,23,34,0.03)] ${
                    activeNode === 'email'
                      ? 'border-[#FF624A] bg-white translate-x-1.5 shadow-[0_4px_18px_rgba(255,98,74,0.08)]'
                      : 'border-[#DDD8CF] hover:border-[#101722]'
                  }`}
                >
                  <a
                    href={siteLinks.email}
                    onFocus={() => setActiveNode('email')}
                    onBlur={() => setActiveNode(null)}
                    className="flex-1 flex items-center gap-3.5 p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624A] rounded-l-xl"
                    aria-label={`Send email to ${emailAddress}`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 shrink-0 ${
                        activeNode === 'email'
                          ? 'bg-[#FF624A]/10 text-[#FF624A]'
                          : 'bg-[#EFEAE1] text-[#667085] group-hover:text-[#101722]'
                      }`}
                    >
                      <Mail size={16} />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-base text-[#101722] tracking-tight">
                          Email
                        </span>
                        <span className="text-[10px] font-mono text-[#8B9098] uppercase">
                          CH // 01
                        </span>
                      </div>
                      <span
                        className={`text-xs font-mono transition-colors truncate ${
                          activeNode === 'email' ? 'text-[#101722]' : 'text-[#667085]'
                        }`}
                      >
                        {emailAddress}
                      </span>
                    </div>
                  </a>

                  {/* Copy Email Button */}
                  <div className="pr-3 pl-1 shrink-0">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      title="Copy email address"
                      className="p-2 rounded-lg text-[#667085] hover:text-[#101722] hover:bg-[#EFEAE1] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624A] active:scale-95 cursor-pointer"
                    >
                      {copied ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-700">
                          <Check size={13} />
                          <span>Copied</span>
                        </span>
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* NODE 2: LINKEDIN (Offset Right) */}
              <div className="relative z-10 w-full max-w-[360px] ml-auto mt-6">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Roshni's LinkedIn profile"
                  onMouseEnter={() => setActiveNode('linkedin')}
                  onMouseLeave={() => setActiveNode(null)}
                  onFocus={() => setActiveNode('linkedin')}
                  onBlur={() => setActiveNode(null)}
                  className={`group relative flex items-center justify-between p-4 rounded-xl border bg-[#FFFDFC] transition-all duration-200 shadow-[0_1px_4px_rgba(16,23,34,0.03)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624A] ${
                    activeNode === 'linkedin'
                      ? 'border-[#FF624A] bg-white translate-x-1.5 shadow-[0_4px_18px_rgba(255,98,74,0.08)]'
                      : 'border-[#DDD8CF] hover:border-[#101722]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 shrink-0 ${
                        activeNode === 'linkedin'
                          ? 'bg-[#FF624A]/10 text-[#FF624A]'
                          : 'bg-[#EFEAE1] text-[#667085] group-hover:text-[#101722]'
                      }`}
                    >
                      <LinkedinIcon size={16} />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-base text-[#101722] tracking-tight">
                          LinkedIn
                        </span>
                        <span className="text-[10px] font-mono text-[#8B9098] uppercase">
                          CH // 02
                        </span>
                      </div>
                      <span
                        className={`text-xs font-mono transition-colors truncate ${
                          activeNode === 'linkedin' ? 'text-[#101722]' : 'text-[#667085]'
                        }`}
                      >
                        Connect professionally
                      </span>
                    </div>
                  </div>

                  <div className="text-[#8B9098] group-hover:text-[#FF624A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 pr-1 shrink-0">
                    <ArrowUpRight size={16} />
                  </div>
                </a>
              </div>

              {/* NODE 3: GITHUB (Offset Left-Center) */}
              <div className="relative z-10 w-full max-w-[360px] ml-10 mt-6">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Roshni's GitHub profile"
                  onMouseEnter={() => setActiveNode('github')}
                  onMouseLeave={() => setActiveNode(null)}
                  onFocus={() => setActiveNode('github')}
                  onBlur={() => setActiveNode(null)}
                  className={`group relative flex items-center justify-between p-4 rounded-xl border bg-[#FFFDFC] transition-all duration-200 shadow-[0_1px_4px_rgba(16,23,34,0.03)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624A] ${
                    activeNode === 'github'
                      ? 'border-[#FF624A] bg-white translate-x-1.5 shadow-[0_4px_18px_rgba(255,98,74,0.08)]'
                      : 'border-[#DDD8CF] hover:border-[#101722]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 shrink-0 ${
                        activeNode === 'github'
                          ? 'bg-[#FF624A]/10 text-[#FF624A]'
                          : 'bg-[#EFEAE1] text-[#667085] group-hover:text-[#101722]'
                      }`}
                    >
                      <GithubIcon size={16} />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-base text-[#101722] tracking-tight">
                          GitHub
                        </span>
                        <span className="text-[10px] font-mono text-[#8B9098] uppercase">
                          CH // 03
                        </span>
                      </div>
                      <span
                        className={`text-xs font-mono transition-colors truncate ${
                          activeNode === 'github' ? 'text-[#101722]' : 'text-[#667085]'
                        }`}
                      >
                        Explore my code
                      </span>
                    </div>
                  </div>

                  <div className="text-[#8B9098] group-hover:text-[#FF624A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 pr-1 shrink-0">
                    <ArrowUpRight size={16} />
                  </div>
                </a>
              </div>
            </div>

            {/* MOBILE & TABLET VIEW (< lg): Vertical Connected Line Architecture */}
            <div className="block lg:hidden relative pl-6 sm:pl-8 border-l border-[#DDD8CF] space-y-4 my-2">
              {/* NODE 1: EMAIL */}
              <div className="relative">
                {/* Node Junction Dot on vertical line */}
                <div
                  className={`absolute -left-[30.5px] sm:-left-[38.5px] top-5 w-2.5 h-2.5 rounded-full border-2 transition-colors duration-200 ${
                    activeNode === 'email'
                      ? 'bg-[#FF624A] border-[#FF624A]'
                      : 'bg-[#FFFDFC] border-[#DDD8CF]'
                  }`}
                />

                <div
                  onTouchStart={() => setActiveNode('email')}
                  className={`group relative flex items-center justify-between rounded-xl border bg-[#FFFDFC] transition-all duration-200 shadow-xs ${
                    activeNode === 'email'
                      ? 'border-[#FF624A] bg-white'
                      : 'border-[#DDD8CF]'
                  }`}
                >
                  <a
                    href={siteLinks.email}
                    className="flex-1 flex items-center gap-3 p-3.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624A] rounded-l-xl"
                    aria-label={`Send email to ${emailAddress}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                        activeNode === 'email'
                          ? 'bg-[#FF624A]/10 text-[#FF624A]'
                          : 'bg-[#EFEAE1] text-[#667085]'
                      }`}
                    >
                      <Mail size={15} />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-sm text-[#101722]">
                          Email
                        </span>
                        <span className="text-[9px] font-mono text-[#8B9098]">
                          CH // 01
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#667085] truncate">
                        {emailAddress}
                      </span>
                    </div>
                  </a>

                  <div className="pr-3 pl-1 shrink-0">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      title="Copy email address"
                      className="p-2 rounded-lg text-[#667085] hover:text-[#101722] hover:bg-[#EFEAE1] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624A] active:scale-95 cursor-pointer"
                    >
                      {copied ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-700">
                          <Check size={13} />
                          <span>Copied</span>
                        </span>
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* NODE 2: LINKEDIN */}
              <div className="relative">
                <div
                  className={`absolute -left-[30.5px] sm:-left-[38.5px] top-5 w-2.5 h-2.5 rounded-full border-2 transition-colors duration-200 ${
                    activeNode === 'linkedin'
                      ? 'bg-[#FF624A] border-[#FF624A]'
                      : 'bg-[#FFFDFC] border-[#DDD8CF]'
                  }`}
                />

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Roshni's LinkedIn profile"
                  onTouchStart={() => setActiveNode('linkedin')}
                  className={`group relative flex items-center justify-between p-3.5 rounded-xl border bg-[#FFFDFC] transition-all duration-200 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624A] ${
                    activeNode === 'linkedin'
                      ? 'border-[#FF624A] bg-white'
                      : 'border-[#DDD8CF]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                        activeNode === 'linkedin'
                          ? 'bg-[#FF624A]/10 text-[#FF624A]'
                          : 'bg-[#EFEAE1] text-[#667085]'
                      }`}
                    >
                      <LinkedinIcon size={15} />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-sm text-[#101722]">
                          LinkedIn
                        </span>
                        <span className="text-[9px] font-mono text-[#8B9098]">
                          CH // 02
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#667085] truncate">
                        Connect professionally
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight size={15} className="text-[#8B9098] pr-1 shrink-0" />
                </a>
              </div>

              {/* NODE 3: GITHUB */}
              <div className="relative">
                <div
                  className={`absolute -left-[30.5px] sm:-left-[38.5px] top-5 w-2.5 h-2.5 rounded-full border-2 transition-colors duration-200 ${
                    activeNode === 'github'
                      ? 'bg-[#FF624A] border-[#FF624A]'
                      : 'bg-[#FFFDFC] border-[#DDD8CF]'
                  }`}
                />

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Roshni's GitHub profile"
                  onTouchStart={() => setActiveNode('github')}
                  className={`group relative flex items-center justify-between p-3.5 rounded-xl border bg-[#FFFDFC] transition-all duration-200 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624A] ${
                    activeNode === 'github'
                      ? 'border-[#FF624A] bg-white'
                      : 'border-[#DDD8CF]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                        activeNode === 'github'
                          ? 'bg-[#FF624A]/10 text-[#FF624A]'
                          : 'bg-[#EFEAE1] text-[#667085]'
                      }`}
                    >
                      <GithubIcon size={15} />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-sm text-[#101722]">
                          GitHub
                        </span>
                        <span className="text-[9px] font-mono text-[#8B9098]">
                          CH // 03
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#667085] truncate">
                        Explore my code
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight size={15} className="text-[#8B9098] pr-1 shrink-0" />
                </a>
              </div>

              {/* PRIMARY CTA IN MOBILE FLOW (Directly after channels) */}
              <div className="pt-4">
                <a
                  href={siteLinks.email}
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-xs text-white bg-[#FF624A] hover:bg-[#EA4E38] transition-all duration-200 active:translate-y-0 shadow-xs w-full sm:w-auto"
                >
                  <span>Start a conversation</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Integrated Footer (Non-boxed, clean editorial) */}
        <footer className="mt-20 sm:mt-28 pt-8 border-t border-[#DDD8CF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#8B9098] font-sans">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-sm text-[#101722] tracking-tight">
              ROSHNI.
            </span>
            <span className="text-[#8B9098]">— Full-Stack Developer</span>
          </div>

          <div className="font-mono text-[11px] text-[#8B9098]">
            <span>Nepal</span>
          </div>

          <div className="font-mono text-[11px] text-[#8B9098]">
            <span>© 2026 Roshni</span>
          </div>
        </footer>
      </div>
    </section>
  )
}
