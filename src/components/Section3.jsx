import React from 'react';
import experience from '@/assets/experience.png';
import SecondaryBtn from '@/components/Buttons/SecondaryBtn';
const Section3 = () => {
  return (
    <section className="wrapper py-20  flex flex-col md:flex-row gap-20 items-center">
      {/* left text */}
      <div className="text-left md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-semibold py-3 text-heading">
          Best Reliable Solution For Your Business
        </h2>

        <p className="py-3 text-gray-500 text-sm">
          We help our clients succeed by creating brand identities, digital experiences, and print
          materials that communicate clearly, achieve marketing.
        </p>
        <div className="py-7 mb-6">
          {' '}
          <SecondaryBtn text="Get Started Now" />
        </div>
        <div className="flex gap-5 justify-between">
          <div className="w-1/2">
            <h2 className="text-heading text-3xl">First-class investment solutions</h2>
            <p className="text-para py-3">
              We can help you with your business strategy, architecture, mapping, and
              optimisation.{' '}
            </p>
          </div>
          <div className="w-1/2">
            <h2 className="text-heading text-3xl">Building the idea of future</h2>
            <p className="text-para py-3  ">
              Offering Performance Driven Partnerships CIBA Specializes In Business Process
              Outsourcing.{' '}
            </p>
          </div>
        </div>
      </div>

      {/* right image */}

      <div className="md:w-1/2 hover:scale-105 duration-400">
        <img src={experience} alt="" />
      </div>
    </section>
  );
};

export default Section3;
