import * as Icons from 'lucide-react'

export default function SkillCategory({ category }) {
  const Icon = Icons[category.icon] || Icons.Code2

  return (
    <div className="reveal rounded-lg border border-edge bg-surface p-6 transition-colors hover:border-accent/60">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-md bg-surface2 text-accent">
          <Icon size={18} />
        </span>
        <h3 className="font-medium text-ink">{category.label}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-edge bg-surface2 px-2.5 py-1 font-mono text-xs text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
