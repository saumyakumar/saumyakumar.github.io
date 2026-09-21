import ProjectCard from './ProjectCard'

const projects = [
  {
    name: 'Nearby Distance Checker',
    description:
      'Type any address or place name and see the top 3 nearest schools, hospitals, restaurants, metro/railway stations, and airports — with real driving distance and time from actual routing, not straight-line estimates. Compare up to 3 places side by side.',
    tags: ['React', 'Vite', 'Zustand', 'Leaflet', 'Geoapify', 'OpenStreetMap'],
    repoUrl: 'https://github.com/saumyakumar/nearby-distance-app',
    caseStudy: {
      problem:
        "Straight-line distance is misleading when you're actually evaluating a place to live or work — the school that's '500m away' on a map might be a 15-minute drive around a lake. I wanted real driving distance and time, not as-the-crow-flies estimates.",
      approach:
        'Nominatim handles geocoding, Geoapify Places finds nearby schools/hospitals/restaurants/stations/airports, and OSRM computes actual driving routes for each result — all free, keyless or single-key services, with no backend server required for the MVP.',
      tradeoff:
        "Nearby-search originally ran on the free public Overpass API. It's a shared, keyless pool with no per-account quota — under real usage it went from working, to rate-limited, to refusing connections outright, entirely because of other people's traffic. I replaced it with Geoapify's Places API: same underlying OpenStreetMap data, but a dedicated per-account quota, for the cost of one free API key instead of staying fully keyless.",
      limitation:
        "No walking distance — only driving. OSRM's free public server doesn't support a real walking profile, and the free alternative that does needs batch-routing quota disproportionate to a single-route lookup. Rather than add unreliable complexity, I scoped it out.",
    },
  },
  {
    name: 'Claude Desk Assistant',
    description:
      'Electron + React desktop coding assistant built on the Claude Agent SDK — handles multi-turn agentic coding sessions, tool use, and repo-aware workflows.',
    tags: ['Electron', 'React', 'TypeScript', 'Claude Agent SDK'],
    repoUrl: '#',
  },
  {
    name: 'Vue 3 + Pinia Prep',
    description:
      '35-lesson guided project covering Vue 3, Pinia, and analytics-dashboard patterns — charting, forms, auth, testing, and a capstone.',
    tags: ['Vue 3', 'Pinia', 'Vite', 'Vitest'],
    repoUrl: 'https://github.com/saumyakumar/vue-pinia-prep',
    label: 'Learning Project',
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} {...project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
