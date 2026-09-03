import { journey } from '../data/journey.js'
import { useReveal } from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'

export default function Journey() {
  const ref = useReveal()

  return (
    <section id="journey" className="section-pad scroll-mt-16 bg-surface/40">
      <div className="container" ref={ref}>
        <SectionHeading
          kicker="Journey"
          title="Development journey"
          description="No formal job titles yet — this is the order in which the skills came together, project by project."
        />

        <ol className="relative max-w-2xl border-l border-edge pl-8">
          {journey.map((step, i) => (
            <li key={step.id} className="reveal mb-10 last:mb-0">
              <span className="absolute -left-[9px] mt-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-accent bg-bg font-mono text-[9px] text-accent" />
              <p className="font-mono text-xs text-muted">{`0${i + 1}`}</p>
              <h3 className="mt-1 font-medium text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
