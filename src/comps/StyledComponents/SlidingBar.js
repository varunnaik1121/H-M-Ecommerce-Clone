import React, { useRef } from 'react';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useEffect } from 'react';
import DynamicInputs from './DynamicInputs';
import MultiStepMenu from './MultiStepMenu';
import { SidebarFilterData } from '../../data/filterData';
//this is a sliding div which is a reusable component for all filters and collections
const SlidingBar = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    console.log({ index });
  }, [index]);

  return (
    <div className="w-full border-1 flex">
      {SidebarFilterData.map((menuData, i) => {
        return (
          <div className="flex items-center relative mr-3 ">
            <div className="flex items-center px-3 py-1 ">
              <button className="text-sm uppercase font-[500]">
                {menuData.title}
              </button>
              {index === i ? (
                <BsChevronUp
                  onClick={() => {
                    setIndex(null);
                  }}
                  className="cursor-pointer  ml-[10px]"
                />
              ) : (
                <BsChevronDown
                  onClick={() => {
                    setIndex(i);
                  }}
                  className="cursor-pointer ml-[10px]"
                />
              )}
            </div>
            <div
              className={`${
                index === i ? `block` : 'hidden'
              } transition-all duration-300 ease-in-out absolute top-[35px] left-0 min-w-[350px] shadow-[1px_1px_4px_rgba(0,0,0,0.1)] bg-[#fff] px-3 py-3`}
            >
              {menuData.children &&
                menuData.children.map((data, i) => {
                  return <MultiStepMenu data={data} index={i} />;
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SlidingBar;
