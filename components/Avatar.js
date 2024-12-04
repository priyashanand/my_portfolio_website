//next image
import Image from "next/image";


const Avatar = () => {
  return (<div className="hidden xl:flex xl:max-w-none ">
    <Image src={'/avatar111.png'} width={753} height={430} alt="" 
    className="translate-z-0 w-full h-full"/>
  </div>);
};

export default Avatar;
