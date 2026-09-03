import { useReveal } from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'

const points = [
  'Computer Science Engineering student targeting software development opportunities.',
  'Interests span Full Stack Development, Data Structures & Algorithms, AI/GenAI, and AI automation workflows.',
  'Hands-on experience building React and MERN-style applications, REST APIs, authentication systems, RAG applications, and AI-assisted projects.',
]

const focusAreas = ['Full Stack', 'Backend Systems', 'GenAI / RAG', 'DSA']

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section-pad scroll-mt-16">
      <div className="container" ref={ref}>
        <SectionHeading
          kicker="About"
          title="Building software with intent, not just syntax"
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal space-y-5 leading-relaxed text-muted">
            {points.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="reveal rounded-lg border border-edge bg-surface p-7">
            <p className="font-mono text-xs text-accent">Currently focused on</p>
            <ul className="mt-4 space-y-3">
              {focusAreas.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 border-b border-edge/70 pb-3 text-sm text-ink last:border-none last:pb-0"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
