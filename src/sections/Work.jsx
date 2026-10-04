import SectionHeading from '../components/SectionHeading'
import ProjectShowcase from '../components/ProjectShowcase'
import { projects } from '../data/projects'

export default function Work() {
  return (
    <section id="projects" className="py-20 sm:py-24 relative z-10 border-t border-[#DDD8CF] scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
        <SectionHeading
          number="01"
          title="FEATURED WORK"
          tagline="Selected Projects."
          description="A selection of web applications and real-time systems built with modern architecture and thoughtful engineering."
        />

        {/* Project Showcase Blocks */}
        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
