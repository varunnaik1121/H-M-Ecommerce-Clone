import React, { useRef } from 'react';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useEffect } from 'react';
import DynamicInputs from './DynamicInputs';
//this is a sliding div which is a reusable component for all filters and collections
const SlidingBar = ({ collections, title }) => {
  const dummyData = [
    {
      title: '4',
      mainTitle: 'womenswear',

      type: 'checkbox',
      doesHaveChildren: false,
      availableItems: 20,
      children: [],
      isChecked: false,
    },
    {
      title: '6',
      mainTitle: 'womenswear',

      type: 'checkbox',
      doesHaveChildren: false,
      availableItems: 12,
      children: [],
      isChecked: false,
    },
    {
      title: '8',
      type: 'checkbox',
      doesHaveChildren: false,
      mainTitle: 'womenswear',
      availableItems: 16,
      children: [],
      isChecked: false,
    },
    {
      title: '8',
      type: 'checkbox',
      doesHaveChildren: false,
      mainTitle: 'womenswear',
      availableItems: 20,
      children: [],
      isChecked: false,
    },
    {
      title: '10',
      type: 'checkbox',
      doesHaveChildren: false,
      mainTitle: 'womenswear',
      availableItems: 20,
      children: [],
      isChecked: false,
    },
  ];

  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const barRef = useRef(null);
  useEffect(() => {
    if (open === true) {
      console.log('useEffect runned');
      const container = barRef.current;
      console.log(container.scrollHeight);
      setHeight(container.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  console.log({ height });
  return (
    <div>
      <div className="flex items-center relative ">
        <div className="flex items-center px-3 py-1 ">
          <button className="text-sm uppercase">{title}</button>
          {open ? (
            <BsChevronUp
              onClick={() => setOpen(!open)}
              className="cursor-pointer  ml-[10px]"
            />
          ) : (
            <BsChevronDown
              onClick={() => setOpen(!open)}
              className="cursor-pointer  ml-[10px]"
            />
          )}
        </div>
        <div
          className={`${
            open ? `h-auto` : 'h-0 overflow-hidden'
          } transition-all duration-500 ease-in-out absolute top-[35px] left-0 min-w-[300px] shadow-[1px_1px_4px_rgba(0,0,0,0.1)]`}
          ref={barRef}
          style={{ height }}
        >
          {dummyData.map((value, index) => {
            return <DynamicInputs value={value} key={index} isNotSidebar />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SlidingBar;
