import React from 'react';
import logo from '@/assets/logo.png';
import { FaGoogle, FaInstagram, FaLinkedinIn, FaPlus, FaTwitter } from 'react-icons/fa';
import SecondaryBtn from '@/components/Buttons/SecondaryBtn';
import { IoIosSend } from 'react-icons/io';
const Footer = () => {
  return (
    <section className="bg-heading py-20">
      <article className="wrapper">
        <div className="grid gap-x-10 sm:grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-y-10">
          <div className="2fr text-center md:text-left">
            <div className='text-center'>
              <img src={logo} alt="" className='mx-auto md:mx-0' />
            </div>

            <p className="text-gray-400 tracking-widest py-6">
              Build a modern and creative website with Innovate.
            </p>

            <div className="socialIcons justify-center md:justify-start items-center flex gap-3 py-3">
              <div className=" h-10 w-10 flex justify-center items-center  bottom-4 z-50 right-5  bg-white rounded-full">
                <FaGoogle className=" text-heading " />
              </div>
              <div className=" h-10 w-10 flex justify-center items-center  bottom-4 z-50 right-5  bg-white rounded-full">
                <FaLinkedinIn className=" text-heading " />
              </div>
              <div className=" h-10 w-10 flex justify-center items-center  bottom-4 z-50 right-5  bg-white rounded-full">
                <FaTwitter className=" text-heading " />
              </div>
              <div className=" h-10 w-10 flex justify-center items-center  bottom-4 z-50 right-5  bg-white rounded-full">
                <FaInstagram className=" text-heading " />
              </div>
            </div>
          </div>

          <div className="links text-center md:text-left">
            <h3
              className="text-secondary text-xl font-semibold py-3
            "
            >
              Product
            </h3>
            <h6 className="text-gray-400 py-2">Landingpages</h6>
            <h6 className="text-gray-400 py-2">Pricing</h6>
            <h6 className="text-gray-400 py-2">Benefits</h6>
            <h6 className="text-gray-400 py-2">Features</h6>
          </div>
          <div className="links text-center md:text-left">
            <h3
              className="text-secondary text-xl font-semibold py-3
            "
            >
              Company
            </h3>
            <h6 className="text-gray-400 py-2">About</h6>
            <h6 className="text-gray-400 py-2">Privacy Policy</h6>
            <h6 className="text-gray-400 py-2">Terms & Conditions</h6>
            <h6 className="text-gray-400 py-2">Partners</h6>
            <h6 className="text-gray-400 py-2">Contact</h6>
          </div>
          <div className="links text-center md:text-left">
            <h3
              className="text-secondary text-xl font-semibold py-3
            "
            >
              Resouces
            </h3>
            <h6 className="text-gray-400 py-2">About</h6>
            <h6 className="text-gray-400 py-2">Guides & resources</h6>
            <h6 className="text-gray-400 py-2">Blog</h6>
            <h6 className="text-gray-400 py-2">Tools</h6>
            <h6 className="text-gray-400 py-2">Support</h6>
          </div>

          <div className="InputMail   text-center md:text-left">
            <h3
              className="text-secondary text-xl font-semibold py-3
            "
            >
              Get Latest Updates
            </h3>
            <p className="text-gray-400 tracking-wider py-3">
              Subscribe to our newsletter and get many interesting things every week
            </p>
            <div className=" mx-auto md:mx-0 flex  bg-white p-1 my-7 rounded-lg w-62">
              <input
                type="email"
                className="px-3 rounded-lg  py-2 bg-white text-para focus:outline-none w-50"
              />
              <button className="p-3 bg-primary rounded-lg text-white active:scale-95">
                {' '}
                <IoIosSend />
              </button>
            </div>
          </div>
        </div>

        <p className='bg-gray-400 h-px  my-4 mt-15 w-full rounded-full'></p>
        <p className='text-gray-400 text-center py-2'>© 2020 Innovate - All Right Reserved</p>
      </article>
    </section>
  );
};

export default Footer;
