const highlights = [
  'Built a config-driven AI rendering engine that turns AI-generated specifications into live, interactive enterprise dashboards.',
  "Conceived and architected an Electron-based platform for governed AI adoption across Product, Design, and Engineering, with a measurable AIDLC — since that system is proprietary to my employer, I built Claude Desk Assistant as a public demo of the same architecture on the Claude Agent SDK.",
  'Built a headless AI-powered PPT export service that plugs into any dashboard and generates presentation-ready exports — designed with token-budget awareness and data-sanity checks to keep AI-generated output reliable at scale.',
  'Pioneered Cursor AI adoption across the frontend team for test generation, scaffolding, and refactoring — cut engineering turnaround time by 35%.',
]

function AiPractice() {
  return (
    <div className="ai-practice">
      <span className="ai-practice-label">AI-Native Practice</span>
      <ul>
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default AiPractice
