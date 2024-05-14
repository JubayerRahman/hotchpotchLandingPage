import React, { useEffect } from 'react'

// animations
import AOS from "aos";
import "aos/dist/aos.css";


const Pricing = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      
    
  return (
    <div className='container mx-auto pt-[100px] pb-[100px] p-[10px] text-text2'>
      <h1 data-aos="fade-down" className='font2 text-[30px] md:text-[42px] leading-[36px] md:leading-[48px] font-[600] text-center md:w-[35%] mx-auto'>Make the wise decision for your business</h1>
      <p data-aos="fade-down" className='font1 text-[14px] md:text-[18px] leading-5 md:leading-7 opacity-70 text-center mt-[20px]'>Choose from our affordable 3 packages</p>
      <div className="package mt-[50px] p-[10px] flex flex-col md:flex-row gap-5 justify-center">
        <div data-aos="fade-down" className="package1 bg-[#282A37] rounded-[15px] p-[20px] flex flex-col gap-10">
            <p className='font1 text-[16px] leading-6'>Starter Plan</p>
                <div>
                    <p className='font2 text-[18px] leading-[23px]'><span className='font-[600] text-[42px] leading-[48px]'>$29</span>/month</p>
                    <p className='font1 text-[14px] leading-5 opacity-70 w-[75%]'>This package is suitable for teams 1-15 people.</p>
                </div>
                <div>
                    <h1 className='font1 text-[16px] font-[700] leading-7'>What’s included:</h1>
                    <p className='font1 text-[16px] font-[500] leading-[34px] opacity-70'>10 GB Dedicated Hosting Free</p>
                    <p className='font1 text-[16px] font-[500] leading-[34px] opacity-70'>Best for Developers, Freelancers</p>
                    <p className='font1 text-[16px] font-[500] leading-[34px] opacity-70'>1 Year Support </p>
                    <p className='font1 text-[16px] font-[500] leading-[34px] opacity-70 text-[#282A37]'>0 </p>
                    <p className='font1 text-[16px] font-[500] leading-[34px] opacity-70 text-[#282A37]'>0 </p>
                </div>
            <button className='font1 font-[700] text-[16px] leading-7 w-full p-[16px] border-[1px] border-[#12141D] justify-between rounded-[15px] hover:bg-gradient'>Get Started</button>
        </div>
        <div data-aos="fade-up" className="package2 bg-[#282A37] rounded-[15px] p-[20px] flex flex-col gap-10">
            <p className='font1 text-[16px] leading-6'>Basic Plan</p>
                <div>
                    <p className='font2 text-[18px] leading-[23px]'><span className='font-[600] text-[42px] leading-[48px]'>$79</span>/month</p>
                    <p className='font1 text-[14px] leading-5 opacity-70 w-[75%]'>This package is suitable for teams 1-50 people.</p>
                </div>
                <div>
                    <h1 className='font1 text-[16px] font-[700] leading-7'>What’s included:</h1>
                    <p className='font1 text-[16px] font-[500] leading-[34px] opacity-70'>15 GB Dedicated Hosting Free</p>
                    <p className='font1 text-[16px] font-[500] leading-[34px] opacity-70'>Best for Developers, Freelancers</p>
                    <p className='font1 text-[16px] font-[500] leading-[34px] opacity-70'>5 Year Support  </p>
                    <p className='font1 text-[16px] font-[500] leading-[34px] opacity-70'>Free Custom Domain  </p>
                    <p className='font1 text-[16px] font-[500] leading-[34px] opacity-70'>Basic Statistics  </p>
                </div>
            <button className=' bg-gradient font1 font-[700] text-[16px] leading-7 w-full p-[16px] border-[1px] border-[#12141D] rounded-[15px]'>Get Started</button>
        </div>
        <div data-aos="fade-down" className="package3 bg-[#282A37] rounded-[15px] p-[20px] flex flex-col gap-10">
            <p className='font1 text-[16px] leading-6'>Premium Plan</p>
                <div>
                    <p className='font2 text-[18px] leading-[23px]'><span className='font-[600] text-[42px] leading-[48px]'>$129</span>/month</p>
                    <p className='font1 text-[14px] leading-5 opacity-70 w-[75%]'>This package is suitable for teams 1-100 people.</p>
                </div>
                <div>
                    <h1 className='font1 text-[16px] font-[700] leading-7'>What’s included:</h1>
                    <p className='font1 text-[16px] font-[500] leading-[34px] opacity-70'>20 GB Dedicated Hosting Free</p>
                    <p className='font1 text-[16px] font-[500] leading-[34px] opacity-70'>Best for Developers, Freelancers</p>
                    <p className='font1 text-[16px] font-[500] leading-[34px] opacity-70'>Unlimited Support  </p>
                    <p className='font1 text-[16px] font-[500] leading-[34px] opacity-70'>Free Custom Domain  </p>
                    <p className='font1 text-[16px] font-[500] leading-[34px] opacity-70'>Full Statistics  </p>
                </div>
            <button className='font1 font-[700] text-[16px] leading-7 w-full p-[16px] border-[1px] border-[#12141D] rounded-[15px] hover:bg-gradient'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
