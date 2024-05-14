import { useEffect } from "react"
import Banner from "./Components/Banner/Banner"
import Cradit from "./Components/Cradit/Cradit"
import Footer from "./Components/Footer/Footer"
import Mixland from "./Components/Mixland/Mixland"
import Navbar from "./Components/Navbar/Navbar"
import Pricing from "./Components/Pricing/Pricing"
import ResultSection from "./Components/ResultSection/ResultSection"
import Review from "./Components/Review/Review"
import Tools from "./Components/Tools/Tools"
import Trial from "./Components/Trial/Trial"
import TrustedCustomers from "./Components/TrustedCustomers/TrustedCustomers"

// animations
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bg-background"  >
      <Navbar/>
      <Banner/>
      <TrustedCustomers/>
      <ResultSection/>
      <Tools/>
      <Mixland/>
      <Review/>
      <Pricing/>
      <Trial/>
      <Footer/>
      <Cradit/>
    </div>
  )
}

export default App
