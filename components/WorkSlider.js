// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
          proj_link:"google.com",
        }
        // {
        //   title: 'title',
        //   path: '/thumb4.jpg',
        // },
        // {
        //   title: 'title',
        //   path: '/thumb4.jpg',
        // },
        // {
        //   title: 'title',
        //   path: '/thumb4.jpg',
        // },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        // {
        //   title: 'title',
        //   path: '/thumb1.jpg',
        // },
        // {
        //   title: 'title',
        //   path: '/thumb2.jpg',
        // },
        // {
        //   title: 'title',
        //   path: '/thumb3.jpg',
        // },
      ],
    },
  ],
};

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'

//import swiper styles 
import 'swiper/css' 
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

//import required modules
import {Pagination, Navigation, Scrollbar} from 'swiper'

//icons
import {BsArrowRight} from 'react-icons/bs'

//next image
import Image from 'next/image';

//next link
import Link from "next/link";

const WorkSlider = () => {
  return <Swiper 
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    navigation={{
      clickable: true,
    }}
    modules={[Navigation, Pagination]}
    // scrollbar={{ draggable: true }}
    className=' h-[240px] sm:h-[480px]'
  >
    {workSlides.slides.map((slide,index)=>{
      return <SwiperSlide key={index}>
        <div className='grid grid-cols-1 grid-rows-1 gap-4 cursor-pointer'>
          {slide.images.map((image, index) => {
            return <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
              <div className=' flex items-center justify-center relative overflow-hidden mt-12 rounded-md'> 
                {/* image */}
                <Image src={image.path} width={670} height={300} alt=''/>

                {/* overlay gradient */}
                <div className='absolute inset-0 bg-gradient-to-l from-transparent via- [#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>

                {/* title */}
                <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                  <Link href='https://www.google.com' className='flex items-center gap-x-2 text-[13px] [0.2em]'>
                    {/* title part 1 */}
                    <div className='delay-100'>LIVE</div>
                    {/* title part 2 */}
                    <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                      PROJECT
                    </div>
                    {/* icon */}
                    <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                      <BsArrowRight />
                    </div>
                  </Link>
                  <Link href="https://www.google.com" className='flex items-center mt-5 gap-x-2 text-[13px] [0.2em]'>
                    {/* title part 1 */}
                    <div className='delay-100'>GITHUB</div>
                    {/* title part 2 */}
                    <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                      LINK 
                    </div>
                    {/* icon */}
                    <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                      <BsArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          })}
        </div>
      </SwiperSlide>
      })
    }
  </Swiper>;
};

export default WorkSlider;
