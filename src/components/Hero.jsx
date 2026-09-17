import headshot from '../assets/headshot.jpg'

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-avatar" src={headshot} alt="Saumya Kumar" />
      <p className="eyebrow">Hi, I'm</p>
      <h1>Saumya Kumar</h1>
      <p className="tagline">
        Senior Frontend Engineer building scalable React, Vue.js, and AI-powered web experiences.
      </p>
      <div className="hero-links">
        <a className="btn btn-primary" href="#projects">
          View Projects
        </a>
        <a className="btn btn-secondary" href="#resume">
          Resume
        </a>
        <a className="btn btn-secondary" href="#contact">
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Hero
