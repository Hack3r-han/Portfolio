import Nav from "./components/Nav"
import About from "./components/About"
import Banner from "./components/Banner"
import WelcomeMessage from "./components/TypeAnimation"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const App = () => {

  return (
    <div>
      <Nav/>
      <About/>
      <WelcomeMessage/>
      <Banner/>
      <Projects/>
      <Contact />
    </div>
  )
}

export default App
