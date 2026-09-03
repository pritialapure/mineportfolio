import { useState } from 'react'
import { projects } from '../data/projects.js'
import { useReveal } from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'

export default function Projects() {
  const ref = useReveal()
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="section-pad scroll-mt-16">
      <div className="container" ref={ref}>
        <SectionHeading
          kicker="Projects"
          title="Featured work"
          description="A mix of full-stack builds, backend architecture, and applied GenAI — each one grounded in a real problem."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActive} />
          ))}
        </div>
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
