import MixlandImage from "../../assets/mixlandImage.png"

// animations
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Mixland = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div className='container mx-auto my-[50px] text-text2 p-[10px] '>
      <h1 data-aos="zoom-in-down" className='font2 text-center text-[30px] md:text-[42px] font-[600] leading-[36px] md:leading-[48px] w-[100%]'>Mixland helps you <br /> build beautiful website</h1>
      <div className='mt-[50px] flex flex-col md:flex-row justify-evenly gap-5 p-[10px] '>
        <div className="options flex flex-col gap-2 w-[100%] md:w-[30%]">
            <h1 data-aos="fade-up" className='rounded-[10px] p-[20px] font1 text-[16px] leading-[24px] font-[600] cursor-pointer gradient'>Blog Headlines</h1>
            <h1 data-aos="fade-up" className='rounded-[10px] p-[20px] border-[1px] border-[#282A37] font1 text-[16px] leading-[24px] font-[600] cursor-pointer hover:bg-gradient hover:border-background hover:ease-in-out'>Blog Intros</h1>
            <h1 data-aos="fade-up" className='rounded-[10px] p-[20px] border-[1px] border-[#282A37] font1 text-[16px] leading-[24px] font-[600] cursor-pointer hover:bg-gradient hover:border-background hover:ease-in-out'>Content Rewriter</h1>
            <h1 data-aos="fade-up" className='rounded-[10px] p-[20px] border-[1px] border-[#282A37] font1 text-[16px] leading-[24px] font-[600] cursor-pointer hover:bg-gradient hover:border-background hover:ease-in-out'>Facebook Ads</h1>
            <h1 data-aos="fade-up" className='rounded-[10px] p-[20px] border-[1px] border-[#282A37] font1 text-[16px] leading-[24px] font-[600] cursor-pointer hover:bg-gradient hover:border-background hover:ease-in-out'>PAS Copywriting Formula</h1>
        </div>
        <div className="w-[100%] md:w-[60%]">
            <img src={MixlandImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Mixland
