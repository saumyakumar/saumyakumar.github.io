import { useEffect, useRef } from 'react'

// Toggles a "reveal-visible" class each time the element enters/leaves the viewport.
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
        node.classList.toggle('reveal-visible', entry.isIntersecting)
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [index])

  return ref
}
