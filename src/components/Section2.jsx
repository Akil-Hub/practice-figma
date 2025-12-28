import React from 'react';
import red from '@/assets/red.png'
import teal from '@/assets/teal.png'
import blue from '@/assets/blue.png'
import violet from '@/assets/violet.png'
const Section2 = () => {
    const cardClass = "card relative text-center bg-white z-20 w-70 h-98   p-4 rounded-lg shadow-2xl/50 hover:scale-105 duration-400 transition-all ease-in-out "
  return (
  <section className='bg-gray-100'>
      <article className="wrapper py-20">
      <div className="row flex flex-col md:flex-row  items-center justify-between py-6 mb-10 gap-10  ">
        <div className="left md:w-1/2 text-center md:text-left">
          <h6 className="text-primary">Services</h6>
          <h2 className="text-4xl font-semibold text-heading   py-2 ">Find the service we provide</h2>
        </div>
        <p className="text-para text-xl md:w-1/2 text-center md:text-left">
          Our consultants have years of experience on the in success. ​Through the provision of our
          services.
        </p>
      </div>

      <div className="cards pb-10 flex flex-col md:flex-row flex-wrap gap-10 justify-center items-center mt-20 ">
        <div className={`${cardClass} shadow-primary`}>
            <div className="">
                <img src={red} alt="" className='mx-auto py-4' />
            </div>
            <h4 className='text-heading py-3 text-2xl font-semibold'>Grow Your Brand And Business</h4>

            <p className='text-para py-3 pb-6'>That community can of course lend to sales - that's how brand and business go hand-in-hand</p>

            <p className='bg-primary h-1 w-full absolute  rounded-bl-md rounded-br-md bottom-0 left-0 z-10'></p>
             
        </div>
        <div className={`${cardClass} shadow-emerald-600`}>
            <div className="">
                <img src={teal} alt="" className='mx-auto py-4' />
            </div>
            <h4 className='text-heading py-3 text-2xl font-semibold'>Increase Your Conversion Rate</h4>

            <p className='text-para py-3 pb-6'>There are two ways to increase your conversion rate: increase their motivation and make it easier</p>

            <p className='bg-secondary h-1 w-full absolute  rounded-bl-md rounded-br-md bottom-0 left-0 z-10'></p>
             
        </div>
        <div className={`${cardClass} shadow-sky-600`}>
            <div className="">
                <img src={blue} alt="" className='mx-auto py-4' />
            </div>
            <h4 className='text-heading py-3 text-2xl font-semibold'>Business Plan 
Consulting</h4>

            <p className='text-para py-3 pb-6'>A business plan consultant provides strategic direction by creating or methodically pressure-testing </p>

            <p className='bg-sky-500 h-1 w-full absolute  rounded-bl-md rounded-br-md bottom-0 left-0 z-10'></p>
             
        </div>
        <div className={`${cardClass} shadow-indigo-700`}>
            <div className="">
                <img src={violet     } alt="" className='mx-auto py-4' />
            </div>
            <h4 className='text-heading py-3 text-2xl font-semibold'>Business Startup 
Analysis</h4>

            <p className='text-para py-3 pb-6'>You must do different kinds of research for your startup. However, before you make any new decision</p>

            <p className='bg-indigo-600 h-1 w-full absolute  rounded-bl-md rounded-br-md bottom-0 left-0 z-10'></p>
             
        </div>

      </div>
    </article>
  </section>
  );
};

export default Section2;
