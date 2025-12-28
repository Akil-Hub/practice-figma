import React from 'react';
import hero from '@/assets/hero.png';
import Button from '@/components/Buttons/Button';
import olympic from '@/assets/olympic.png';
import shadow from '@/assets/shadow.png'
import { IoStarSharp } from 'react-icons/io5';

const HeroSection = () => {
  return (
    <section className="">
      <div
        className="flex items-center h-[700px] w-full bg-cover bg-center bg-no-repeat  "
        style={{ backgroundImage: `url(${hero})` }}
      >
        <article className="wrapper relative  flex justify-between">
          {/* left side */}
          <div className="left w-140 text-white py-40 text-center md:text-left  md:mt-30 ">
            <h1 className="text-3xl md:text-5xl text-text-white-50  ">
              We Provi Premium Consulting Service For your Business
            </h1>

            <p className="py-3  text-gray-300">
              The Premium Consulting Service provides a faster way to process plans, register
              dealings and create titles.
            </p>

            <div className="py-5">
              <Button text="Get Started Now" />
            </div>

            <p className="text-gray-300">
              Already member of our communty?
              <span className="md:text-emerald-500 px-2 font-bold  text-gray-950 ">Sign In </span>
            </p>

            <div className="rattingSection flex flex-col md:flex-row gap-10 items-center">
              <div className='py-10'>
                {' '}
                <img src={olympic} alt="" className="" />
              </div>
              <div>
                <h3 className="flex  text-2xl font-semibold gap-5 text-emerald-500">
                  4.5{' '}
                  <span className="flex items-center gap-1  text-yellow-500">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                  </span>
                </h3>
                <p className="text-xl ">305k Total Review</p>
              </div>
            </div>
          </div>

          {/* right image */}
          <div className="hidden md:block">
            <img src={shadow} alt="" className='absolute right-10 w-120 top-80 ' />
          </div>
        </article>
      </div>
    </section>
  );
};

export default HeroSection;
