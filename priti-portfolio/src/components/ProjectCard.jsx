import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, onOpen }) {
  return (
    <div className="reveal group flex h-full flex-col rounded-lg border border-edge bg-surface p-6 transition-colors hover:border-accent/60">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-medium text-ink">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        </div>
        {project.status && (
          <span className="shrink-0 whitespace-nowrap rounded-md border border-edge px-2 py-1 font-mono text-[11px] text-muted">
            {project.status}
          </span>
        )}
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((t) => (
          <span
            key={t}
            className="rounded-md bg-surface2 px-2 py-1 font-mono text-[11px] text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Open ${project.title} on GitHub`}
              className="text-muted transition-colors hover:text-accent"
            >
              <Github size={17} />
            </a>
          ) : (
            <span className="flex items-center gap-1 font-mono text-[11px] text-muted/70">
              <Github size={15} /> pending
            </span>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Open ${project.title} live demo`}
              className="text-muted transition-colors hover:text-accent"
            >
              <ExternalLink size={17} />
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="flex items-center gap-1 text-sm text-accent"
        >
          Details
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </div>
  )
}
