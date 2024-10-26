import Contact from "../sections/Contact"
import Hero from "../sections/Hero"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"


const Home = () => {

  

  return (
    <div className="mx-20 max-sm:mx-0">
      <section id="/" className="min-h-[80vh] pt-10">
        <Hero/>
      </section>
      <section id="skills" className="min-h-screen pt-20">
        <Skills/>
      </section>
      <section id="projects" className="min-h-screen pt-20">
        <Projects/>
      </section>
      <section id="contact" className="min-h-screen pt-20">
        <Contact/>
      </section>
    </div>
  )
}

export default Home