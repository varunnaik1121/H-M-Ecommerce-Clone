import React from 'react';

const Chip = ({ value }) => {
  return (
    <div className="w-max md:px-4 px-3 md:py-2 py-1 bg-white font-medium  text-black border-[1px] border-black rounded-3xl hover:bg-red hover:text-white text-[12px]">
      <button className="text-sm   capitalize">{value}</button>
    </div>
  );
};

export default Chip;
