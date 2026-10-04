import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './Icons'
import ProjectTags from './ProjectTags'
import ProjectPreview from './ProjectPreview'

export default function ProjectShowcase({ project, index }) {
  const shouldReduceMotion = useReducedMotion()

  // MovieSync is specifically index 1 (or id === 'moviesync') -> Dark Feature Block!
  const isDark = project.id === 'moviesync'

  // Alternating composition:
  // 01 Udyamly: Info Left (5 cols), Visual Right (7 cols)
  // 02 MovieSync: Visual Left (7 cols), Info Right (5 cols)
  // 03 Inventory: Info Left (5 cols), Visual Right (7 cols)
  const isReversed = index % 2 === 1

  const hasLive = Boolean(project.live && project.live.trim() !== '')
  const hasGithub = Boolean(project.github && project.github.trim() !== '')

  return (
    <article
      className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 my-6 transition-all duration-300 ${
        isDark
          ? 'bg-[#10141C] text-[#F8F7F3] border border-[#222938] shadow-2xl'
          : 'bg-[#FFFDFC] text-[#101722] border border-[#DDD8CF] shadow-[0_2px_12px_rgba(16,23,34,0.03)]'
      }`}
      aria-labelledby={`project-heading-${project.id}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
        {/* INFORMATION COLUMN */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`flex flex-col items-start ${
            isReversed
              ? 'lg:col-span-5 lg:order-2'
              : 'lg:col-span-5 lg:order-1'
          }`}
        >
          {/* Project Number */}
          <span
            className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight select-none mb-1 leading-none ${
              isDark ? 'text-white/20' : 'text-[#101722]/15'
            }`}
            aria-hidden="true"
          >
            {project.number}
          </span>

          {/* Project Category */}
          <div className="inline-flex items-center gap-2 mb-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: isDark
                  ? '#E50914' /* MovieSync signature red */
                  : project.id === 'udyamly'
                  ? '#10B981' /* Udyamly emerald */
                  : '#2563EB', /* Inventory cobalt */
              }}
            />
            <span
              className={`text-[11px] font-mono uppercase tracking-[0.2em] ${
                isDark ? 'text-[#A6ABB4]' : 'text-[#667085]'
              }`}
            >
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3
            id={`project-heading-${project.id}`}
            className={`font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight mb-3 leading-[1.16] ${
              isDark ? 'text-[#F8F7F3]' : 'text-[#101722]'
            }`}
          >
            {project.title}
          </h3>

          {/* Project Description */}
          <p
            className={`text-sm leading-relaxed max-w-lg mb-2 ${
              isDark ? 'text-[#A6ABB4]' : 'text-[#667085]'
            }`}
          >
            {project.description}
          </p>

          {/* Technology Tags */}
          <ProjectTags technologies={project.technologies} isDark={isDark} />

          {/* Action Buttons on Desktop */}
          <div className="hidden lg:flex items-center gap-3 mt-3">
            {hasLive ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 shadow-xs ${
                  isDark
                    ? 'text-white bg-[#E50914] hover:bg-[#CC0813]'
                    : 'text-white bg-[#FF624A] hover:bg-[#EA4E38]'
                }`}
                aria-label={`View ${project.title} live demo`}
              >
                <span>Live Demo</span>
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                title={`${project.title} live demo coming soon`}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-not-allowed select-none border opacity-75 ${
                  isDark
                    ? 'bg-[#181D28]/60 text-[#A6ABB4] border-[#2B3342]/70'
                    : 'bg-[#EFEAE1]/60 text-[#8B9098] border-[#DDD8CF]/80'
                }`}
              >
                <span>Live Demo — Soon</span>
              </button>
            )}

            {hasGithub ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium border transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 shadow-xs ${
                  isDark
                    ? 'text-[#F8F7F3] bg-[#181D28] border-[#2B3342] hover:border-[#F8F7F3]'
                    : 'text-[#101722] bg-[#FFFDFC] border-[#DDD8CF] hover:border-[#101722]'
                }`}
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon size={13} />
                <span>GitHub</span>
                <ArrowUpRight size={12} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                title={`${project.title} repository coming soon`}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-not-allowed select-none border opacity-75 ${
                  isDark
                    ? 'bg-[#181D28]/60 text-[#A6ABB4] border-[#2B3342]/70'
                    : 'bg-[#EFEAE1]/60 text-[#8B9098] border-[#DDD8CF]/80'
                }`}
              >
                <GithubIcon size={12} className="opacity-50" />
                <span>GitHub — Soon</span>
              </button>
            )}
          </div>
        </motion.div>

        {/* VISUAL COLUMN (Large Screenshot Frame, 7 cols) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className={`w-full ${
            isReversed
              ? 'lg:col-span-7 lg:order-1'
              : 'lg:col-span-7 lg:order-2'
          }`}
        >
          <ProjectPreview project={project} isDark={isDark} />

          {/* Action Links on Mobile */}
          <div className="flex lg:hidden items-center gap-2.5 mt-4">
            {hasLive ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold ${
                  isDark
                    ? 'text-white bg-[#E50914]'
                    : 'text-white bg-[#FF624A]'
                }`}
                aria-label={`View ${project.title} live demo`}
              >
                <span>Live Demo</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                title={`${project.title} live demo coming soon`}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border opacity-75 cursor-not-allowed select-none ${
                  isDark
                    ? 'bg-[#181D28]/60 text-[#A6ABB4] border-[#2B3342]/70'
                    : 'bg-[#EFEAE1]/60 text-[#8B9098] border-[#DDD8CF]/80'
                }`}
              >
                <span>Live Demo — Soon</span>
              </button>
            )}

            {hasGithub ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  isDark
                    ? 'text-[#F8F7F3] bg-[#181D28] border-[#2B3342]'
                    : 'text-[#101722] bg-[#FFFDFC] border-[#DDD8CF]'
                }`}
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon size={12} />
                <span>GitHub</span>
                <ArrowUpRight size={11} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                title={`${project.title} repository coming soon`}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border opacity-75 cursor-not-allowed select-none ${
                  isDark
                    ? 'bg-[#181D28]/60 text-[#A6ABB4] border-[#2B3342]/70'
                    : 'bg-[#EFEAE1]/60 text-[#8B9098] border-[#DDD8CF]/80'
                }`}
              >
                <GithubIcon size={12} className="opacity-50" />
                <span>GitHub — Soon</span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </article>
  )
}
