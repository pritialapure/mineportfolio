import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <button
      type="button"
      onClick={() => setIsDark((d) => !d)}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="grid h-9 w-9 place-items-center rounded-full border border-edge text-muted transition-colors hover:text-accent hover:border-accent"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
