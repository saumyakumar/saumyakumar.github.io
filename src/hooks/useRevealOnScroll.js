import { useEffect, useRef } from 'react'

// Adds a "reveal-visible" class the first time the element scrolls into view.
// `index` staggers list items by delaying each one's transition slightly.
export function useRevealOnScroll(index = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    node.style.transitionDelay = `${Math.min(index, 5) * 90}ms`

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      node.classList.add('reveal-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('reveal-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [index])

  return ref
}
