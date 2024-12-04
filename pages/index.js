"client-side"
//scroll add
import React, {useEffect} from "react";
import { useRouter } from "next/router";

// next image
import Image from "next/image";

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import Resume from '../components/Resume'

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from '../variants'

const Home = () => {
  const router = useRouter();

  return <div className="bg-primary/60 h-full">
    {/* text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        {/* title */}
        <motion.h1 variants={fadeIn('down', 0.1)} initial='hidden' animate='show' exit='hidden' className="h1">
          Transforming Ideas <br/> Into <span className="text-accent">Digital Reality</span>
        </motion.h1>
        {/* subtitle */}
        <motion.p variants={fadeIn('down', 0.15)} initial='hidden' animate='show' exit='hidden' className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-10"> An aspiring software developer with keen intrested in backend development and learning new technologies. Committed to crafting efficient solutions, staying updated, and making impactful contributions to software development.
        </motion.p>
        {/* btn */}
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn/>
        </div>
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn/>
        </div>
        <div className="flex space-x-4">
          <motion.div variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className=" z-10">
            <ProjectsBtn/>
          </motion.div>
          <motion.div variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className=" z-10">
            <Resume/>
          </motion.div>
        </div>
      </div>
    </div> 
    {/* image */}
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      {/* bg image */}
      <motion.div variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></motion.div>
      {/* particle */}
      <motion.div variants={fadeIn('down', 0.45)} initial='hidden' animate='show' exit='hidden'><ParticlesContainer /></motion.div>
      {/* avatar */}
      <motion.div variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' transition={{duration:'1', ease:'easeInOut'}} className="w-full h-full max-w-[753px] max-h-[430px] absolute -bottom-32 lg:bottom-0 lg:left-[40%]">
        <Avatar/>
      </motion.div>
    </div>
  </div>;
};

export default Home;
