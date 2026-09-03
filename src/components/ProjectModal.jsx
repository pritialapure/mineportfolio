import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project details`}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-edge bg-surface p-7"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-ink">{project.title}</h3>
                <p className="mt-1 text-sm text-muted">{project.tagline}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-edge text-muted hover:text-accent"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-6 text-sm leading-relaxed">
              <div>
                <p className="mb-1 font-mono text-xs text-accent">Problem &amp; motivation</p>
                <p className="text-muted">{project.problemSolved}</p>
              </div>

              {project.features?.length > 0 && (
                <div>
                  <p className="mb-2 font-mono text-xs text-accent">Key features</p>
                  <ul className="space-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2 text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <p className="mb-2 font-mono text-xs text-accent">Tech stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-surface2 px-2 py-1 font-mono text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-md border border-edge px-4 py-2 text-ink hover:border-accent hover:text-accent"
                  >
                    <Github size={16} /> Repository
                  </a>
                ) : (
                  <span className="flex items-center gap-2 rounded-md border border-dashed border-edge px-4 py-2 text-muted">
                    <Github size={16} /> Repository link pending
                  </span>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-md border border-edge px-4 py-2 text-ink hover:border-accent hover:text-accent"
                  >
                    <ExternalLink size={16} /> Live demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
