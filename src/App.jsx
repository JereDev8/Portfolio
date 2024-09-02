import Nav from "./components/Nav"
import SectionHome from "./components/SectionHome"
import SectionAboutMe from "./components/SectionAboutMe"
import SectionTechnologies from "./components/SectionTechnologies"
import SectionProjects from "./components/SectionProjects"
import SectionGetInTouch from "./components/SectionGetInTouch"
import LetsWorkTogether from "./components/LetsWorkTogether"
import Footer from "./components/Footer"

function App() {
 
window.scrollTo({behavior:'smooth'})

  return (
    <div className="absolute bg-gradient-to-r from-zinc-800 to-zinc-950"  >
      <Nav/>
      <SectionHome/>
      <SectionAboutMe/>
      <SectionTechnologies/>
      <SectionProjects/>
      <SectionGetInTouch/>
      <LetsWorkTogether/>
      <Footer/>
    </div>
  )
}

export default App
