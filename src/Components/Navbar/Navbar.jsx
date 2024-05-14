import { useEffect, useState } from "react";
import logo from "../../assets/HotchPotchLogo.png"
import { TiThMenuOutline } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";

// animations
import AOS from "aos";
import "aos/dist/aos.css";



const Navbar = () => {
    const [linksShow, setLinksShow] = useState("hidden")
    const [menuIconClass, setmenuIconClass] = useState("block")
    const [xmarkClass, setxmarkClass] = useState("hidden")

    const CheckMenuFunction = ()=>{
        if(linksShow === "hidden"){
            setLinksShow("flex")
            setmenuIconClass("hidden")
            setxmarkClass("block")
        }
        else{
            setLinksShow("hidden")
            setmenuIconClass("block")
            setxmarkClass("hidden")
        }
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div   data-aos="fade-right" className='text-text2 container mx-auto pt-[20px] pb-[20px] flex flex-col md:flex-row justify-between items-center'>
        <div className="w-[100%] md:w-[20%] flex justify-between items-center p-[10px]">
            <img className="w-[156px] md:w-[78px] h-[64px] md:h-[32px] object-cover" src={logo}/>
            <h1 onClick={CheckMenuFunction} className={`text-[25px] block md:hidden ${menuIconClass}`}><TiThMenuOutline/></h1>
            <h1 onClick={CheckMenuFunction} className={`text-[25px] block md:hidden ${xmarkClass}`}><FaXmark/></h1>
        </div>
      <div className={`w-[80%] ${linksShow} md:flex flex-col md:flex-row justify-between items-center transition-all ease-in duration-500 `}>
            <div className="links flex flex-col md:flex-row gap-10 justify-start pt-[20px] md:pt-[0px]">
                <a className="font1 font-[500] text-[16px] leading-6" href="#">Demos</a>
                <a className="font1 font-[500] text-[16px] leading-6" href="#">About</a>
                <a className="font1 font-[500] text-[16px] leading-6" href="#">Blog</a>
                <a className="font1 font-[500] text-[16px] leading-6" href="#">Pages</a>
                <a className="font1 font-[500] text-[16px] leading-6" href="#">Contact</a>
            </div>

            <div className="buttons flex gap-3 pt-[20px] md:pt-[0px]">
                <button className="pt-[16px] pb-[16px] pl-[20px] pr-[20px] border-[1px] border-text1 rounded-[5px] font1 font-[500]  text-[14px] md:text-[16px] leading-6">Sign in</button>
                <button className="gradient pt-[16px] pb-[16px] pl-[20px] pr-[20px]  rounded-[5px] font1 font-[500] text-[14px] md:text-[16px] leading-6">Get Started Free</button>
            </div>
      </div>
    </div>
  )
}

export default Navbar
