import Image from "next/image"
import Link from "next/link"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import NextSection from "./components/NextSection"
import BuildplayerSection from "./components/BuildplayerSection"
import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks"
import Signup from "./components/Signup";
import BecomeChallenger from "./components/BecomeChallenger"
import HereWhy from "./components/HereWhy"
import Promoter from "./components/Promoter"
export default function HomePage() {

  return (
    < >
    <Navbar/>
    <section id="home">
      <HeroSection/>
    </section>
 
    <NextSection/>
    <HereWhy/>
    {/* <NextSection/> */}
    <BuildplayerSection/>
    <section id ="promoter">
      <Promoter/>
    </section>
  
  <section id="challenger">
       <BecomeChallenger/>
  </section>

   <section  id="reservespot">
    <Signup/>
  </section>

 <section id="howitworks">
      <HowItWorks/>
 </section>
    
    <Footer/>

    </>
  )
}
