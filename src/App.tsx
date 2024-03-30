import Nav from "./components/Nav"
import About from "./components/About"
import Banner from "./components/Banner"
import WelcomeMessage from "./components/TypeAnimation"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"

const App = () => {

  return (
    <div>
      <Nav/>
      <About/>
      <WelcomeMessage/>
      <Banner/>
      <Experience/>
      <Projects/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
