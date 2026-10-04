import SectionHeading from '../components/SectionHeading'
import { motion, useReducedMotion } from 'framer-motion'

const timelineItems = [
  {
    phase: '01',
    label: 'FOUNDATIONS',
    title: 'Curiosity & Web Architecture',
    description:
      'Began with a curiosity about how the web works at scale. Learned core computing principles, HTTP protocols, responsive layout engines, and modern JavaScript, discovering how interface design interfaces directly with system state.',
  },
  {
    phase: '02',
    label: 'BACKEND & DATA',
    title: 'Server Frameworks & Relational Schemas',
    description:
      'Expanded into structured backend development with ASP.NET Core, C#, and Django. Designed normalized schemas in PostgreSQL and MySQL, building secure RESTful APIs with transaction management and data validation.',
  },
  {
    phase: '03',
    label: 'REAL-TIME PROTOCOLS',
    title: 'Architecting MovieSync for Synchronous Video',
    description:
      'Engineered MovieSync to solve real-time multimedia synchronization. Implemented SignalR websocket hubs for sub-second event distribution and WebRTC data channels for peer-to-peer communication.',
  },
  {
    phase: '04',
    label: 'PRODUCT DELIVERY',
    title: 'Building & Deploying Udyamly',
    description:
      'Designed and deployed an end-to-end digital storefront platform to empower local businesses. Balanced technical architecture with intuitive administration flows to deliver real-world utility.',
  },
  {
    phase: '05',
    label: 'OPERATIONAL SYSTEMS',
    title: 'Inventory & Data Integrity Suite',
    description:
      'Built a full-stack inventory management system focused on transactional reliability, stock auditing, and reporting dashboards for data-heavy operations.',
  },
  {
    phase: '06',
    label: 'CURRENT HORIZON',
    title: 'Continuous Refinement & Production Practices',
    description:
      'Focused on high-performance React architectures, system observability, resilient state machines, and writing clean, maintainable software for real-world impact.',
  },
]

export default function Journey() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="experience" className="py-20 sm:py-24 relative z-10 border-t border-[#DDD8CF] scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
        <SectionHeading
          number="04"
          title="JOURNEY"
          tagline="Evolution & Milestones."
          description="A chronological timeline of technical exploration, projects shipped, and continuous engineering improvement."
        />

        {/* Minimal Editorial Timeline */}
        <div className="max-w-4xl mx-auto relative pl-4 sm:pl-8 border-l border-[#DDD8CF]">
          <div className="space-y-10 sm:space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Minimal Timeline Bullet */}
                <div className="absolute -left-[21px] sm:-left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#FFFDFC] border-2 border-[#101722] group-hover:border-[#FF624A] transition-colors" />

                {/* Entry Header */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-semibold text-[#FF624A]">
                    {item.phase}
                  </span>
                  <span className="text-[#DDD8CF]">•</span>
                  <span className="text-[11px] font-mono tracking-wider text-[#8B9098] uppercase">
                    {item.label}
                  </span>
                </div>

                {/* Entry Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#101722] mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Entry Description */}
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
