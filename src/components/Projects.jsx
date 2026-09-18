import ProjectCard from './ProjectCard'

const projects = [
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
