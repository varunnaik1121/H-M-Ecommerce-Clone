import React from 'react';

const HomeButton = ({ title }) => {
  return (
    <button className="text-[12px] font-bold bg-white text-black  border-none outline-none left-8 px-3 text-center hover:bg-slate-100 leading-none py-3">
      {title}
    </button>
  );
};

export default HomeButton;
