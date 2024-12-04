//Links
import Link from "next/link";

//icons
import { RiLinkedinLine, RiGithubLine, RiInstagramLine , RiDiscordLine} from 'react-icons/ri';

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'http://github.com/priyashanand'} className="hover:text-accent transition-all duration-300">
      <RiGithubLine/>
    </Link>
    <Link href={'https://www.linkedin.com/in/priyash-anand-106348223/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine/>
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiDiscordLine/>
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine/>
    </Link>
    
  </div>;
};

export default Socials;
