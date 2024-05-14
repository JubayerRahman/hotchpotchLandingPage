import ResultImage from "../../assets/resultIimage.png"
import cardImage from "../../assets/cardImage.png"

// animations
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ResultSection = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="container mx-auto mt-[100px] md:mt-[200px] p-[10px] flex flex-col gap-5">
      <div className="section1 text-text2 flex flex-col md:flex-row gap-4 items-center">
        <div className=" w-[100%] md:w-[47%] flex justify-center">
            <img className="w-[100%] img1" src={ResultImage} alt="" />
        </div>
        <div data-aos="fade-down" className=" w-[95%] md:w-[40%] flex flex-col gap-5">
            <h1 className="font2 text-[25px] md:text-[32px] leading-[38px] md:leading-[48px] font-[600]">Create content efficiently and quickly with great AI writing tools</h1>
            <p className="font1 font-[400] text-[16px] md:text-[18px] leading-7 opacity-70">150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc.</p>
            <button className="gradient pt-[16px] pb-[16px] pl-[20px] pr-[20px]  rounded-[5px] font1 font-[600] text-[14px] md:text-[16px] leading-6 text-text2 w-fit">Start 14 Days Free Trial</button>
        </div>
      </div>
      <div className="section2 text-text2 flex flex-col md:flex-row-reverse gap-4 items-center justify-evenly">
        <div  className=" w-[100%] md:w-[55%] flex justify-center">
            <img className="w-[100%] img2" src={cardImage} alt="" />
        </div>
        <div data-aos="fade-down" className=" w-[95%] md:w-[35%] flex flex-col gap-5">
            <h1 className="font2 text-[25px] md:text-[32px] leading-[38px] md:leading-[48px] font-[600]">Write what you want to convey through clear, & authentic writing</h1>
            <p className="font1 font-[400] text-[16px] md:text-[18px] leading-7 opacity-70">AI-Writer is the most accurate content generation platform and writing tool that helps you transform your text into a completely personalized.</p>
            <button className="gradient pt-[16px] pb-[16px] pl-[20px] pr-[20px]  rounded-[5px] font1 font-[600] text-[14px] md:text-[16px] leading-6 text-text2 w-fit">Start 14 Days Free Trial</button>
        </div>
      </div>
    </div>
  )
}

export default ResultSection
