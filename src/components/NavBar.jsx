import React from 'react';
import logo from '@/assets/logo.png';
import Button from '@/components/Buttons/Button';
import LoginBtn from '@/components/Buttons/LoginBtn';

const NavBar = () => {
  return (
    <section className="fixed top-0 left-0 w-full  z-50  backdrop-blur-3xl bg-black/20">
      <nav className="wrapper flex justify-between items-center   py-3  ">
        <div>
          <img src={logo} alt="Logo" />
        </div>

        <div className="nav items text-white ">
          <ul className="hidden md:flex justify-center items-center gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-5">
          <LoginBtn text="Login" />
          <h4 className="hidden md:block bg-white rounded-lg  px-6 py-3"> Free Consultation</h4>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
