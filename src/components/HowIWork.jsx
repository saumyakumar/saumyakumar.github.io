import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const principles = [
  {
    label: 'Performance',
    headline: 'Make it fast, then keep it fast.',
    description:
      "Bundle size, load time, and runtime cost are product decisions, not afterthoughts — I cut production bundle size by 86% without cutting features.",
  },
  {
    label: 'Architecture',
    headline: "Design for the change you can't see yet.",
    description:
      "Config-driven systems and clear component contracts hold up as products grow — I've built reusable component foundations across a dozen product modules.",
  },
  {
    label: 'AI-Assisted Engineering',
    headline: 'Expand capability, keep the judgment call.',
    description:
      'I use AI to explore and scaffold faster — pioneering Cursor AI adoption across my team cut engineering turnaround time by 35% — but every AI-touched change still gets tested, reviewed, and owned by a human.',
  },
  {
    label: 'Mentorship',
    headline: 'Multiply through other engineers.',
    description:
      'Reviewing 40+ pull requests a month and writing onboarding docs that cut ramp-up time in half compounds more than any single feature I could ship alone.',
  },
  {
    label: 'Reliability at Scale',
    headline: 'Trust systems, not memory.',
    description:
      "Shift-left testing and CI/CD pipelines mean quality doesn't depend on anyone remembering what might break — 95% test coverage, deployment validation time cut by 70%.",
  },
]

function PrincipleRow({ label, headline, description, index }) {
  const revealRef = useRevealOnScroll(index)

  return (
    <div className="principle-row reveal" ref={revealRef}>
      <span className="principle-node" />
      <span className="principle-connector" />
      <div className="principle-content">
        <span className="principle-label">{label}</span>
        <h3>{headline}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

function HowIWork() {
  return (
    <section className="how-i-work" id="how-i-work">
      <h2>How I Work</h2>
      <div className="how-i-work-list">
        {principles.map((principle, index) => (
          <PrincipleRow key={principle.label} {...principle} index={index} />
        ))}
      </div>
    </section>
  )
}

export default HowIWork
