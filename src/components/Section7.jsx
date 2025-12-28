import React from 'react';
import ReviewText from '@/assets/ReviewText.png';
import { FaStar } from 'react-icons/fa';

const Section7 = () => {
  return (
    <section className="bg-gray-200">
      <article className="wrapper py-20  flex flex-col md:flex-row gap-20 items-center">
        {/* left text */}
        <div className="text-left md:w-1/2 ">
          <h2 className="text-3xl md:text-4xl font-semibold py-3 text-heading my-6">
            What our customers are saying about us
          </h2>

          <div className=" px-5 py-8 bg-white rounded-lg hover:scale-105 duration-300 ">
            <p className="py-3 text-gray-500 text-xl leading-7 ">
            “Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. So impressed by the knowledge, and sincerity. Thank you Mrs victoria for your amazing company.
            </p>

            <div className="flex justify-between items-center my-8">
              <div className=" userProfie flex gap-4 justify-center items-center">
                <div className="h-15 w-15 bg-para rounded-full"></div>
                <div className="text">
                  <h4 className="text-xl text-heading">Jenny Wilson</h4>
                  <p className="text-para py-2">Digital Marketer</p>
                </div>
              </div>

              <div className="ratings flex gap-2 pr-4">
                <FaStar className="text-amber-300 md:size-7" />
                <FaStar className="text-amber-300 md:size-7" />
                <FaStar className="text-amber-300 md:size-7" />
                <FaStar className="text-amber-300 md:size-7" />
                <FaStar className='md:size-7' />
              </div>
            </div>
          </div>
        </div>

        {/* right image */}

        <div className="md:w-1/2 hover:scale-105 duration-400">
          <img src={ReviewText} alt="" />
        </div>
      </article>
    </section>
  );
};

export default Section7;
