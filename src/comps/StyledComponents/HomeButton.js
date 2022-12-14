import React from 'react';

const HomeButton = ({ title }) => {
  return (
    <button className="md:block hidden text-[12px] capitalize font-[600] bg-white text-black  border-none outline-none left-8 px-3 text-center hover:bg-slate-100 leading-none py-2">
      {title}
    </button>
  );
};

export default HomeButton;
