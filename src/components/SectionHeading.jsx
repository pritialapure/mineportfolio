export default function SectionHeading({ kicker, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      {kicker && (
        <p className="mb-2 font-mono text-sm text-accent">{kicker}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted leading-relaxed">{description}</p>
      )}
    </div>
  )
}
