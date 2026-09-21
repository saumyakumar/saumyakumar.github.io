import { useEffect, useRef, useState } from 'react'

// Animates a number from 0 to `target` once, the first time it scrolls into view.
const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useCountUp(target, duration = 1400) {
  const ref = useRef(null)
  const [value, setValue] = useState(prefersReducedMotion ? target : 0)

  useEffect(() => {
    if (prefersReducedMotion) return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          setValue(Math.round(target * eased))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return [ref, value]
}
