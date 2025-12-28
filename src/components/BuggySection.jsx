import SecondaryBtn from '@/components/Buttons/SecondaryBtn';
import React from 'react';
import AmdLogo from '@/assets/AmdLogo.png';
import AmazonLogo from '@/assets/amazonLogo.png';
import LogitecLogo from '@/assets/LogitecLogo.png';
import DropcamLogo from '@/assets/DropcamLogo.png';

const BuggySection = () => {
  return (
    <section className=" bg-secondary ">
      <article className="wrapper py-7  flex flex-col md:flex-row text-white">
        <div className="md:w-1/3 pt-6">
          <h2 className="text-4xl text-center md:text-left">
            Trusted by the world’s leading companies
          </h2>

          <div className="py-7 text-center md:text-left">
            <SecondaryBtn text="Free Consultation" />
          </div>
        </div>
        <div className="">
          <div className="countersAndLogos  ">
            <div className="counters flex flex-wrap px-10 justify-evenly items-center">
              <div className="couner p-4">
                <h4 className="text-4xl text-center">
                  <span>150</span>+
                </h4>
                <h6 className="py-3 text-center">Finished Session</h6>
              </div>
              <div className="couner p-4">
                <h4 className="text-4xl text-center">
                  <span>150</span>+
                </h4>
                <h6 className="py-3 ">Finished Session</h6>
              </div>
              <div className="couner p-4">
                <h4 className="text-4xl text-center">
                  <span>150</span>+
                </h4>
                <h6 className="py-3 ">Finished Session</h6>
              </div>
              <div className="couner p-4">
                <h4 className="text-4xl text-center">
                  <span>150</span>+
                </h4>
                <h6 className="py-3 ">Finished Session</h6>
              </div>
            </div>

            <div className="runningLogos items-center flex  px-4 ">
              <div>
                <img src={AmdLogo} alt="" />
              </div>
              <div>
                <img src={AmazonLogo} alt="" />
              </div>

              <div>
                <img src={LogitecLogo} alt="" />
              </div>

              <div>
                <img src={DropcamLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BuggySection;
