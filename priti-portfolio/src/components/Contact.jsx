import { Mail, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/config.js'
import { profiles } from '../data/profiles.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Contact() {
  const ref = useReveal()
  const github = profiles.find((p) => p.id === 'github')
  const linkedin = profiles.find((p) => p.id === 'linkedin')

  return (
    <section id="contact" className="section-pad scroll-mt-16">
      <div className="container" ref={ref}>
        <div className="reveal mx-auto max-w-xl rounded-lg border border-edge bg-surface p-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            Let&apos;s build something
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-muted">
            Open to software engineering, full-stack, and GenAI opportunities —
            reach out if there&apos;s a fit.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {profile.email ? (
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg"
              >
                <Mail size={16} /> {profile.email}
              </a>
            ) : (
              <span className="flex items-center gap-2 rounded-md border border-dashed border-edge px-5 py-3 text-sm text-muted">
                <Mail size={16} /> Email coming soon
              </span>
            )}
          </div>

          <div className="mt-6 flex items-center justify-center gap-5">
            {linkedin?.url && (
              <a href={linkedin.url} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent">
                <Linkedin size={19} />
              </a>
            )}
            {github?.url && (
              <a href={github.url} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-accent">
                <Github size={19} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
