import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Globe, Layers, Network, Activity, Smartphone, Database } from 'lucide-react'

// All 6 technology nodes distributed around ROSHNI with their technical details
const nodes = [
  {
    id: 'web-apps',
    label: 'Web Apps',
    detail: 'HTML • CSS • JavaScript • React',
    icon: Globe,
    accentColor: '#FF624A',
    left: '16%',
    top: '18%',
    svgX: 85,
    svgY: 90,
    floatDuration: 5.5,
    floatDelay: 0,
  },
  {
    id: 'saas',
    label: 'SaaS',
    detail: 'ASP.NET Core • Django',
    icon: Layers,
    accentColor: '#2563EB',
    left: '78%',
    top: '18%',
    svgX: 390,
    svgY: 90,
    floatDuration: 6.0,
    floatDelay: 0.3,
  },
  {
    id: 'apis',
    label: 'APIs',
    detail: 'REST APIs • ASP.NET Core',
    icon: Network,
    accentColor: '#FF624A',
    left: '84%',
    top: '52%',
    svgX: 420,
    svgY: 260,
    floatDuration: 5.0,
    floatDelay: 0.6,
  },
  {
    id: 'real-time',
    label: 'Real-Time',
    detail: 'SignalR • WebRTC',
    icon: Activity,
    accentColor: '#2563EB',
    left: '76%',
    top: '82%',
    svgX: 380,
    svgY: 410,
    floatDuration: 5.8,
    floatDelay: 0.9,
  },
  {
    id: 'mobile-apps',
    label: 'Mobile Apps',
    detail: 'React Native',
    icon: Smartphone,
    accentColor: '#FF624A',
    left: '38%',
    top: '88%',
    svgX: 190,
    svgY: 440,
    floatDuration: 6.2,
    floatDelay: 0.5,
  },
  {
    id: 'databases',
    label: 'Databases',
    detail: 'PostgreSQL • MySQL',
    icon: Database,
    accentColor: '#2563EB',
    left: '16%',
    top: '54%',
    svgX: 80,
    svgY: 270,
    floatDuration: 5.2,
    floatDelay: 0.8,
  },
]

