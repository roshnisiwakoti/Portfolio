import { motion, useReducedMotion } from 'framer-motion'

export default function SectionHeading({
  number,
  title,
  tagline,
  description,
  align = 'left',
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 sm:mb-16 ${
        align === 'center' ? 'text-center mx-auto' : 'text-left'
      }`}
    >
      {/* Eyebrow badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFEAE1] border border-[#DDD8CF] text-xs font-mono tracking-widest text-[#667085] mb-3 select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF624A]" />
        <span>
          {number} / {title}
        </span>
      </div>

      {/* Main Editorial Tagline */}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#101722] leading-[1.14] max-w-3xl mb-3">
        {tagline}
      </h2>

      {/* Supporting Description */}
      {description && (
        <p className="text-sm sm:text-base text-[#667085] leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </motion.div>
  )
}
