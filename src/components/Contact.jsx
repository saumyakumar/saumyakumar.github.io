function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out or check out my code.</p>
      <ul className="contact-list">
        <li>
          <a href="mailto:saumyakumar55@gmail.com">saumyakumar55@gmail.com</a>
        </li>
        <li>
          <a href="https://github.com/saumyakumar" target="_blank" rel="noreferrer">
            github.com/saumyakumar
          </a>
        </li>
        {/* TODO: add your LinkedIn and/or resume link here, e.g.
        <li><a href="https://linkedin.com/in/your-handle" target="_blank" rel="noreferrer">LinkedIn</a></li>
        */}
      </ul>
    </section>
  )
}

export default Contact
