import React, { useState } from 'react';

const ColorSlider = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const handleSelected = (idx) => {
    console.log();
    setSelected(idx);
  };
  return (
    <div className="flex gap-2  justify-center  lg:justify-start ">
      {data.map((value, idx) => {
        return (
          <>
            <button
              key={idx}
              className={`cursor-pointer ${
                idx === selected && 'outline-1 outline shadow-md'
              }`}
              value={value.colorName}
              onClick={() => handleSelected(idx)}
            >
              <img
                src={value.image}
                alt="color1"
                className="w-[42px] h-[64px] xl:w-[60px] xl:h-[90px] object-cover"
              />
            </button>
          </>
        );
      })}
    </div>
  );
};

export default ColorSlider;
