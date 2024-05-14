import { useEffect } from "react";
import { FaCirclePlay } from "react-icons/fa6";

// animations
import AOS from "aos";
import "aos/dist/aos.css";


const Banner = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-down" className="bannerBG w-full">
        <div className='container mx-auto pt-[100px] pb-[50px] flex flex-col items-center border-b-[1px] border-text1'>
      <h1 className='font2 text-[45px] md:text-[60px] leading-[50px] md:leading-[66px] text-center font-[500] text-text2'>Write better
        <br />
       content for your 
        <br />
       <span className='bannerText1 border-b-[4px]'>Facebook Ads</span></h1>
       <p className='text-text1 text-center pt-[40px] font1 font-[400] text-[16px] p-[10px] md:w-[450px] opacity-70 leading-7'>Artificial intelligence writting tool helps you create blogs, social media websites and much more.</p>
       <button className="gradient pt-[16px] pb-[16px] pl-[20px] pr-[20px]  rounded-[5px] font1 font-[600] text-[14px] md:text-[16px] leading-6 text-text2 mt-[40px]">Start 14 Days Free Trial</button>
       <p className="text-text2 pt-[20px] flex gap-1 items-center font1 text-[16px] font-[600] leading-6"><span><FaCirclePlay/></span> Watch A Demo</p>
    </div>
    </div>
  )
}

export default Banner
