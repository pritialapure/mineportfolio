import { skillCategories } from '../data/skills.js'
import { useReveal } from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'
import SkillCategory from './SkillCategory.jsx'

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="section-pad scroll-mt-16 bg-surface/40">
      <div className="container" ref={ref}>
        <SectionHeading
          kicker="Skills"
          title="Tools I can defend in an interview"
          description="Technologies I've actually used and can speak to in depth — grouped by where they fit in the stack."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <SkillCategory key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
