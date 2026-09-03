import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'
import { useActiveSection } from '../hooks/useActiveSection.js'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'profiles', label: 'Profiles' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(LINKS.map((l) => l.id))

  const handleClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-edge/80 bg-bg/85 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleClick('home')
          }}
          className="font-mono text-lg font-medium tracking-tight text-ink"
        >
          PA<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleClick(link.id)}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active === link.id
                    ? 'text-accent'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-edge text-ink lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-edge bg-bg lg:hidden">
          <ul className="container flex flex-col py-3">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleClick(link.id)}
                  className={`block w-full rounded-md px-3 py-3 text-left text-sm ${
                    active === link.id ? 'text-accent' : 'text-muted'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
