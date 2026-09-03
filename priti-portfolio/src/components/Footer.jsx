import * as Icons from 'lucide-react'
import { profile } from '../data/config.js'
import { profiles } from '../data/profiles.js'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-edge">
      <div className="container flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="font-mono text-sm text-muted">
          &copy; {year} {profile.name}
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-5">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className="text-sm text-muted hover:text-accent"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {profiles
            .filter((p) => p.url)
            .map((p) => {
              const Icon = Icons[p.icon] || Icons.Link
              return (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={p.label}
                  className="text-muted hover:text-accent"
                >
                  <Icon size={17} />
                </a>
              )
            })}
        </div>
      </div>
    </footer>
  )
}
