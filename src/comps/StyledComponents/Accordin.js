import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
const Accordin = ({ data }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full  flex flex-col">
      <div className="px-3 w-full py-2 flex flex-col  cursor-pointer border-t-[1px] border-b-0 md:py-3 border-darkGray">
        <div
          className="flex hover:text-red  w-full justify-between h-max items-center"
          onClick={() => setShow(!show)}
        >
          <h3 className="flex-1">{data?.title}</h3>
          <div>
            <IoIosArrowDown />
          </div>
        </div>
        {show && (
          <div className="transition-all  py-[10px] text-sm font-thin ">
            Line 113:19: Redundant alt attribute. Screen-readers already
            announce Line 113:19: Redundant alt attribute. Screen-readers
            already announce Line 113:19: Redundant alt attribute.
            Screen-readers already announce
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordin;
