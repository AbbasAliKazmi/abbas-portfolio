import React from 'react';
//*********images
import  Image from '../assets/avatar.svg';
//*********icons
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
//********type animation
import { TypeAnimation } from 'react-type-animation';
//****** motion
import { motion } from 'framer-motion' 
//*******variants   
import { fadeIn } from '../variants'




const Banner = () => {
  return (
  <section className='section' id='home'>
      <div className='container mx-auto'>
         <div>
          {/* text */}
          <div>
            <h1>
              ABBAS <span>ALI</span>
            </h1>
            <div className='mb--6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
               <span className='text-white mr-4'>I am a</span>
               <TypeAnimation src={Image} 
                sequence={[
                'Developer',
                2000,
                'Desiigner',
                2000,
                'Instagrammer',
                2000,
               ]}
               speed={50}
               className='text-accent'
               wrapper='span'
               repeat={Infinity}
               />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ipsam 
                delectus deleniti reprehenderit 
            </p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
               <button className='btn btn-lg'>Contact Me</button>
              <a href="#" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
            {/* socials */}
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="#">
                 <FaYoutube />
              </a>
              <a href="#">
                 <FaDribbble />
              </a>
              <a href="#">
                 <FaGithub />
              </a>
            </div>
          </div>
          {/* image */}
          <div>
             <img src={Image} alt="" />
          </div>
         </div>
      </div>
  </section>
);
};

export default Banner;
