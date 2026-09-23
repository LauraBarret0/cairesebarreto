// import Header from './components/Header'
// import HeroSection from './components/HeroSection'

import Navbar from "./layout/Navbar"
import Hero from "./sections/Hero"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar/>
      <main>
        <Hero/>
      </main>
    </div>
    // <div className='bg-white min-h-screen'>
    //   <Header/>
    //   {/* <HeroSection/> */}
    // </div>
  )
}

export default App
