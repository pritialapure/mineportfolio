import { Award } from 'lucide-react'
import { achievements } from '../data/achievements.js'
import { useReveal } from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'

export default function Achievements() {
  const ref = useReveal()

  return (
    <section id="achievements" className="section-pad scroll-mt-16">
      <div className="container" ref={ref}>
        <SectionHeading kicker="Achievements" title="Achievements & certifications" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <div
              key={a.id}
              className="reveal flex gap-4 rounded-lg border border-edge bg-surface p-6"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-surface2 text-accent">
                <Award size={16} />
              </span>
              <div>
                <h3 className="font-medium leading-snug text-ink">{a.title}</h3>
                {a.detail && (
                  <p className="mt-1 text-sm text-muted">{a.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
