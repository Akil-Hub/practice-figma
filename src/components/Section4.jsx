import React, { useState } from 'react';
import snakeDesign from '@/assets/snakeDesign.png';
import red from '@/assets/red.png';
import teal from '@/assets/teal.png';
import blue from '@/assets/blue.png';
import violet from '@/assets/violet.png';
import { CiCirclePlus } from 'react-icons/ci';
import { FaCalendarPlus, FaInstagram, FaInstagramSquare, FaLinkedinIn, FaPlus } from 'react-icons/fa';
import { FaCross, FaSquareInstagram, FaTwitter } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import { RiInstagramFill } from 'react-icons/ri';
const Section4 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cardClass = `card relative text-center z-20 w-70 h-98    rounded-lg shadow-2xl/50 hover:scale-105 duration-400 transition-all ease-in-out bg-gray-300`;
  return (
    <section className=" py-20 relative">
      <div className="hidden sm:block bg-heading h-90 w-full absolute left-0 top-0 -z-40"></div>
      <div className=" absolute left-0 top-0 -z-30">
        <img src={snakeDesign} alt="design" />
      </div>

      <article className="wrapper relative  z-10 ">
        <div className="cards  z-50 pb-10 flex flex-col md:flex-row flex-wrap gap-10  items-center mt-20 ">
          <div className={`${cardClass} shadow-primary relative`}>
            <p className="bg-primary h-1 w-full absolute  rounded-bl-md rounded-br-md bottom-0 left-0 z-10"></p>
            <div className="bg-primary w-50 h-19 rounded-tr-lg left-0 absolute -bottom-5   z-20  flex items-center justify-center gap-3">
              <div>
                <span className="bg-primary w-8 h-1 mb-9"></span>
                <div className="">
                  <h4 className="text-heading text-xl font-semibold">Eleanor Pena</h4>
                  <p className="text-white py-2">Senior Engineer</p>
                </div>
              </div>
            </div>
            <div className=" h-10 w-10 flex justify-center items-center absolute bottom-4 z-50 right-5  bg-white rounded-full">
              <FaPlus className=" text-heading " />
            </div>
          </div>

          <div
            className={`${cardClass} shadow-emerald-600 relative`}
            
          >
            <p className="bg-secondary h-1 w-full absolute  rounded-bl-md rounded-br-md bottom-0 left-0 z-10"></p>
            <div className="bg-secondary w-50 h-19 rounded-tr-lg left-0 absolute -bottom-5   z-20  flex items-center justify-center gap-3">
              <div>
                <span className="bg-primary w-8 h-1 mb-9"></span>
                <div className="">
                  <h4 className="text-heading text-xl font-semibold">Eleanor Pena</h4>
                  <p className="text-white py-2">Senior Engineer</p>
                </div>
              </div>
            </div>
            <div
              className={`h-10 w-10 flex justify-center items-center absolute bottom-43 z-50 right-5  bg-white rounded-full ${isHovered ? 'opacity-100 duration-500' : 'opacity-0'}`}
            >
              <FaLinkedinIn className=" text-heading " />
            </div>
            <div
              className={`h-10 w-10 flex justify-center items-center absolute bottom-30 z-50 right-5  bg-white rounded-full ${isHovered ? 'opacity-100 duration-500' : 'opacity-0'}`}
            >
              <FaTwitter className=" text-heading " />
            </div>
            <div
              className={`h-10 w-10 flex justify-center items-center absolute bottom-17 z-50 right-5  bg-white rounded-full ${isHovered ? 'opacity-100 duration-500' : 'opacity-0'}`}
            >
              <RiInstagramFill  className=" text-heading " />
            </div>
       
  
            <div className=" h-10 w-10 flex justify-center items-center absolute bottom-4 z-50 right-5  bg-secondary rounded-full duration-300"
             onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}>
              {isHovered ? (
                <RxCross2 className=" text-heading font-semibold size-5 duration-300 " />
              ) : (
                <FaPlus className=" text-heading duration-300 "
                 />
              )}
            </div>
          </div>
          <div className={`${cardClass} shadow-sky-600 relative`}>
            <p className="bg-sky-500 h-1 w-full absolute  rounded-bl-md rounded-br-md bottom-0 left-0 z-10"></p>
            <div className="bg-sky-400 w-50 h-19 rounded-tr-lg left-0 absolute -bottom-5   z-20  flex items-center justify-center gap-3">
              <div>
                <span className="bg-primary w-8 h-1 mb-9"></span>
                <div className="">
                  <h4 className="text-heading text-xl font-semibold">Eleanor Pena</h4>
                  <p className="text-white py-2">Senior Engineer</p>
                </div>
              </div>
            </div>
            <div className=" h-10 w-10 flex justify-center items-center absolute bottom-4 z-50 right-5  bg-white rounded-full">
              <FaPlus className=" text-heading " />
            </div>
          </div>
          <div className={`${cardClass} shadow-indigo-700 relative`}>
            <p className="bg-indigo-500 h-1 w-full absolute  rounded-bl-md rounded-br-md bottom-0 left-0 z-10"></p>
            <div className="bg-indigo-400 w-50 h-19 rounded-tr-lg left-0 absolute -bottom-5   z-20  flex items-center justify-center gap-3">
              <div>
                <span className="bg-primary w-8 h-1 mb-9"></span>
                <div className="">
                  <h4 className="text-gray-900 text-xl font-semibold">Eleanor Pena</h4>
                  <p className="text-white py-2">Senior Engineer</p>
                </div>
              </div>
            </div>
            <div className=" h-10 w-10 flex justify-center items-center absolute bottom-4 z-50 right-5  bg-white rounded-full">
              <FaPlus className=" text-heading " />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Section4;
