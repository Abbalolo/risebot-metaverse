import React from 'react';
import Image from 'next/image';
import logo from "../assets/download.png";
import folder from '../assets/download (13).png';
import cyber from '../assets/download (14).png';
import money from '../assets/download (15).png';
import cloud from '../assets/download (17).png';
import icon1 from '../assets/color_1.png';
import icon2 from '../assets/color_2.png';
import icon3 from '../assets/color_3.png';
import icon4 from '../assets/color_4.png';
import icon5 from '../assets/color_5.png';
import icon6 from '../assets/color_6.png';
import icon7 from '../assets/color_7.png';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface LeftType {
    title: string;
    image: any;
    figure: string;
}

interface ChartData {
    name: string;
    image: any;
    figure: string;
}

function StatisticChart() {
    const leftData: LeftType[] = [
        {
            title: 'Funded Projects',
            image: folder,
            figure: '359',
        },
        {
            title: 'Unique Participants',
            image: cyber,
            figure: '742',
        },
        {
            title: 'Raised Capital',
            image: money,
            figure: '$17m',
        },
        {
            title: 'Funded Projects',
            image: cloud,
            figure: '$32m',
        },
    ];

    const chartData: ChartData[] = [
        {
            name: 'Team',
            image: icon1,
            figure: '7.5%',
        },
        {
            name: 'Staking',
            image: icon2,
            figure: '9.5%',
        },
        {
            name: 'Advisors',
            image: icon3,
            figure: '10.0%',
        },
        {
            name: 'Liquidity',
            image: icon4,
            figure: '12.0%',
        },
        {
            name: 'Ecosystem',
            image: icon5,
            figure: '16.33%',
        },
        {
            name: 'Marketing',
            image: icon6,
            figure: '30.5%',
        },
        {
            name: 'Private Sale',
            image: icon7,
            figure: '30.0%',
        },
    ];

    const data = {
        // labels: chartData.map(item => item.name),
        datasets: [{ 
            label: 'Poll',
            data: chartData.map(item => parseFloat(item.figure)),
            backgroundColor: ['#ACE5F2', '#AFC5FF', '#FFFFCC', '#CDBDF3', '#E89F8E', '#6574EB'],
            borderColor: ['#ACE5F2', '#AFC5FF', '#FFFFCC', '#CDBDF3', '#E89F8E', '#6574EB']
        }]
    };

    const options = {
     
    };

    return (
        <div className='gap-10  flex flex-col md:flex-row md:items-center md:justify-around'>
            <div className="flex flex-col  gap-5 ">
                {leftData.map((item, index) => (
                    <div key={index} className="flex items-center gap-5">
                        <div className="glass-polygon2 w-[75px] shadow-md h-[75px] p-5 flex justify-center items-center ">
                            <Image src={item.image} className='h-full w-full object-contain' alt={item.title} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className='text-sm text-gray-500'>{item.title}</h3>
                            <p className='text-3xl text-[#86FF00] font-extrabold'>{item.figure}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden md:flex h-[360px] w-[1px] bg-gray-500"></div>
            
            <div className="flex gap-5 flex-col md:flex-row md:items-center">
            <div className="grid md:grid-cols-1 grid-cols-2 gap-3">
                {chartData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-[12px]">
                        <Image src={item.image} className='h-[35px] w-[35px] md:h-[40px] md:w-[40px]     object-contain' alt={item.name} />
                        <div className="flex flex-col">
                            <h3 className='text-gray-500'>{item.name}</h3>
                            <p className='text-white'>{item.figure}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full h-full relative'>
                <Doughnut
                    data={data}
                    options={options}
                   
                />
                <div className="flex justify-center items-center flex-col absolute top-[45%] left-[32%] gap-1">
                  <Image src={logo} className="w-32" width={200} height={200} alt="risebot logo" />
<p className='text-[12px] text-gray-400'>Statstics token</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default StatisticChart;
