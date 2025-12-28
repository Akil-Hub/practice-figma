import React from 'react';
import { FaCalendar } from 'react-icons/fa';

const Section8 = () => {
  return (
    <section className="wrapper py-20">
      <h6 className="text-primary font-semibold text-center">NEW BLOG</h6>
      <h2 className="text-5xl font-semibold py-3 text-center">Latest Updates and News</h2>
      <div className="cards justify-center items-center gap-15 py-5 flex flex-col md:flex-row flex-wrap">
        <div className="card w-80 hover:scale-105 duration-300    shadow-2xl rounded-2xl ">
          <div className="imageDiv w-80  h-50 bg-gray-400 rounded-tr-lg rounded-tl-lg  "></div>
          
          <div className="text w-full p-4">
            <h4 className="text-xl  py-3 text-heading font-semibold">
              Simple Juice Recipes to boost your immune system
            </h4>
            <p className="text-para text-sm">
              Objectively restore stand-alone markets rather than enterprise-wide products.{' '}
            </p>
            <div className="flex justify-between items-center my-3">
              <div className=" userProfie flex gap-2 justify-center items-center">
                <div className="h-12 w-12 bg-para rounded-full"></div>
                <div className="text">
                  <p className="text-para text-xs py-2">Digital Marketer</p>
                </div>
              </div>

              <div className="calenter flex gap-2 ">
                <FaCalendar className="text-gray-400 size-5" />
                <p className='text-para'>
                  {new Date().getDate()} {new Date().toLocaleString('en-US', { month: 'short' })},{' '}
                  {new Date().getFullYear()}
                </p>{' '}
              </div>
            </div>
          </div>
        </div>
        <div className="card w-80 hover:scale-105 duration-300    shadow-2xl rounded-2xl">
          <div className="imageDiv w-80  h-50 bg-gray-400 rounded-tr-lg rounded-tl-lg  "></div>
          
          <div className="text w-full p-4">
            <h4 className="text-xl  py-3 text-heading font-semibold">
              Simple Juice Recipes to boost your immune system
            </h4>
            <p className="text-para text-sm">
              Objectively restore stand-alone markets rather than enterprise-wide products.{' '}
            </p>
            <div className="flex justify-between items-center my-3">
              <div className=" userProfie flex gap-2 justify-center items-center">
                <div className="h-12 w-12 bg-para rounded-full"></div>
                <div className="text">
                  <p className="text-para text-xs py-2">Digital Marketer</p>
                </div>
              </div>

              <div className="calenter flex gap-2 ">
                <FaCalendar className="text-gray-400 size-5" />
                <p className='text-para'>
                  {new Date().getDate()} {new Date().toLocaleString('en-US', { month: 'short' })},{' '}
                  {new Date().getFullYear()}
                </p>{' '}
              </div>
            </div>
          </div>
        </div>
        <div className="card w-80 hover:scale-105 duration-300    shadow-2xl rounded-2xl">
          <div className="imageDiv w-80  h-50 bg-gray-400 rounded-tr-lg rounded-tl-lg  "></div>
          
          <div className="text w-full p-4">
            <h4 className="text-xl  py-3 text-heading font-semibold">
              Simple Juice Recipes to boost your immune system
            </h4>
            <p className="text-para text-sm">
              Objectively restore stand-alone markets rather than enterprise-wide products.{' '}
            </p>
            <div className="flex justify-between items-center my-3">
              <div className=" userProfie flex gap-2 justify-center items-center">
                <div className="h-12 w-12 bg-para rounded-full"></div>
                <div className="text">
                  <p className="text-para text-xs py-2">Digital Marketer</p>
                </div>
              </div>

              <div className="calenter flex gap-2 ">
                <FaCalendar className="text-gray-400 size-5" />
                <p className='text-para'>
                  {new Date().getDate()} {new Date().toLocaleString('en-US', { month: 'short' })},{' '}
                  {new Date().getFullYear()}
                </p>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
