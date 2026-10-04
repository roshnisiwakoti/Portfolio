export default function SkillCategoryNav({
  categories,
  activeCategoryId,
  onSelectCategory,
}) {
  return (
    <nav
      className="flex lg:flex-col gap-1.5 sm:gap-2 overflow-x-auto lg:overflow-visible pb-2.5 lg:pb-0 scrollbar-none select-none w-full"
      aria-label="Skill categories"
      role="tablist"
    >
      {categories.map((cat) => {
        const IconComponent = cat.icon
        const isActive = activeCategoryId === cat.id

        return (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`skill-panel-${cat.id}`}
            id={`skill-tab-${cat.id}`}
            onClick={() => onSelectCategory(cat.id)}
            className={`group flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-left transition-all duration-200 shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF624A] focus-visible:ring-offset-1 ${
              isActive
                ? 'bg-[#FFFDFC] text-[#101722] border border-[#FF624A] shadow-[0_2px_8px_rgba(255,98,74,0.08)] lg:translate-x-1.5 font-semibold'
                : 'text-[#667085] hover:text-[#101722] hover:bg-[#EFEAE1]/70 bg-transparent font-medium border border-transparent hover:border-[#DDD8CF]/70'
            }`}
          >
            {/* Category Icon */}
            <span
              className={`p-1 rounded-md transition-colors duration-200 ${
                isActive
                  ? 'text-[#FF624A] bg-[#FF624A]/10'
                  : 'text-[#8B9098] group-hover:text-[#101722]'
              }`}
            >
              <IconComponent size={15} />
            </span>

            {/* Label */}
            <span className="text-xs sm:text-sm font-sans tracking-tight whitespace-nowrap">
              {cat.label}
            </span>

            {/* Subtle Active Indicator Dot on Desktop */}
            <span
              className={`ml-auto w-1.5 h-1.5 rounded-full transition-all duration-200 hidden lg:inline-block ${
                isActive ? 'bg-[#FF624A] opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}
