import { useEffect } from "react"
import toolsIcon1 from "../../assets/toolsIcon1.png"
import toolsIcon2 from "../../assets/toolsIcon2.png"
import toolsIcon3 from "../../assets/toolsIcon3.png"
import toolsIcon4 from "../../assets/toolsIcon4.png"
import toolsIcon5 from "../../assets/toolsIcon5.png"

// animations
import AOS from "aos";
import "aos/dist/aos.css";

const Tools = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div className="container mx-auto my-[50px] text-center p-[10px] border-b-[1px] border-text1 border-opacity-70">
      <h1 data-aos="flip-down" className='font2 font-[600] text-[30px] md:text-[42px] leading-[34px] md:leading-[48px] text-text2'>54 exciting writing tools</h1>
      <p data-aos="flip-down" className=' md:w-[40%] mt-[20px] mx-auto font1 font-[400] text-[14px] md:text-[18px] leading-5 md:leading-7 opacity-70 text-text2'>AI engines take information from various sources and read them like a human would do.</p>

      <div className="boxs grid grid-cols-1 md:grid-cols-4 gap-5 mt-[50px] p-[10px]">
        <div data-aos="flip-down" className="box1 rounded-[10px] bg-[#282A37] p-[20px] flex gap-4 items-start">
            <img className="w-[34px] h-[34px]" src={toolsIcon1} alt="" />
            <div className="data text-text2 text-left">
                <h1 className="font1 font-[600] text-[16px] leading-6">Blog Headlines</h1>
                <p className="font1 text-[14px] leading-[20px] opacity-70 mt-[20px]">Write a better blog title with our A.I tool.</p>
            </div>
        </div>
        <div data-aos="flip-down" className="box2 rounded-[10px] bg-[#282A37] p-[20px] flex gap-4 items-start">
            <img className="w-[34px] h-[34px]" src={toolsIcon2} alt="" />
            <div className="data text-text2 text-left">
                <h1 className="font1 font-[600] text-[16px] leading-6">Blog Intros</h1>
                <p className="font1 text-[14px] leading-[20px] opacity-70 mt-[20px]">Generate a paragraph of blog content using Blog Intros tool</p>
            </div>
        </div>
        <div data-aos="flip-down" className="box3 rounded-[10px] bg-[#282A37] p-[20px] flex gap-4 items-start">
            <img className="w-[34px] h-[34px]" src={toolsIcon3} alt="" />
            <div className="data text-text2 text-left">
                <h1 className="font1 font-[600] text-[16px] leading-6">Blog Outline</h1>
                <p className="font1 text-[14px] leading-[20px] opacity-70 mt-[20px]">Need an attention-grabbing headline for your article?</p>
            </div>
        </div>
        <div data-aos="flip-down" className="box4 rounded-[10px] bg-[#282A37] p-[20px] flex gap-4 items-start">
            <img className="w-[34px] h-[34px]" src={toolsIcon4} alt="" />
            <div className="data text-text2 text-left">
                <h1 className="font1 font-[600] text-[16px] leading-6">Blog Conclusions</h1>
                <p className="font1 text-[14px] leading-[20px] opacity-70 mt-[20px]">Write a better conclusions with AI writing tool.</p>
            </div>
        </div>
        <div data-aos="flip-down" className="box5 rounded-[10px] bg-[#282A37] p-[20px] flex gap-4 items-start">
            <img className="w-[34px] h-[34px]" src={toolsIcon5} alt="" />
            <div className="data text-text2 text-left">
                <h1 className="font1 font-[600] text-[16px] leading-6">Content Rewriter</h1>
                <p className="font1 text-[14px] leading-[20px] opacity-70 mt-[20px]">Get AI writer to rewrite your sentence in a different way.</p>
            </div>
        </div>
        <div data-aos="flip-down" className="box6 rounded-[10px] bg-[#282A37] p-[20px] flex gap-4 items-start">
            <img className="w-[34px] h-[34px]" src={toolsIcon2} alt="" />
            <div className="data text-text2 text-left">
                <h1 className="font1 font-[600] text-[16px] leading-6">Product Description</h1>
                <p className="font1 text-[14px] leading-[20px] opacity-70 mt-[20px]">Need an attention-grabbing headline for your article?</p>
            </div>
        </div>
        <div data-aos="flip-down" className="box7 rounded-[10px] bg-[#282A37] p-[20px] flex gap-4 items-start">
            <img className="w-[34px] h-[34px]" src={toolsIcon3} alt="" />
            <div className="data text-text2 text-left">
                <h1 className="font1 font-[600] text-[16px] leading-6">PAS Copywriting Formula</h1>
                <p className="font1 text-[14px] leading-[20px] opacity-70 mt-[20px]">Get AI writer to rewrite your sentence in a different way.</p>
            </div>
        </div>
        <div data-aos="flip-down" className="box8 rounded-[10px] bg-[#282A37] p-[20px] flex gap-4 items-start">
            <img className="w-[34px] h-[34px]" src={toolsIcon4} alt="" />
            <div className="data text-text2 text-left">
                <h1 className="font1 font-[600] text-[16px] leading-6">Company About Us</h1>
                <p className="font1 text-[14px] leading-[20px] opacity-70 mt-[20px]">Write a better blog title with our AI tool.</p>
            </div>
        </div>
      </div>
      <h1 data-aos="zoom-in-up" className="font1 font-[600] text-text2 text-[14px] md:text-[16px] leading-6 mt-[50px] cursor-pointer mb-[30px]">See all 54 available tools</h1>
    </div>
  )
}

export default Tools
