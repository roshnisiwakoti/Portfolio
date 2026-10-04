import { motion, useReducedMotion } from 'framer-motion'

export default function SkillVisualLayers({
  activeCategoryId,
  mouseOffset = { x: 0, y: 0 },
}) {
  const shouldReduceMotion = useReducedMotion()

  // Desktop parallax offset (capped strictly at 6-8px)
  const px = shouldReduceMotion ? 0 : mouseOffset.x * 7
  const py = shouldReduceMotion ? 0 : mouseOffset.y * 7

  // Determine which panel is emphasized based on the active category
  const isFrontend = activeCategoryId === 'frontend'
  const isBackend = activeCategoryId === 'backend'
  const isDatabases = activeCategoryId === 'databases'
  const isRealTime = activeCategoryId === 'real-time'
  const isTools = activeCategoryId === 'tools'
  const isPrinciples = activeCategoryId === 'principles'

  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] lg:min-h-[460px] flex items-center justify-center select-none overflow-visible">
      {/* DESKTOP LAYERED ASYMMETRICAL COMPOSITION */}
      <div
        className="hidden md:block relative w-full max-w-[480px] h-[380px] lg:h-[420px] transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${px}px, ${py}px, 0)`,
        }}
      >
        {/* LAYER 1: UDYAMLY (Interface / Web App) */}
        <motion.div
          animate={{
            zIndex: isFrontend ? 30 : 10,
            scale: isFrontend ? 1.02 : 0.96,
            opacity: isPrinciples ? 0.35 : isFrontend ? 1 : 0.65,
            x: isFrontend ? 0 : -20,
            y: isFrontend ? 0 : -25,
            rotate: isFrontend ? -1 : -3,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-2 left-2 w-[85%] rounded-xl sm:rounded-2xl border border-[#DDD8CF] bg-[#FFFDFC] shadow-[0_8px_30px_rgba(16,23,34,0.06)] overflow-hidden"
        >
          {/* Chrome header */}
          <div className="h-6 px-3 bg-[#EFEAE1] border-b border-[#DDD8CF] flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DDD8CF]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#DDD8CF]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#DDD8CF]" />
            </div>
            <span className="text-[9px] font-mono tracking-widest text-[#8B9098] uppercase">
              Udyamly // Web App
            </span>
          </div>
          <div className="h-44 sm:h-52 overflow-hidden bg-[#FFFDFC]">
            <img
              src="/projects/udyamly.png"
              alt="Udyamly storefront interface"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* LAYER 2: INVENTORY (Data & Dashboard) */}
        <motion.div
          animate={{
            zIndex: isDatabases ? 30 : isBackend ? 25 : 15,
            scale: isDatabases ? 1.02 : 0.97,
            opacity: isPrinciples ? 0.35 : isDatabases ? 1 : 0.7,
            x: isDatabases ? 10 : 25,
            y: isDatabases ? 10 : 20,
            rotate: isDatabases ? 1 : 2,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-12 left-10 w-[85%] rounded-xl sm:rounded-2xl border border-[#DDD8CF] bg-[#FFFDFC] shadow-[0_12px_32px_rgba(16,23,34,0.08)] overflow-hidden"
        >
          <div className="h-6 px-3 bg-[#EFEAE1] border-b border-[#DDD8CF] flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DDD8CF]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#DDD8CF]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#DDD8CF]" />
            </div>
            <span className="text-[9px] font-mono tracking-widest text-[#8B9098] uppercase">
              Inventory // Schemas & Metrics
            </span>
          </div>
          <div className="h-44 sm:h-52 overflow-hidden bg-[#FFFDFC]">
            <img
              src="/projects/inventory.png"
              alt="Inventory management system dashboard"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* LAYER 3: MOVIESYNC (Real-Time Watch Party) */}
        <motion.div
          animate={{
            zIndex: isRealTime ? 30 : 20,
            scale: isRealTime ? 1.02 : 0.97,
            opacity: isPrinciples ? 0.35 : isRealTime ? 1 : 0.75,
            x: isRealTime ? 0 : 45,
            y: isRealTime ? 0 : 55,
            rotate: isRealTime ? -0.5 : -1.5,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-20 left-16 w-[85%] rounded-xl sm:rounded-2xl border border-[#2B3342] bg-[#10141C] shadow-[0_16px_36px_rgba(0,0,0,0.25)] overflow-hidden"
        >
          <div className="h-6 px-3 bg-[#161B24] border-b border-[#2B3342] flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#374151]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#374151]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#374151]" />
            </div>
            <span className="text-[9px] font-mono tracking-widest text-[#A6ABB4] uppercase">
              MovieSync // Real-Time Hub
            </span>
          </div>
          <div className="h-44 sm:h-52 overflow-hidden bg-[#0E121A]">
            <img
              src="/projects/moviesync.png"
              alt="MovieSync synchronized streaming platform"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* BACKEND OVERLAY: Subtle Architecture & Schema Schematic Lines */}
        {isBackend && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-35 pointer-events-none rounded-2xl flex items-center justify-center p-6"
          >
            <div className="bg-[#FFFDFC]/95 backdrop-blur-xs border border-[#DDD8CF] rounded-xl p-4 shadow-lg w-full max-w-[340px]">
              <div className="flex items-center justify-between pb-2 border-b border-[#DDD8CF]/80 mb-2.5">
                <span className="text-[10px] font-mono tracking-wider text-[#FF624A] font-semibold uppercase">
                  API & Server Architecture
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF624A]" />
              </div>
              <div className="font-mono text-[11px] text-[#101722] space-y-1">
                <div className="flex justify-between text-[#667085]">
                  <span>HTTP Controllers</span>
                  <span className="text-emerald-700">RESTful</span>
                </div>
                <div className="flex justify-between text-[#667085]">
                  <span>Business Domain</span>
                  <span className="text-[#101722]">ASP.NET Core</span>
                </div>
                <div className="flex justify-between text-[#667085]">
                  <span>Persistence</span>
                  <span className="text-[#2563EB]">PostgreSQL / MySQL</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* PRINCIPLES OVERLAY: Architectural Line Diagram Motif */}
        {isPrinciples && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-35 pointer-events-none rounded-2xl flex items-center justify-center p-6"
          >
            <div className="bg-[#FFFDFC]/96 backdrop-blur-xs border border-[#101722] rounded-xl p-5 shadow-lg w-full max-w-[340px]">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#DDD8CF] mb-3">
                <span className="text-[10px] font-mono tracking-widest text-[#8B9098] uppercase">
                  Core Engineering Values
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF624A]" />
              </div>
              <ul className="font-mono text-xs text-[#101722] space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#FF624A]">•</span>
                  <span>Clarity over cleverness</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF624A]">•</span>
                  <span>Strict boundaries between data and UI</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF624A]">•</span>
                  <span>Predictable state & clean recovery</span>
                </li>
              </ul>
            </div>
          </motion.div>
        )}

        {/* TOOLS OVERLAY: Subtle Command / Environment Identifier */}
        {isTools && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-2 right-4 z-35 bg-[#101722] text-[#FFFDFC] text-[10px] font-mono px-3 py-1.5 rounded-lg shadow-md border border-[#2B3342] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>git • npm • render • cli</span>
          </motion.div>
        )}
      </div>

      {/* MOBILE CLEAN PREVIEW (Single focused visual, zero horizontal overflow) */}
      <div className="block md:hidden w-full mt-4">
        <div className="rounded-xl border border-[#DDD8CF] bg-[#FFFDFC] shadow-xs overflow-hidden">
          <div className="h-6 px-3 bg-[#EFEAE1] border-b border-[#DDD8CF] flex items-center justify-between">
            <span className="text-[9px] font-mono tracking-widest text-[#8B9098] uppercase">
              {isRealTime
                ? 'MovieSync Real-Time Hub'
                : isDatabases
                ? 'Inventory System Data'
                : 'Interface Architecture'}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF624A]" />
          </div>
          <div className="h-40 overflow-hidden bg-[#FFFDFC]">
            <img
              src={
                isRealTime
                  ? '/projects/moviesync.png'
                  : isDatabases
                  ? '/projects/inventory.png'
                  : '/projects/udyamly.png'
              }
              alt="Project engineering demonstration"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
