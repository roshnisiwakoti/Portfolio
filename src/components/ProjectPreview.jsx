import { motion, useReducedMotion } from 'framer-motion'

export default function ProjectPreview({ project, isDark = false }) {
  const shouldReduceMotion = useReducedMotion()
  const hasLiveDemo = Boolean(project.live && project.live.trim() !== '')

  const cardContent = (
    <motion.div
      whileHover={shouldReduceMotion ? {} : hasLiveDemo ? { y: -3 } : {}}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative w-full rounded-xl sm:rounded-2xl border transition-all duration-200 shadow-sm overflow-hidden select-none ${
        isDark
          ? 'bg-[#10141C] border-[#2B3342] shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
          : 'bg-[#FFFDFC] border-[#DDD8CF] shadow-[0_4px_20px_rgba(16,23,34,0.06)]'
      } ${hasLiveDemo ? 'cursor-pointer hover:shadow-md' : 'cursor-default'}`}
    >
      {/* Browser Chrome Header */}
      <div
        className={`h-8 px-3.5 border-b flex items-center justify-between shrink-0 ${
          isDark
            ? 'bg-[#161B24] border-[#2B3342]'
            : 'bg-[#EFEAE1] border-[#DDD8CF]'
        }`}
      >
        {/* Three delicate browser dots */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span
            className={`w-2 h-2 rounded-full ${
              isDark ? 'bg-[#374151]' : 'bg-[#DDD8CF]'
            }`}
          />
          <span
            className={`w-2 h-2 rounded-full ${
              isDark ? 'bg-[#374151]' : 'bg-[#DDD8CF]'
            }`}
          />
          <span
            className={`w-2 h-2 rounded-full ${
              isDark ? 'bg-[#374151]' : 'bg-[#DDD8CF]'
            }`}
          />
        </div>

        {/* Minimal project index indicator */}
        <span
          className={`text-[10px] font-mono tracking-wider uppercase ${
            isDark ? 'text-[#A6ABB4]' : 'text-[#8B9098]'
          }`}
        >
          Project {project.number}
        </span>
      </div>

      {/* Real Screenshot Container */}
      <div
        className={`relative w-full overflow-hidden ${
          isDark ? 'bg-[#0E121A]' : 'bg-[#FFFDFC]'
        }`}
      >
        <img
          src={project.image}
          alt={project.alt || project.title}
          loading="lazy"
          className="w-full h-auto block object-cover object-top select-none"
        />
      </div>
    </motion.div>
  )

  if (hasLiveDemo) {
    return (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} live demo`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624A] rounded-xl sm:rounded-2xl"
      >
        {cardContent}
      </a>
    )
  }

  return cardContent
}
