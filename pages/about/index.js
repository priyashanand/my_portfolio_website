"client-side"
//scroll add
import React, {useEffect,useState} from "react";
import { useRouter } from "next/router";

// icons
import { DiJsBadge } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiGithub } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { DiLinux } from "react-icons/di";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";




//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming Languages',
        // eslint-disable-next-line react/jsx-key
        icons: [ <DiJsBadge />, <FaHtml5 />,<DiMongodb />,<DiNodejsSmall />, <FaCss3 />, <FaReact />, <TbBrandThreejs />, <SiExpress />
],
      },
      {
        title: 'Tools and Utilities',
        // eslint-disable-next-line react/jsx-key
        icons: [ <DiGit />,<DiGithub />,<SiMysql />,<DiLinux />],
      },
    ],
  },
  // {
  //   title: 'accomplishments/positon of responsibility',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: 'experience',
    info: [
      {
        title: 'Samsung Research',
        subheading: 'IOT Intern',
        description: 'this is whayt jshfaiuef uashgfdias iuhsf iouahsdf nioahbsdf iusghbdf jhgbdf uih iulhbsdf ibsdf created socket programs for raspberry pi',
        stage: 'May 2023 - present',
      },
      {
        title: 'Placement cell Coordinator IIITDM Kurnool',
        stage: '2024 - present',
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'Indian Institute of Information Technology Design and Manuafcturing Kurnool',
        stage: '2021 - present',
      },
      {
        title: 'Delhi Public School Ranchi',
        stage: '2018 - 2020',
      },
    ],
  },
];

//components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

//framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

//counter
import CountUp from "react-countup";

const About = () => {
  const router = useRouter();

  const [index, setIndex] = useState(0);
  console.log(index);
  return <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />
    {/* avatar */}
    <motion.div variants={fadeIn('right', 0.1)} initial='hidden' animate='show' exit='hidden' className="hidden xl:flex absolute bottom-0 -left-[320px]">
      <Avatar/>
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* text */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 variants={fadeIn('right', 0.1)} initial='hidden' animate='show' exit='hidden' className="h2">
          Captivating <span className=" text-accent">stories</span> birth magnificent designs.
        </motion.h2>
        <motion.p variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden'>This is a glimpse into my journey, showcasing my skills and passion for development. Eager to learn, grow, and collaborate with fellow enthusiasts in the field.</motion.p>
        {/* counters */}
        <motion.div variants={fadeIn('right', 0.3)} initial='hidden' animate='show' exit='hidden' className=" hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 py-3">
          <div className=" flex xl:gap-x-6">
            {/* projects */}
            <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={4} duration={5} /> 
              </div>
              <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Finished Projects
              </div>
            </div>
          </div>
          {/* leetcode */}
          <div>
            {/* experience */}
            <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2 px-4">
                <CountUp start={0} end={220} duration={5} /> +
              </div>
              <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] px-4">
                LeetCode problems solved
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">   
          {aboutData.map((item, itemIndex)=>{
            return( 
                <div 
                key={itemIndex}
                 className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        {/* ..................................................................................... */}
        <div className="py-2 xl:py-6 flex flex-col gap-y-4 xl:gap-y-6 items-center xl:items-start">
        {aboutData[index].info.map((item, itemIndex) => {
          return (
            <div 
              key={itemIndex} 
              className="flex-1  flex-col gap-y-2 md:flex-row max-w-full p-4 border border-white/60 rounded-md text-white/80"
            >
              {/* Box with heading, subheading, data, and description */}
              <div className=" flex-col md:flex-row w-full gap-x-4">

                {/* Heading */}
                <div className="font-bold text-lg mb-2 md:mb-0 text-white">
                  {item.title}
                </div>

                {/* Subheading */}
                <div className="font-semibold text-md mb-2 md:mb-0 text-white/70">
                  {item.subheading}
                </div>

                {/* Data */}
                <div className="font-light text-sm text-white/60">
                  {item.stage}
                </div>

              </div>

              {/* Description */}
              <div className="mt-2 text-white/50">
                {item.description}
              </div>

              {/* Icons */}
              {item.icons?.length > 0 && (
                <div className="flex gap-x-4 mt-4">
                  {item.icons.map((icon, iconIndex) => {
                    return <div key={iconIndex} className="text-2xl text-white">{icon}</div>;
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
