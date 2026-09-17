function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow">Hi, I'm</p>
      <h1>Saumya Kumar</h1>
      <p className="tagline">
        {/* TODO: replace with your own one-line pitch, e.g. "Frontend developer building with Vue and React" */}
        Frontend developer learning and building with JavaScript, Vue, and React.
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
