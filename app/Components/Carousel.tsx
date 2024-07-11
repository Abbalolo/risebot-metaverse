import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"; 
import { SlSocialStumbleupon, SlSocialTwitter, SlSocialSteam, SlSocialReddit, SlSocialPintarest } from "react-icons/sl"; 
import download6 from "../assets/download (6).png";
import download7 from "../assets/download (7).png";
import download8 from "../assets/download (8).png";
import download9 from "../assets/download (9).png";
import Image from "next/image";

interface ItemProps {
  title: string;
  image: any;
  dec: string;
  total: string;
  valuation: string;
  base: string;
  socials: JSX.Element[];
}

const items: ItemProps[] = [
  {
    title: "Iron Blade",
    image: download6,
    dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,",
    total: "100k",
    valuation: "23M",
    base: "$0",
    socials: [<SlSocialPintarest key={0} />, <SlSocialReddit key={1} />, <SlSocialSteam key={2} />, <SlSocialTwitter key={3} />, <SlSocialStumbleupon key={4} />]
  },
  {
    title: "Iron Blade",
    image: download7,
    dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,",
    total: "100k",
    valuation: "23M",
    base: "$0",
    socials: [<SlSocialPintarest key={0} />, <SlSocialReddit key={1} />, <SlSocialSteam key={2} />, <SlSocialTwitter key={3} />, <SlSocialStumbleupon key={4} />]
  },
  {
    title: "Iron Blade",
    image: download8,
    dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,",
    total: "100k",
    valuation: "23M",
    base: "$0",
    socials: [<SlSocialPintarest key={0} />, <SlSocialReddit key={1} />, <SlSocialSteam key={2} />, <SlSocialTwitter key={3} />, <SlSocialStumbleupon key={4} />]
  },
  {
    title: "Zombie plant 2",
    image: download9,
    dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,",
    total: "100k",
    valuation: "23M",
    base: "$0",
    socials: [<SlSocialPintarest key={0} />, <SlSocialReddit key={1} />, <SlSocialSteam key={2} />, <SlSocialTwitter key={3} />, <SlSocialStumbleupon key={4} />]
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div className=" my-5 relative md:px-10 mt-10">
      <div className=" md:grid lg:grid-cols-4 md:grid-cols-3 flex items-center gap-4 relative md:px-5 pt-10 overflow-hidden" >
        {items.map((item, index) => (
          <div key={index} className="carousel-item glassbg px-3 pb-5 pt-16 flex flex-col gap-3 w-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <Image src={item.image} className="w-[80px] object-contain h-full absolute -top-56 left-0 right-0 bottom-0 mx-auto" alt="photo" />
            <h3 className="text-xl text-white font-extrabold text-center">{item.title}</h3>
            <p className="text-gray-400 text-sm text-center">{item.dec}</p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm">
                <div className="bg-[#171F29] text-gray-400 py-2 pl-4 polygon2-left w-full">Total raise:</div>
                <div className="bg-[#86FF00] py-2 pl-4 polygon2-right w-[50%]">{item.total}</div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="bg-[#171F29] text-gray-400 py-2 pl-4 polygon2-left w-full">Valuation:</div>
                <div className="bg-[#86FF00] py-2 pl-4 polygon2-right w-[50%]">{item.valuation}</div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="bg-[#171F29] text-gray-400 py-2 pl-4 polygon2-left w-full">Base case:</div>
                <div className="bg-[#86FF00] py-2 pl-4 polygon2-right w-[50%]">{item.base}</div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-3 px-5">
              <span className="text-gray-400 text-sm">Socials</span>
              <div className="flex items-center justify-center gap-2">
                {item.socials.map((icon, index) => (
                  <div key={index} className="w-[35px] h-[35px] border border-gray-400 text-gray-400 rounded-full flex items-center justify-center">{icon}</div>
                ))}
              </div>
              <button className="polygon font-semibold text-white bg-[#798DA3] hover:bg-[#86FF00] px-6 py-2 mt-2 transition-all duration-300">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-prev absolute left-0 top-44 text-white w-[40px] h-[40px] rounded-full items-center justify-center flex lg:hidden  glassbg" onClick={previousSlide}>
        <AiOutlineArrowLeft />
      </button>

      <button className="carousel-next absolute right-0 w-[40px] h-[40px] top-44 rounded-full items-center justify-center text-white glassbg lg:hidden flex" onClick={nextSlide}>
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
