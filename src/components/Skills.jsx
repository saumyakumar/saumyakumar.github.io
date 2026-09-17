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
  return (
    <section className="skills" id="skills">
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
