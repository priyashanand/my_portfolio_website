

//next link
import Link from "next/link";


//icons
import { HiArrowRight } from "react-icons/hi2";


const Resume = () => {
  return <div className="mx-auto xl:mx-0 ">
    <Link href="https://drive.google.com/file/d/18OeWnl9TBFiodnoyc59Z-QkJHOGSzd92/view?usp=drive_link" className="relative btn rounded-full border border-white/50 max-w-[170px] px-8 py-4 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
      <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
        Resume
      </span>
      <HiArrowRight className="-translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
    </Link>    
  </div>;
};

export default Resume;
