import React, { useEffect } from 'react'

// animations
import AOS from "aos";
import "aos/dist/aos.css";

const Trial = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='container mx-auto p-[20px]'>
        <div className='  bg-gradient rounded-[10px] p-[20px] text-text2 flex flex-col md:flex-row gap-10 justify-between items-center'>
      <h1 data-aos="zoom-in-down" className='font2 text-[28px] md:text-[32px] leading-8 md:leading-[42px] font-[600] text-center md:text-left md:w-[44%]'>It will help you improve your writing &  bring ideas more c learly.</h1>
      <button className="bg-white text-[#12141D] pt-[16px] pb-[16px] pl-[20px] pr-[20px]  rounded-[5px] font1 font-[600] text-[14px] md:text-[16px] leading-6 trialButton border-[1px]">Start 14 Days Free Trial</button>
    </div>
    </div>
  )
}

export default Trial
