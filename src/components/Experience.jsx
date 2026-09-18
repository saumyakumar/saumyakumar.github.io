import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const experience = [
  {
    company: 'CommerceIQ',
    location: 'Bangalore',
    title: 'Sr. Frontend Engineer',
    dates: 'April 2022 – Present',
    bullets: [
      'Built a configuration-driven React rendering engine that transforms AI-generated specifications into interactive enterprise dashboards, and architected CIQ Desktop, an Electron app enabling governed AI-assisted delivery across Product, Design, and Engineering.',
      'Owned and delivered 10+ enterprise-scale UI modules impacting 80+ clients and 2,500+ active instances, supporting products responsible for 15% of company ARR.',
      'Reduced production bundle size from 11 MB to 1.5 MB (86%) and increased automated test coverage from 40% to 95% via Shift-Left testing, Jest, and Cypress E2E automation.',
      'Mentored 5+ developers, reviewed 40+ pull requests a month, and participated in mid/senior frontend hiring.',
    ],
  },
  {
    company: 'Born Group',
    location: 'Bangalore',
    title: 'Software Engineer - Frontend',
    dates: 'Dec 2021 – April 2022',
    bullets: [
      'Developed 20+ reusable components and 5 landing pages for enterprise e-commerce storefronts using Vue.js & Vue Storefront.',
      'Enhanced page performance by 25% via optimized SCSS architecture and lazy-loading strategies.',
    ],
  },
  {
    company: 'Rivulet Digital',
    location: 'Gujarat',
    title: 'Vue.js Developer',
    dates: 'Feb 2021 – Dec 2021',
    bullets: [
      'Introduced and established the code review process within the team, reducing UI defects by 30%.',
      'Led frontend development for Lariat Hub using Nuxt.js, delivering the Customer & Asset Management modules.',
    ],
  },
  {
    company: 'Zysk Technologies',
    location: 'Bangalore',
    title: 'Software Engineer',
    dates: 'Feb 2020 – Dec 2020',
    bullets: [
      'Built 2 production apps (Agrimitra, Mia Store) using Nuxt.js, Vuetify, and Vuex; converted Agrimitra into a Progressive Web App, improving retention by 20%.',
    ],
  },
]

function ExperienceItem({ company, location, title, dates, bullets, index }) {
  const revealRef = useRevealOnScroll(index)

  return (
    <article className="experience-item reveal" ref={revealRef}>
      <div className="experience-header">
        <h3>
          {title} · {company}
        </h3>
        <p className="experience-meta">
          {location} &middot; {dates}
        </p>
      </div>
      <ul className="experience-bullets">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  )
}

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experience.map((role, index) => (
          <ExperienceItem key={`${role.company}-${role.dates}`} {...role} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Experience
