import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Saumya Kumar</p>
      </footer>
    </>
  )
}

export default App
