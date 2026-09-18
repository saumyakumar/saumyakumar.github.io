import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const skills = [
  'JavaScript',
  'Vue 3',
  'React',
  'Electron',
  'Pinia',
  'Vite',
  'Node.js',
  'Python',
  'Git',
]

function Skills() {
  const revealRef = useRevealOnScroll()

  return (
    <section className="skills reveal" id="skills" ref={revealRef}>
      <h2>Skills</h2>
      <ul className="tag-list">
        {skills.map((skill) => (
          <li key={skill} className="tag tag-lg">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
