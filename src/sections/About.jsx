import SectionHeading from '../components/SectionHeading'
import { motion, useReducedMotion } from 'framer-motion'

export default function About() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="about" className="py-20 sm:py-24 relative z-10 border-t border-[#DDD8CF] scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
        <SectionHeading
          number="02"
          title="ABOUT"
          tagline="Engineering with intent."
          description="A look into my background, engineering philosophy, and how I approach building software."
        />

        {/* Clean Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Statement & Narrative (7 cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Large Statement */}
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#101722] leading-[1.15] mb-6">
              A curious developer <br />
              who loves building useful things.
            </h3>

            {/* Concise Personal Narrative */}
            <div className="space-y-4 text-sm sm:text-base text-[#667085] leading-relaxed max-w-xl">
              <p>
                I'm a full-stack developer based in Nepal with an affinity for understanding how systems behave end-to-end—from database query execution and socket protocols to the nuance of how an interface responds under the cursor.
              </p>
              <p>
                Whether architecting real-time video synchronization pipelines with SignalR and WebRTC or designing digital storefronts that give local businesses a clean presence, my goal is always real-world utility, clear code structure, and predictable performance.
              </p>
            </div>
          </motion.div>

          {/* Minimal Technical Profile Block (5 cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-5 rounded-2xl border border-[#DDD8CF] bg-[#FFFDFC] p-6 sm:p-7 shadow-[0_2px_8px_rgba(16,23,34,0.03)]"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#DDD8CF]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8B9098]">
                Technical Dossier
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF624A]" />
            </div>

            <dl className="divide-y divide-[#DDD8CF]/60 text-xs sm:text-sm">
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#8B9098] font-mono">Location</dt>
                <dd className="text-[#101722] font-medium text-right">Kathmandu, Nepal</dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#8B9098] font-mono">Specialization</dt>
                <dd className="text-[#101722] font-medium text-right">Full-Stack & Real-Time</dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#8B9098] font-mono">Core Stack</dt>
                <dd className="text-[#101722] font-medium text-right">ASP.NET Core • React • SQL</dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#8B9098] font-mono">Status</dt>
                <dd className="flex items-center gap-1.5 text-emerald-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for roles
                </dd>
              </div>
            </dl>

            <div className="mt-4 pt-4 border-t border-[#DDD8CF] text-xs text-[#667085] leading-relaxed italic">
              "Simplicity in system design is the prerequisite for reliability."
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
