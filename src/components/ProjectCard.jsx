import { useState } from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

function ProjectCard({
  name,
  subtitle,
  description,
  tags,
  repoUrl,
  linkLabel,
  label,
  index,
  image,
  imageAlt,
  caseStudy,
}) {
  const hasLink = repoUrl !== undefined
  const isPlaceholder = repoUrl === '#'
  const revealRef = useRevealOnScroll(index)
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="project-card reveal" ref={revealRef}>
      {image && (
        <div className="project-cover">
          <img src={image} alt={imageAlt} loading="lazy" />
        </div>
      )}
      {label && <span className="project-label">{label}</span>}
      <h3>{name}</h3>
      {subtitle && <p className="project-subtitle">{subtitle}</p>}
      <p>{description}</p>
      <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>

      {caseStudy && (
        <>
          {expanded && (
            <dl className="case-study">
              <dt>Problem</dt>
              <dd>{caseStudy.problem}</dd>
              <dt>Approach</dt>
              <dd>{caseStudy.approach}</dd>
              <dt>A real tradeoff</dt>
              <dd>{caseStudy.tradeoff}</dd>
              <dt>Known limitation</dt>
              <dd>{caseStudy.limitation}</dd>
            </dl>
          )}
          <button
            type="button"
            className="case-study-toggle"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
          >
            {expanded ? 'Show less' : 'Read the case study'}
          </button>
        </>
      )}

      {hasLink && (
        <a
          className={`project-link${isPlaceholder ? ' project-link-disabled' : ''}`}
          href={repoUrl}
          target={isPlaceholder ? undefined : '_blank'}
          rel={isPlaceholder ? undefined : 'noreferrer'}
          aria-disabled={isPlaceholder}
          onClick={(e) => isPlaceholder && e.preventDefault()}
        >
          {isPlaceholder ? 'Repo coming soon' : linkLabel ?? 'View on GitHub →'}
        </a>
      )}
    </article>
  )
}

export default ProjectCard
