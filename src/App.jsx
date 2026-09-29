import Footer from "./layout/Footer"
import Navbar from "./layout/Navbar"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Office from "./sections/Office"
import PracticeAreas from "./sections/PracticeAreas"


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden  ">
      <Navbar/>
      <main>
        <Hero/>
        <PracticeAreas/>
        <Office/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