export default function OrbitalNetwork({ mouseOffset = { x: 0, y: 0 } }) {
  const shouldReduceMotion = useReducedMotion()
  const [hoveredNode, setHoveredNode] = useState(null)
  const [focusedNode, setFocusedNode] = useState(null)
  const [selectedNode, setSelectedNode] = useState(null)

  // Controlled, subtle parallax (2px - 8px max)
  const orbitParallaxX = shouldReduceMotion ? 0 : mouseOffset.x * 4
  const orbitParallaxY = shouldReduceMotion ? 0 : mouseOffset.y * 4

  const nodeParallaxX = shouldReduceMotion ? 0 : mouseOffset.x * 6
  const nodeParallaxY = shouldReduceMotion ? 0 : mouseOffset.y * 6

  const isNodeActive = (id) => hoveredNode === id || focusedNode === id || selectedNode === id

  const handleNodeClick = (nodeId) => {
    setSelectedNode((prev) => (prev === nodeId ? null : nodeId))
  }

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[520px] xl:max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none overflow-visible">
      {/* SVG TECHNICAL ORBITS & CONNECTORS */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${orbitParallaxX}px, ${orbitParallaxY}px)`,
        }}
      >
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 500 500"
          fill="none"
        >
          {/* ORBIT RING 1 (Inner): Faint crisp stroke */}
          <ellipse
            cx="250"
            cy="250"
            rx="125"
            ry="95"
            transform="rotate(-15 250 250)"
            stroke="#DDD8CF"
            strokeWidth="1"
          />

          {/* ORBIT RING 2 (Middle): Technical dashed path */}
          <ellipse
            cx="250"
            cy="250"
            rx="185"
            ry="145"
            transform="rotate(20 250 250)"
            stroke="#DDD8CF"
            strokeWidth="1"
            strokeDasharray="3 5"
          />

          {/* ORBIT RING 3 (Outer): Very faint dashed ellipse */}
          <ellipse
            cx="250"
            cy="250"
            rx="230"
            ry="180"
            transform="rotate(-25 250 250)"
            stroke="#DDD8CF"
            strokeWidth="1"
            strokeDasharray="4 8"
            strokeOpacity="0.7"
          />

          {/* CONNECTING TECHNICAL LINES FROM CENTER (250, 250) TO ALL 6 NODES */}
          {nodes.map((node) => {
            const isLineActive = isNodeActive(node.id)
            return (
              <g key={`line-${node.id}`}>
                <line
                  x1="250"
                  y1="250"
                  x2={node.svgX}
                  y2={node.svgY}
                  stroke={isLineActive ? node.accentColor : '#DDD8CF'}
                  strokeWidth={isLineActive ? 1.5 : 1}
                  strokeDasharray={isLineActive ? 'none' : '2 4'}
                  className="transition-all duration-200"
                />
                <circle
                  cx={node.svgX}
                  cy={node.svgY}
                  r={isLineActive ? 2.5 : 1.5}
                  fill={isLineActive ? node.accentColor : '#8B9098'}
                  className="transition-colors duration-200"
                />
              </g>
            )
          })}

          {/* Minimal technical coordinate points */}
          <circle cx="150" cy="170" r="1" fill="#8B9098" opacity="0.5" />
          <circle cx="360" cy="190" r="1" fill="#8B9098" opacity="0.5" />
          <circle cx="330" cy="340" r="1" fill="#8B9098" opacity="0.5" />
          <circle cx="180" cy="340" r="1" fill="#8B9098" opacity="0.5" />
        </svg>
      </div>

      {/* CENTRAL NODE: ROSHNI (Always in center) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center cursor-default"
        style={{
          transform: `translate(calc(-50% + ${nodeParallaxX * 0.7}px), calc(-50% + ${nodeParallaxY * 0.7}px))`,
        }}
      >
        {/* Thin coral outer ring with subtle pulse */}
        <div
          className="absolute w-24 h-24 sm:w-26 sm:h-26 rounded-full border border-[#FF624A]/25 animate-pulse pointer-events-none"
        />

        {/* Outer neutral hairline ring */}
        <div
          className="absolute w-21 h-21 sm:w-23 sm:h-23 rounded-full border border-[#DDD8CF] pointer-events-none"
        />

        {/* Central Core Circle (Clean Warm White + Deep Ink) */}
        <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full p-[1px] bg-[#DDD8CF] shadow-[0_2px_8px_rgba(16,23,34,0.06)]">
          <div className="w-full h-full rounded-full bg-[#FFFDFC] flex flex-col items-center justify-center p-2 relative overflow-hidden">
            {/* Tiny coral core dot with subtle pulse */}
            <div className="relative flex items-center justify-center mb-1">
              <span className="w-2 h-2 rounded-full bg-[#FF624A]" />
              <span className="absolute w-3 h-3 rounded-full bg-[#FF624A]/25 animate-ping opacity-60" />
            </div>

            {/* Central Node Label: ROSHNI */}
            <span className="text-[11px] sm:text-xs font-serif font-bold tracking-[0.16em] text-[#101722] leading-none">
              ROSHNI
            </span>
            <span className="text-[8px] font-mono text-[#8B9098] tracking-widest mt-0.5">
              DEV
            </span>
          </div>
        </div>
      </div>

      {/* ALL 6 TECHNOLOGY NODES SIMULTANEOUSLY VISIBLE */}
      {nodes.map((node) => {
        const IconComponent = node.icon
        const isActive = isNodeActive(node.id)

        return (
          <div
            key={node.id}
            className="absolute z-30 pointer-events-auto"
            style={{
              left: node.left,
              top: node.top,
              transform: `translate(calc(-50% + ${nodeParallaxX}px), calc(-50% + ${nodeParallaxY}px))`,
            }}
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -3, 0],
                      x: [0, 1.5, 0],
                    }
              }
              transition={
                shouldReduceMotion
                  ? {}
                  : {
                      duration: node.floatDuration,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: node.floatDelay,
                    }
              }
              whileHover={{ scale: 1.04 }}
            >
              {/* Technical Node Button with Architectural Radius (10-12px) */}
              <button
                type="button"
                aria-expanded={isActive}
                aria-label={`${node.label}: ${node.detail}`}
                onClick={() => handleNodeClick(node.id)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setFocusedNode(node.id)}
                onBlur={() => setFocusedNode(null)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setSelectedNode(null)
                    setFocusedNode(null)
                  }
                }}
                className={`group relative flex flex-col rounded-xl bg-[#FFFDFC] border transition-all duration-200 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624A] focus-visible:ring-offset-1 cursor-pointer shadow-[0_1px_4px_rgba(16,23,34,0.04)] ${
                  isActive
                    ? 'border-[#101722] shadow-[0_4px_16px_rgba(16,23,34,0.08)] bg-white'
                    : 'border-[#DDD8CF] hover:border-[#8B9098]'
                } px-2.5 py-1.5 sm:px-3 sm:py-1.5`}
              >
                {/* Node Top Row: Dot + Icon + Title */}
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  {/* Micro Status Dot */}
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: node.accentColor }}
                  />

                  {/* Icon */}
                  <IconComponent
                    size={12}
                    className={`transition-colors duration-150 ${
                      isActive ? 'text-[#101722]' : 'text-[#667085]'
                    }`}
                  />

                  {/* Label */}
                  <span className="text-[11px] sm:text-xs font-semibold text-[#101722] tracking-tight">
                    {node.label}
                  </span>
                </div>

                {/* Informative Sub-Detail (Discovered on hover / focus / mobile tap) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.15 }}
                      className="overflow-hidden pt-1 mt-0.5 border-t border-[#DDD8CF]/80"
                    >
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#667085] tracking-tight whitespace-nowrap block">
                        {node.detail}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}
