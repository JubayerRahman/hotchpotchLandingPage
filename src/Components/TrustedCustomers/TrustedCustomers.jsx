import { useEffect } from "react"
import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.png"
import logo3 from "../../assets/logo3.png"
import logo4 from "../../assets/logo4.png"
import logo5 from "../../assets/logo5.png"
import logo6 from "../../assets/logo6.png"
import logo7 from "../../assets/logo7.png"
import logo8 from "../../assets/logo8.png"

// animations
import AOS from "aos";
import "aos/dist/aos.css";

const TrustedCustomers = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div className='text-center container mx-auto mt-[50px] flex flex-col items-center gap-10'>
      <h1 data-aos="fade-down" className='font2 font-[500] text-[18px] md:text-[24px] leading-[26px] md:leading-[34px] text-text2'>Trusted by nearly 5000+ paying customers</h1>
      <div className="logos mx-auto opacity-50 grid grid-cols-2 md:grid-cols-4 gap-[25px] md:gap-[50px]">
        <img data-aos="zoom-out" className=" object-contain w-[130px] md:w-[165px] h-[30px] md:h-[37px]" src={logo1} alt="" />
        <img data-aos="zoom-out" className=" object-contain w-[130px] md:w-[165px] h-[30px] md:h-[37px]" src={logo2} alt="" />
        <img data-aos="zoom-out" className=" object-contain w-[130px] md:w-[165px] h-[30px] md:h-[37px]" src={logo3} alt="" />
        <img data-aos="zoom-out" className=" object-contain w-[130px] md:w-[165px] h-[30px] md:h-[37px]" src={logo4} alt="" />
        <img data-aos="zoom-out" className=" object-contain w-[130px] md:w-[165px] h-[30px] md:h-[37px]" src={logo5} alt="" />
        <img data-aos="zoom-out" className=" object-contain w-[130px] md:w-[165px] h-[30px] md:h-[37px]" src={logo6} alt="" />
        <img data-aos="zoom-out" className=" object-contain w-[130px] md:w-[165px] h-[30px] md:h-[37px]" src={logo7} alt="" />
        <img data-aos="zoom-out" className=" object-contain w-[130px] md:w-[165px] h-[30px] md:h-[37px]" src={logo8} alt="" />
      </div>
    </div>
  )
}

export default TrustedCustomers
