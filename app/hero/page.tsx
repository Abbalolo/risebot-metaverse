"use client";
import { IoIosArrowForward } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Image from "next/image";
import backImage from "../assets/bg-slider.png";
import bg_inner_slider from "../assets/bg_inner_slider.png";
import heromanon from "../assets/heromanon.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import illustrationleft from "../assets/download (29).png";
import download4 from "../assets/download(4).png";
import bg_project from "../assets/bg_project.png";
import bg_project2 from "../assets/bg_project2.png";
import key from "../assets/download (10).png";
import wallet from "../assets/download (11).png";
import coin from "../assets/download (12).png";
import Carousel from "../Components/Carousel";
import StatisticChart from "../Components/StatisticChart";
import IgoProjects from "../Components/IgoProjects";
import MyTeam from "../Components/MyTeam";
import Clogo from "../Components/Clogo";

function Example() {
  return (
    <>
      <section className=" px-5 py-20 relative w-full h-full flex flex-col justify-center items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-[-1] backgroundb">
          <Image
            src={backImage}
            className="w-full h-full object-cover"
            alt="background image"
          />
        </div>

        {/* Content */}
        <div className="mt-10 py-10  relative z-10 flex flex-col md:flex-row items-center ">
          <div className="flex flex-col gap-3 items-start md:w-[55%]">
            <h1 className="font-extrabold text-white text-4xl md:text-7xl">
              Enter the gateway of Blockchain Gaming
            </h1>
            <p className=" text-white ">
              Visually and spatially connecting games in a seamless metaverse
              experience
            </p>
            <button className="polygon text-sm bg-[#86FF00] px-5 py-4 font-extrabold">
              EXPLORE IGO
            </button>
          </div>

          <div className=" md:mt-0 mt-10 relative md:w-[65%]">
            <Image
              className="absolute 
         -bottom-20 z-[-1] grayscale-[90%] -right-0 w-full h-full object-cover"
              src={bg_inner_slider}
              alt="bg-illustration"
            />

            <Image
              className="zoom w-[400px]  mx-auto  object-cover z-50"
              src={heromanon}
              alt="bg-illustration"
            />
            <Image
              className="anima1 absolute bottom-[-60px]  md:bottom-[10px] -left-4 md:-left-0 w-16 object-cover"
              src={icon1}
              alt="bg-illustration"
            />
            <Image
              className="anima2 absolute top-16 z-10 left-16 w-16 object-cover"
              src={icon2}
              alt="bg-illustration"
            />
            <Image
              className="anima3 absolute right-3 md:right-10 top-[120px]  w-16 object-cover"
              src={icon3}
              alt="bg-illustration"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#09121D] py-10 px-5 ">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center m-5 md:px-52">
          Featured IGO Projects Coming Soon
        </h2>

        <div className="py-10 md:ml-20 flex md:flex-row md:items-center   flex-col gap-10">
          <div className="relative">
            <Image
              src={download4}
              className="rounded-md lg:w-[100%]"
              width={500}
              height={500}
              alt="wild-west"
            />
          </div>
          <div className="glassbg flex flex-col gap-2 lg:absolute lg:right-[18%] lg:bg-[#09121D] shadow-md mx-auto border-[#2B323C]  px-5 py-8 w-[400px] rounded-lg">
            <h3 className="font-extrabold text-xl text-white">Codyfight IGO</h3>
            <p className="text-gray-500 text-sm">
              {" "}
              e assumenda excepturi tempore illum nisi magni unde id quae odio?
            </p>
            <div className="bg-[#86FF00] flex items-center justify-between  py-1 px-2 font-semibold rounded-md">
              <span className="text-black">Price: $0.4</span>
              <span className="text-black">Total sales: $4720</span>
            </div>

            <div className="mt-1">
              <h4 className="text-white font-bold ">Sale end in</h4>
              <div className="flex  items-center justify-between mt-3">
                <div className=" text-white border border-gray-600 flex items-center justify-center h-[40px] rounded-full w-[40px] font-semibold shadow-md p-6">
                  1
                </div>
                <BiDotsVerticalRounded className="text-gray-600 text-xl" />
                <div className=" text-white border border-gray-600 flex items-center justify-center h-[40px] rounded-full w-[40px] font-semibold shadow-md p-6">
                  1
                </div>
                <BiDotsVerticalRounded className="text-gray-600 text-xl" />
                <div className=" text-white border border-gray-600 flex items-center justify-center h-[40px] rounded-full w-[40px] font-semibold shadow-md p-6">
                  1
                </div>
                <BiDotsVerticalRounded className="text-gray-600 text-xl" />
                <div className=" text-white border border-gray-600 flex items-center justify-center h-[40px] rounded-full w-[40px] font-semibold shadow-md p-6">
                  1
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-5 py-10 relative w-full h-full flex flex-col justify-center items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-[-1] backgroundb">
          <Image
            src={bg_project}
            className="w-full h-full object-cover"
            alt="background image"
          />
        </div>

        {/* Content */}
        <div className="w-full relative z-10 flex flex-col ">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center m-5  md:px-52">
            Projects That Promise A Lot Of Potential
          </h2>
          <div className="">
            <Carousel />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:py-20 py-10">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white text-center m-5  md:px-[320px]">
            Easy To Join IGO With 3 Steps
          </h3>

          <div className="mt-5 flex flex-col md:flex-row md:divide-x-2 md:divide-gray-700 md:w-[70%] divide-b-red-500">
            <div className="flex flex-col items-center justify-center relative">
              <div className="group flex flex-col justify-center items-center gap-3  p-5 relative pb-16 overflow-hidden transition-colors duration-300">
                <Image
                  src={key}
                  className="w-[70px] h-full object-cover"
                  alt="key"
                />
                <h3 className="md:text-xl font-extrabold text-white">
                  Submit KYC
                </h3>
                <p className="text-gray-400 text-sm text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                  accusamus debitis iste libero
                </p>

                <span className="text-gray-800 group-hover:text-white font-extrabold text-8xl absolute -bottom-10">
                  01
                </span>
              </div>
              <div className="border border-gray-700 border-t-0 border-r-0 border-l-0 w-full flex flex-col items-center justify-center absolute bottom-0 ">
                <div className="bg-[#86FF00] p-1 text-black text-sm  absolute  rounded-full">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center relative">
              <div className="group flex flex-col justify-center items-center gap-3  p-5 relative pb-16 overflow-hidden transition-colors duration-300">
                <Image
                  src={wallet}
                  className="w-[70px] h-full object-cover"
                  alt="key"
                />
                <h3 className="md:text-xl font-extrabold text-white">
                  Verify Wallet
                </h3>
                <p className="text-gray-400 text-sm text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                  accusamus debitis iste libero
                </p>

                <span className="text-gray-800 group-hover:text-white font-extrabold text-8xl absolute -bottom-10">
                  02
                </span>
              </div>
              <div className="border border-gray-700 border-t-0 border-r-0 border-l-0 w-full flex flex-col items-center justify-center absolute bottom-0 ">
                <div className="bg-[#86FF00] p-1 text-black text-sm  absolute  rounded-full">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center relative">
              <div className="group flex flex-col justify-center items-center gap-3  p-5 relative pb-16 overflow-hidden transition-colors duration-300">
                <Image
                  src={coin}
                  className="w-[70px] h-full object-cover"
                  alt="key"
                />
                <h3 className="md:text-xl font-extrabold text-white">
                  Start Staking
                </h3>
                <p className="text-gray-400 text-sm text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                  accusamus debitis iste libero
                </p>

                <span className="text-gray-800 group-hover:text-white font-extrabold text-8xl absolute -bottom-10">
                  03
                </span>
              </div>
              <div className="border border-gray-700 border-t-0 border-r-0 border-l-0 w-full flex flex-col items-center justify-center absolute bottom-0 ">
                <div className="bg-[#86FF00] p-1 text-black text-sm  absolute  rounded-full">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 relative">
        <div className="absolute inset-0 z-[-1] backgroundb2">
          <Image
            src={bg_project2}
            className="w-full h-full object-cover"
            alt="background image"
          />
        </div>
        <div className="">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10  md:px-[320px]">
            Statistics Token
          </h3>
          <StatisticChart />
        </div>
      </section>

      <section className="px-5 py-10 relative bg-[#171F29]">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center m-5 md:px-52">
          IGO Projects Have Been Excellently Successful
        </h2>

        <IgoProjects />
      </section>

      <section className="px-5 py-10 md:px-28 md:py-16 relative bg-[#171F29]">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center m-5 md:px-52">
          Meet The Team
        </h2>

        <MyTeam />
      </section>

      <section className="px-5 py-10 relative bg-[#09121D]">
        <div className="absolute inset-0 z-[-1] backgroundb">
          <Image
            src={backImage}
            className="w-full h-full object-cover"
            alt="background image"
          />
        </div>

        <div className="">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center m-5 md:px-52">
            Our Partners
          </h2>
          <Clogo />
        </div>

        <div className="mt-20 md:flex md:justify-between md:items-center">
          <div className=" absolute  flex justify-center items-center">
          <Image src={bg_project2} className=" w-[90%] rounded-lg " alt="bg"/>
          </div>
         
          <div className="md:px-20">
            <h3 className="text-white font-extrabold text-4xl md:text-5xl">
              Launch On Risebot
            </h3>
            <p className="text-white mt-3">Full support in project incubation</p>
            <button className="polygon font-extrabold bg-[#86FF00] mt-5 hover:bg-[#798DA3] px-5 py-3 ">
              APPLY NOW
            </button>
          
          </div>

          <div className="">
          <Image
              src={illustrationleft}
              className="slideIn mt-10"
              alt="cartoon moving left right"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Example;
