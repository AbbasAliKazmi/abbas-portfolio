import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';




const Work = () => {
  return ( 
    <section className='section' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
           variants={fadeIn('right', 0.2)}
           initial='hidden'
           whileInView={"show"}
           viewport={{ once: false, amount:0.3}}
           className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-light text-accent'>
                My Latest<br />
                Work.
              </h2>
              <p className='max-w-sm mb-16'>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nobis inventore excepturi,
                officiis fugit quos exercitationem quis repellendus accusantium?
              </p>
              <button className='btn btn-sm'>View All Projects</button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transaction-all dutation-500' src={Img1} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                <span className='text-gradient'>Bootstrap Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 '>
                <span className='text-3xl text-white'>Lissome Website</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
                       variants={fadeIn('left', 0.2)}
                       initial='hidden'
                       whileInView={"show"}
                       viewport={{ once: false, amount:0.3}}
          className='flex-1 flex flex-col gap-y-10'>
            {/* img */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transaction-all dutation-500' src={Img2} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                <span className='text-gradient'>React/Vite Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 '>
                <span className='text-3xl text-white'>Real Esate Website</span>
              </div>
            </div>
            {/* img */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transaction-all dutation-500' src={Img3} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                <span className='text-gradient'>Tailwind Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 '>
                <span className='text-3xl text-white'>Tutors Academy Website</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
                       variants={fadeIn('left', 0.2)}
                       initial='hidden'
                       whileInView={"show"}
                       viewport={{ once: false, amount:0.3}}
          className='flex-1 flex flex-col gap-y-10'>
            {/* img */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transaction-all dutation-500' src={Img2} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                <span className='text-gradient'>Next Js Dashboard </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 '>
                <span className='text-3xl text-white'>Acme Website</span>
              </div>
            </div>
            {/* img */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transaction-all dutation-500' src={Img3} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                <span className='text-gradient'>ABC Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 '>
                <span className='text-3xl text-white'>Lorem Isppum  Website</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;


// /* my code*/
