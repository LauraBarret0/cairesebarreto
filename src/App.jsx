import Navbar from "./layout/Navbar"
import Hero from "./sections/Hero"
import Office from "./sections/Office"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar/>
      <main>
        <Hero/>
        <hr className="border-background border-3" />
        <Office/>
      </main>
    </div>
  )
}

export default App
