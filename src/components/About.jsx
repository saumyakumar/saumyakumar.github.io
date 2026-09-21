import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import AiPractice from './AiPractice'

function About() {
  const revealRef = useRevealOnScroll()

  return (
    <section className="about reveal" id="about" ref={revealRef}>
      <h2>About</h2>
      <p>
        I'm a Senior Frontend Engineer at CommerceIQ with 6+ years of
        experience building scalable, high-performance web applications and
        AI-powered product experiences using React, Vue.js, TypeScript, and
        modern frontend architecture. I've built two organization-scale
        systems — a config-driven AI rendering engine that turns AI-generated
        specs into live enterprise dashboards, and an Electron-based platform
        I conceived and architected for governed AI adoption across product,
        design, and engineering.
      </p>
      <p>
        Along the way I've cut production bundle size by 86%, taken test
        coverage from 40% to 95%, and automated workflows that used to take
        30 minutes down to under a minute for 80+ clients. I care about
        frontend architecture, performance, reusable component systems, and
        mentoring engineers — I currently review 40+ PRs a month and
        participate in frontend hiring.
      </p>
      <AiPractice />
      <blockquote className="about-quote">
        The part I enjoy most is the boring middle: taking something that
        works in a demo and making it hold up at <span>2,500+ instances</span>,
        without anyone noticing the effort it took to get there.
      </blockquote>
    </section>
  )
}

export default About
