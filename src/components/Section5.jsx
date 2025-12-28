import React, { useState } from 'react';
import blackFooterImage from '@/assets/blackFooterImage.png';
import { FaPlus } from 'react-icons/fa';
import { FaCross } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import accordionData from '@/Data/AccordianData';
const Section5 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="wrapper py-20  flex flex-col md:flex-row gap-20 items-center">
      {/* left image */}

      <div className="md:w-1/2 hover:scale-105 duration-400">
        <img src={blackFooterImage} alt="" />
      </div>

      {/* right text */}
      <div className="text-left md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-semibold py-3 text-heading mb-8">
          Startup digital platform for investing
        </h2>
        {accordionData.map((accordion, index) => (
          <div className="py-2" key={index}>
            <h4
              className={`py-3 px-4 border border-gray-400 rounded-md flex justify-between items-center text-gray-500 text-sm ${openIndex === index && 'bg-secondary text-white duration-200'}`}
              onClick={() => {
                toggleAccordion(index);
              }}
            >
              {accordion.title}

              {openIndex === index ? <RxCross2 /> : <FaPlus />}
            </h4>
            {openIndex === index && (
              <p className="p-4 leading-5 text-para border-x border-b border-secondary  ">
                {' '}
                {accordion.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
