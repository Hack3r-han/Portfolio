import Navbar from "./components/Navbar"
import About from "./components/About"
import Banner from "./components/Banner"
import WelcomeMessage from "./components/TypeAnimation"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Experience from "./components/Experience"

const App = () => {

  return (
     <main className="font-bodyFont w-full h-auto bg-bodyColor text-lightText">
     <Navbar />
     <div className="px-4">
       <div className="max-w-screen-xl mx-auto">
       <About/>
       <WelcomeMessage/>
       <Banner/>
       <Experience/>
       <Projects/>
       <Contact />
       </div>
     </div>
   </main>
  )
}

export default App
