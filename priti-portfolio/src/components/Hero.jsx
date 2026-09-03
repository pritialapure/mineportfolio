import { motion } from 'framer-motion'
import { Github, Linkedin, Code2, ArrowDown, FileDown } from 'lucide-react'
import { profile } from '../data/config.js'
import { profiles } from '../data/profiles.js'

const iconFor = { Github, Linkedin, Code2 }

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const codeLines = [
  'const engineer = {',
  '  name: "Priti Alapure",',
  '  focus: ["Full-Stack", "GenAI", "DSA"],',
  '  status: "Building & shipping"',
  '};',
]

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-16"
    >
      <div className="container grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="mb-4 font-mono text-sm text-accent">
            Hi, I&apos;m
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-lg text-muted sm:text-xl">
            {profile.role}
          </motion.p>
          <motion.p variants={item} className="mt-6 max-w-xl leading-relaxed text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              View my work
            </button>

            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md border border-edge px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <FileDown size={16} /> Download resume
              </a>
            ) : (
              <span className="flex items-center gap-2 rounded-md border border-dashed border-edge px-5 py-3 text-sm text-muted">
                <FileDown size={16} /> Resume coming soon
              </span>
            )}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            {profiles
              .filter((p) => ['github', 'linkedin', 'leetcode'].includes(p.id))
              .map((p) => {
                const Icon = iconFor[p.icon]
                if (!p.url) return null
                return (
                  <a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={p.label}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="relative"
        >
          <div className="overflow-hidden rounded-lg border border-edge bg-surface shadow-2xl shadow-black/20">
            <div className="flex items-center gap-1.5 border-b border-edge px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F2664F]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F2B84B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="ml-3 font-mono text-xs text-muted">whoami.js</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              {codeLines.map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 + i * 0.18 }}
                  className="whitespace-pre text-ink"
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent sm:block"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  )
}
