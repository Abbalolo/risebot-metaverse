import { FaLinkedinIn } from "react-icons/fa"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { GrFacebookOption } from "react-icons/gr"; 
import React from 'react';
import img1 from "../assets/download (21).png";
import img2 from "../assets/download (22).png";
import img3 from "../assets/download (23).png";
import img4 from "../assets/download (24).png";
import img5 from "../assets/download (25).png";
import img6 from "../assets/download (26).png";
import img7 from "../assets/download (27).png";
import img8 from "../assets/download (28).png";
import Image from "next/image";

interface TeamTypes {
    name: string;
    title: string;
    image: any;
    socials: any[];
}

const teams: TeamTypes[] = [
    {
        name: "Darrell Steward",
        title: "Senior Designer",
        image: img1,
        socials: [<GrFacebookOption key="fb" />, <AiOutlineTwitter key="tw" />, <FaLinkedinIn key="li" />],
    },
    {
        name: "Kristin Watson",
        title: "Senior Designer",
        image: img2,
        socials: [<GrFacebookOption key="fb" />, <AiOutlineTwitter key="tw" />, <FaLinkedinIn key="li" />],
    },
    {
        name: "Jacob Jones",
        title: "Senior Designer",
        image: img3,
        socials: [<GrFacebookOption key="fb" />, <AiOutlineTwitter key="tw" />, <FaLinkedinIn key="li" />],
    },
    {
        name: "Jane Cooper",
        title: "Senior Designer",
        image: img4,
        socials: [<GrFacebookOption key="fb" />, <AiOutlineTwitter key="tw" />, <FaLinkedinIn key="li" />],
    },
    {
        name: "Dianne Russell",
        title: "Senior Designer",
        image: img5,
        socials: [<GrFacebookOption key="fb" />, <AiOutlineTwitter key="tw" />, <FaLinkedinIn key="li" />],
    },
    {
        name: "Devon Lane",
        title: "Senior Designer",
        image: img6,
        socials: [<GrFacebookOption key="fb" />, <AiOutlineTwitter key="tw" />, <FaLinkedinIn key="li" />],
    },
    {
        name: "Robert Fox",
        title: "Senior Designer",
        image: img7,
        socials: [<GrFacebookOption key="fb" />, <AiOutlineTwitter key="tw" />, <FaLinkedinIn key="li" />],
    },
    {
        name: "Kristin Watson",
        title: "Senior Designer",
        image: img8,
        socials: [<GrFacebookOption key="fb" />, <AiOutlineTwitter key="tw" />, <FaLinkedinIn key="li" />],
    },
];

function MyTeam() {
    return (
        <div className="grid grid-cols-1 place-items-center  md:grid-cols-4 gap-28 md:gap-10 md:gap-y-20 mt-28">
            {teams.map((team, index) => (
                <div key={index} className="border border-gray-700 bg-[#1E2835] w-[60%] h-[35vh] md:w-full  flex flex-col  justify-center items-center rounded-md ">
                   <div className=" flex flex-col justify-center items-center -translate-y-12 gap-3">
                    
                    <div className="glass-polygon3  w-[140px] shadow-md h-[140px]  flex justify-center items-center bg-[#132a47]">
                        <Image src={team.image} className="h-full w-full object-contain" alt={team.title} />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                    <h3 className="font-extrabold text-xl text-white">{team.name}</h3>
                    <p className="text-sm text-gray-400">{team.title}</p>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        {team.socials.map((icon, index) => (
                            <div key={index} className="w-[40px] h-[40px] border border-gray-400 text-gray-400 rounded-full flex items-center justify-center text-xl">
                                {icon}
                            </div>
                        ))}
                    </div>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default MyTeam;
