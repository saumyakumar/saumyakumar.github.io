import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

function ProjectCard({ name, description, tags, repoUrl, label, index }) {
  const isPlaceholder = repoUrl === '#'
  const revealRef = useRevealOnScroll(index)

  return (
    <article className="project-card reveal" ref={revealRef}>
      {label && <span className="project-label">{label}</span>}
      <h3>{name}</h3>
      <p>{description}</p>
      <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      <a
        className={`project-link${isPlaceholder ? ' project-link-disabled' : ''}`}
        href={repoUrl}
        target={isPlaceholder ? undefined : '_blank'}
        rel={isPlaceholder ? undefined : 'noreferrer'}
        aria-disabled={isPlaceholder}
        onClick={(e) => isPlaceholder && e.preventDefault()}
      >
        {isPlaceholder ? 'Repo coming soon' : 'View on GitHub →'}
      </a>
    </article>
  )
}

export default ProjectCard
