import React from 'react';
import check from '@/assets/check.png';
import section1Left from '@/assets/section1left.png';
const Section1 = () => {
  return (
    <section className="wrapper py-20 px-20 flex flex-col md:flex-row gap-20 items-center">
      {/* left Image */}
      <div className="">
        <img src={section1left} alt="" />
      </div>

      {/* right Text */}
      <div className="text-left">
        <h6 className="text-primary  ">About Us</h6>
        <h2 className="text-3xl md:text-4xl font-semibold py-3 text-gray-800">
          Welcome to World Best Business Company
        </h2>

        <p className="py-3 text-gray-500 text-sm">
          We partner with experienced and qualified Accountants, Financial Advisors and Chartered
          Secretaries to provide
        </p>

        <div className=" text-xl text-gray-600 flex items-center gap-2 py-2">
          <div>
            <img src={check} alt="" />
          </div>
          Monthly assesment report
        </div>

        <div className=" text-xl text-gray-600 flex items-center gap-2 py-2">
          <div>
            <img src={check} alt="" />
          </div>
          Monthly assesment report
        </div>

        <div className=" text-xl text-gray-600 flex items-center gap-2 py-2">
          <div>
            <img src={check} alt="" />
          </div>
          Monthly assesment report
        </div>
      </div>
    </section>
  );
};

export default Section1;
