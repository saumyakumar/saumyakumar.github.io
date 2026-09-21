import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Vue 3',
  'Nuxt.js',
  'Electron',
  'Pinia',
  'Vite',
  'Tailwind CSS',
  'Node.js',
  'REST APIs',
  'Jest',
  'Cypress',
  'CI/CD',
  'Git',
]

function Skills() {
  const revealRef = useRevealOnScroll()

  return (
    <section className="skills reveal" id="skills" ref={revealRef}>
      <h2>Skills</h2>
      <div className="marquee">
        <ul className="marquee-track">
          {skills.map((skill) => (
            <li key={skill} className="tag tag-lg">
              {skill}
            </li>
          ))}
        </ul>
        <ul className="marquee-track" aria-hidden="true">
          {skills.map((skill) => (
            <li key={skill} className="tag tag-lg">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
