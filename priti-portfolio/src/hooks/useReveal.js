import { useEffect, useRef } from 'react'

// Adds `is-visible` to elements with the `.reveal` class inside the
// returned ref once they scroll into view. One-time, cheap, no dependency.
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = root.classList.contains('reveal')
      ? [root]
      : Array.from(root.querySelectorAll('.reveal'))

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return ref
}
