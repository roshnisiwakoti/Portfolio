import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function SkillDetailCard({ category, totalCategories = 6 }) {
  const shouldReduceMotion = useReducedMotion()
  const IconComponent = category.icon

  const handleScrollToProjects = (e) => {
    e.preventDefault()
    const targetId = category.relatedProject?.targetId || 'projects'
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      role="tabpanel"
      id={`skill-panel-${category.id}`}
      aria-labelledby={`skill-tab-${category.id}`}
      className="relative w-full rounded-2xl border border-[#DDD8CF] bg-[#FFFDFC] p-6 sm:p-8 shadow-[0_4px_24px_rgba(16,23,34,0.04)] min-h-[360px] sm:min-h-[400px] flex flex-col justify-between overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, y: 10 }
          }
          animate={{ opacity: 1, y: 0 }}
          exit={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, y: -8 }
          }
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col h-full justify-between"
        >
          {/* Header Row: Category Index + Small Icon Badge */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#DDD8CF]/70 mb-5">
              {/* Category Index: e.g. 01 / 06 */}
              <div className="flex items-center gap-1.5 font-mono text-xs">
                <span className="font-semibold text-[#FF624A]">{category.index}</span>
                <span className="text-[#8B9098]">/</span>
                <span className="text-[#8B9098]">
                  {String(totalCategories).padStart(2, '0')}
                </span>
              </div>

              {/* Small Category Icon */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-[#8B9098] uppercase">
                  {category.label}
                </span>
                <div className="w-7 h-7 rounded-lg bg-[#EFEAE1] border border-[#DDD8CF] flex items-center justify-center text-[#101722]">
                  <IconComponent size={14} />
                </div>
              </div>
            </div>

            {/* Category Title */}
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#101722] tracking-tight mb-3 leading-snug">
              {category.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6 max-w-lg">
              {category.description}
            </p>

            {/* Refined Skill Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-6" aria-label="Technologies and competencies">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono text-[#101722] bg-[#EFEAE1] border border-[#DDD8CF] select-none hover:border-[#101722] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Optional Related Project Action */}
          {category.relatedProject ? (
            <div className="pt-4 border-t border-[#DDD8CF]/70 mt-auto">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="group inline-flex items-center gap-1.5 text-xs font-mono text-[#101722] hover:text-[#FF624A] font-semibold transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF624A] rounded py-1 cursor-pointer"
              >
                <span>{category.relatedProject.label}</span>
                <ArrowRight
                  size={13}
                  className="text-[#FF624A] group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
            </div>
          ) : (
            <div className="pt-4 border-t border-[#DDD8CF]/70 mt-auto text-[11px] font-mono text-[#8B9098] italic">
              Applied across all client and portfolio architectures.
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
