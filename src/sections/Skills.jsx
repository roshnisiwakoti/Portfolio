import { useState, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import SkillCategoryNav from '../components/SkillCategoryNav'
import SkillDetailCard from '../components/SkillDetailCard'
import SkillVisualLayers from '../components/SkillVisualLayers'
import { skillCategories } from '../data/skills'

export default function Skills() {
  const shouldReduceMotion = useReducedMotion()
  const [activeCategoryId, setActiveCategoryId] = useState('frontend')
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

    setMouseOffset({
      x: Math.max(-1, Math.min(1, rawX)),
      y: Math.max(-1, Math.min(1, rawY)),
    })
  }

  // Previous & Next navigation controls
  const handlePrevCategory = () => {
    const currentIndex = skillCategories.findIndex((c) => c.id === activeCategoryId)
    const prevIndex = (currentIndex - 1 + skillCategories.length) % skillCategories.length
    setActiveCategoryId(skillCategories[prevIndex].id)
  }

  const handleNextCategory = () => {
    const currentIndex = skillCategories.findIndex((c) => c.id === activeCategoryId)
    const nextIndex = (currentIndex + 1) % skillCategories.length
    setActiveCategoryId(skillCategories[nextIndex].id)
  }

  const activeCategory =
    skillCategories.find((c) => c.id === activeCategoryId) || skillCategories[0]

  return (
    <section
      id="skills"
      onMouseMove={handleMouseMove}
      className="py-20 sm:py-24 relative z-10 border-t border-[#DDD8CF] scroll-mt-20 sm:scroll-mt-24 overflow-hidden"
    >
      {/* Background Architectural Accents (Low opacity) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-12 left-10 text-[9px] font-mono tracking-widest text-[#8B9098]/30 uppercase hidden md:block">
          ARCH.SYSTEMS // 04.METRICS
        </div>
        <div className="absolute top-1/3 -right-12 w-48 h-48 bg-tech-grid opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 relative">
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <SectionHeading
              number="04"
              title="SKILLS"
              tagline="Technical Depth & Architecture."
              description="Explore the technologies, tools and engineering areas I work with. Select a category to see the stack behind my projects."
            />
          </div>

          {/* Secondary Previous / Next Arrow Controls (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center gap-2 mb-12 sm:mb-16 shrink-0">
            <button
              type="button"
              onClick={handlePrevCategory}
              aria-label="Previous skill category"
              title="Previous category"
              className="w-8 h-8 rounded-lg border border-[#DDD8CF] bg-[#FFFDFC] hover:border-[#101722] hover:bg-white text-[#667085] hover:text-[#101722] flex items-center justify-center transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624A] active:scale-95 cursor-pointer shadow-xs"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              type="button"
              onClick={handleNextCategory}
              aria-label="Next skill category"
              title="Next category"
              className="w-8 h-8 rounded-lg border border-[#DDD8CF] bg-[#FFFDFC] hover:border-[#101722] hover:bg-white text-[#667085] hover:text-[#101722] flex items-center justify-center transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624A] active:scale-95 cursor-pointer shadow-xs"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* THREE-PART ASYMMETRICAL COMPOSITION (Style C — Interactive Visual Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Part 1: Vertical (Desktop) / Horizontal (Mobile/Tablet) Category Navigation */}
          <div className="lg:col-span-3 xl:col-span-3 w-full">
            <SkillCategoryNav
              categories={skillCategories}
              activeCategoryId={activeCategoryId}
              onSelectCategory={setActiveCategoryId}
            />
          </div>

          {/* Part 2: Prominent Interactive Detail Card */}
          <div className="lg:col-span-5 xl:col-span-5 w-full relative z-20">
            <SkillDetailCard
              category={activeCategory}
              totalCategories={skillCategories.length}
            />
          </div>

          {/* Part 3: Layered Visual Project Panels & Architecture Schematics */}
          <div className="lg:col-span-4 xl:col-span-4 w-full relative z-10">
            <SkillVisualLayers
              activeCategoryId={activeCategoryId}
              mouseOffset={mouseOffset}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
