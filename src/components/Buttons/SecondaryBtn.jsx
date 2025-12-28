import React from 'react';

const SecondaryBtn = ({ text }) => {
  return (
    <button className="text-white bg-primary rounded-md px-8 py-3 border border-primary hover:border  hover:bg-transparent duration-300 hover:text-primary  ">
      {text}
    </button>
  );
};

export default SecondaryBtn;
