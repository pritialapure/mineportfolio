import * as Icons from 'lucide-react'
import { profiles } from '../data/profiles.js'
import { useReveal } from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'

export default function Profiles() {
  const ref = useReveal()

  return (
    <section id="profiles" className="section-pad scroll-mt-16 bg-surface/40">
      <div className="container" ref={ref}>
        <SectionHeading
          kicker="Profiles"
          title="Coding & professional profiles"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((p) => {
            const Icon = Icons[p.icon] || Icons.Link
            const content = (
              <>
                <span className="grid h-11 w-11 place-items-center rounded-md bg-surface2 text-accent">
                  <Icon size={20} />
                </span>
                <span className="mt-4 block font-medium text-ink">{p.label}</span>
                <span className="mt-1 block text-xs text-muted">
                  {p.url ? 'View profile' : 'Link pending'}
                </span>
              </>
            )

            return p.url ? (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="reveal rounded-lg border border-edge bg-surface p-6 transition-colors hover:border-accent/60"
              >
                {content}
              </a>
            ) : (
              <div
                key={p.id}
                className="reveal rounded-lg border border-dashed border-edge bg-surface/60 p-6 opacity-70"
              >
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
