export default function ProjectTags({ technologies = [], isDark = false }) {
  if (!technologies || technologies.length === 0) return null

  return (
    <div className="flex flex-wrap items-center gap-2 my-4" aria-label="Technologies used">
      {technologies.map((tech) => (
        <span
          key={tech}
          className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-medium tracking-wide select-none transition-colors duration-150 ${
            isDark
              ? 'bg-[#181D28] text-[#D1D5DB] border border-[#2B3342]'
              : 'bg-[#EFEAE1] text-[#101722] border border-[#DDD8CF]'
          }`}
        >
          {tech}
        </span>
      ))}
    </div>
  )
}
