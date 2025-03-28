
/* eslint-disable react/no-unescaped-entities */
//scroll add
import React, {useEffect} from "react";
import { useRouter } from "next/router";

//componenets
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

//framer-motion
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';


const Work = () => {
  const router = useRouter();

  return <div className=' h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div class="container mx-auto">
      <div className=' flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
        <div className=' text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className=' h2 xl:mt-8'>My Work<span className=' text-accent'>.</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className=' mb-4 max-w-[400px] mx-auto lg:mx-0'>
            As an undergraduate B.Tech student passionate about development, I'm excited to exhibit my projects and keen to learn from experienced professionals. Let's explore and collaborate!
          </motion.p>
        </div>
        <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className=' w-full xl:max-w-[65%]'>
          {/* slider */}
          <WorkSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Work;
