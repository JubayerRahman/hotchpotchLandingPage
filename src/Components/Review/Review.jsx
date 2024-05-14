import { FaTwitter } from "react-icons/fa";
import review1 from  "../../assets/review1.png"
import review2 from  "../../assets/review2.png"
import review3 from  "../../assets/review3.png"
import review4 from  "../../assets/review4.png"
import review5 from  "../../assets/review5.png"
import review6 from  "../../assets/review6.png"
import review7 from  "../../assets/review7.png"
import review8 from  "../../assets/review8.png"
import { useEffect } from "react";

// animations
import AOS from "aos";
import "aos/dist/aos.css";

const Review = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      
  return (
    <div className='reviewBG pt-[100px] pb-[100px] border-b-[1px] border-text1 border-opacity-70'>
      <div className='container mx-auto text-center p-[10px]'>
        <h1 data-aos="flip-up" className='font2 text-text2 text-[30px] md:text-[42px] leading-[36px] md:leading-[48px] font-[600]'>What our customers say</h1>
        <p  data-aos="flip-up" className='font1 text-[16px] md:text-[18px] leading-5 md:leading-7 text-text2 opacity-70 mt-[20px] md:w-[40%] mx-auto'>Read why thousands of marketers, writers, and entrepreneurs love us so much.</p>
        <div className="review p-[10px] mt-[50px] flex flex-col md:flex-row flex-wrap gap-4 ">
            <div data-aos="flip-left" className="review1 p-[20px] rounded-[5px] bg-white w-[100%] md:w-[24%] h-fit">
                <div className="idInfo flex justify-between items-center">
                    <div className="nameImg flex gap-3">
                        <img className="w-[43px] h-[43px] rounded-full object-cover" src={review1} alt="" />
                        <div className="name text-left">
                            <h1 className="font1 font-[600] text-[16px] leading-6 text-black">Darrell Steward</h1>
                            <p className="font1 text-[13px] leading-5 text-black opacity-70">@darrels</p>
                        </div>
                    </div>
                    <h1 className="text-[18px] text-[#0EA5E9]"><FaTwitter/></h1>
                </div>
                <p className="font1 text-[16px] leading-6 text-left pt-[20px] pb-[20px] ">You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save. <br /> <span className="text-[#0EA5E9]">#another</span></p>
            </div>
            <div data-aos="flip-left" className="review2 p-[20px] rounded-[5px] bg-white w-[100%] md:w-[24%] h-fit">
                <div className="idInfo flex justify-between items-center">
                    <div className="nameImg flex gap-3">
                        <img className="w-[43px] h-[43px] rounded-full object-cover" src={review2} alt="" />
                        <div className="name text-left">
                            <h1 className="font1 font-[600] text-[16px] leading-6 text-black">Leslie Alexander</h1>
                            <p className="font1 text-[13px] leading-5 text-black opacity-70">@lesslie</p>
                        </div>
                    </div>
                    <h1 className="text-[18px] text-[#0EA5E9]"><FaTwitter/></h1>
                </div>
                <p className="font1 text-[16px] leading-6 text-left pt-[20px] pb-[20px] ">Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users. <br /> <span className="text-[#0EA5E9]">#postcrafts</span></p>
            </div>
            <div data-aos="flip-left" className="review3 p-[20px] rounded-[5px] bg-white w-[100%] md:w-[24%] h-fit">
                <div className="idInfo flex justify-between items-center">
                    <div className="nameImg flex gap-3">
                        <img className="w-[43px] h-[43px] rounded-full object-cover" src={review3} alt="" />
                        <div className="name text-left">
                            <h1 className="font1 font-[600] text-[16px] leading-6 text-black">Jenny Wilson</h1>
                            <p className="font1 text-[13px] leading-5 text-black opacity-70">@jennywilson</p>
                        </div>
                    </div>
                    <h1 className="text-[18px] text-[#0EA5E9]"><FaTwitter/></h1>
                </div>
                <p className="font1 text-[16px] leading-6 text-left pt-[20px] pb-[20px] ">This is a top quality product. No need to think twice before making it live on web. <br /> <span className="text-[#0EA5E9]">#make_it_fast</span></p>
            </div>
            <div data-aos="flip-left" className="review4 p-[20px] rounded-[5px] bg-white w-[100%] md:w-[24%] h-fit">
                <div className="idInfo flex justify-between items-center">
                    <div className="nameImg flex gap-3">
                        <img className="w-[43px] h-[43px] rounded-full object-cover" src={review4} alt="" />
                        <div className="name text-left">
                            <h1 className="font1 font-[600] text-[16px] leading-6 text-black">Kristin Watson</h1>
                            <p className="font1 text-[13px] leading-5 text-black opacity-70">@kristinwatson2</p>
                        </div>
                    </div>
                    <h1 className="text-[18px] text-[#0EA5E9]"><FaTwitter/></h1>
                </div>
                <p className="font1 text-[16px] leading-6 text-left pt-[20px] pb-[20px] ">Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months. <br /> <span className="text-[#0EA5E9]">#postcrafts</span></p>
            </div>
            <div data-aos="flip-left" className="review5 p-[20px] rounded-[5px] bg-white w-[100%] md:w-[24%] h-fit">
                <div className="idInfo flex justify-between items-center">
                    <div className="nameImg flex gap-3">
                        <img className="w-[43px] h-[43px] rounded-full object-cover" src={review5} alt="" />
                        <div className="name text-left">
                            <h1 className="font1 font-[600] text-[16px] leading-6 text-black">Guy Hawkins</h1>
                            <p className="font1 text-[13px] leading-5 text-black opacity-70">@jennywilson</p>
                        </div>
                    </div>
                    <h1 className="text-[18px] text-[#0EA5E9]"><FaTwitter/></h1>
                </div>
                <p className="font1 text-[16px] leading-6 text-left pt-[20px] pb-[20px]">This is a top quality product. No need to think twice before making it live on web. <br /> <span className="text-[#0EA5E9]">#make_it_fast</span></p>
            </div>
            <div data-aos="flip-left" className="review6 p-[20px] md:mt-[-20px] rounded-[5px] bg-white w-[100%] md:w-[24%] h-fit">
                <div className="idInfo flex justify-between items-center">
                    <div className="nameImg flex gap-3">
                        <img className="w-[43px] h-[43px] rounded-full object-cover" src={review6} alt="" />
                        <div className="name text-left">
                            <h1 className="font1 font-[600] text-[16px] leading-6 text-black">Marvin McKinney</h1>
                            <p className="font1 text-[13px] leading-5 text-black opacity-70">@jennywilson</p>
                        </div>
                    </div>
                    <h1 className="text-[18px] text-[#0EA5E9]"><FaTwitter/></h1>
                </div>
                <p className="font1 text-[16px] leading-6 text-left pt-[20px] pb-[20px] ">With Postcrafts, it’s quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I’m all for the efficiency. <br /> <span className="text-[#0EA5E9]">#dev #tools</span></p>
            </div>
            <div data-aos="flip-left" className="review7 p-[20px] md:mt-[-40px] rounded-[5px] bg-white w-[100%] md:w-[24%] h-fit">
                <div className="idInfo flex justify-between items-center">
                    <div className="nameImg flex gap-3">
                        <img className="w-[43px] h-[43px] rounded-full object-cover" src={review7} alt="" />
                        <div className="name text-left">
                            <h1 className="font1 font-[600] text-[16px] leading-6 text-black">Annette Black</h1>
                            <p className="font1 text-[13px] leading-5 text-black opacity-70">@jennywilson</p>
                        </div>
                    </div>
                    <h1 className="text-[18px] text-[#0EA5E9]"><FaTwitter/></h1>
                </div>
                <p className="font1 text-[16px] leading-6 text-left pt-[20px] pb-[20px] ">You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save. <br /> <span className="text-[#0EA5E9]">#another</span></p>
            </div>
            <div data-aos="flip-left" className="review8 p-[20px] rounded-[5px] bg-white w-[100%] md:w-[24%] h-fit">
                <div className="idInfo flex justify-between items-center">
                    <div className="nameImg flex gap-3">
                        <img className="w-[43px] h-[43px] rounded-full object-cover" src={review8} alt="" />
                        <div className="name text-left">
                            <h1 className="font1 font-[600] text-[16px] leading-6 text-black">Floyd Miles</h1>
                            <p className="font1 text-[13px] leading-5 text-black opacity-70">@jennywilson</p>
                        </div>
                    </div>
                    <h1 className="text-[18px] text-[#0EA5E9]"><FaTwitter/></h1>
                </div>
                <p className="font1 text-[16px] leading-6 text-left pt-[20px] pb-[20px] ">My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save. <br /> <span className="text-[#0EA5E9]">#postcrafts</span></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Review
