//next image
import Image from "next/image";

//next link
import Link from "next/link";


//icons
import { HiArrowRight } from "react-icons/hi2";
import {BsArrowRight} from 'react-icons/bs'


const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0">
    <Link href={'/work'} className="relative btn rounded-full border border-white/50 max-w-[170px] px-8 py-4 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
      <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
        Projects
      </span>
      <HiArrowRight className="-translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
    </Link>
  </div>;
};

export default ProjectsBtn;
