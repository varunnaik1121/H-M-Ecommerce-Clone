import React, { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
const InfiniteSidebar = ({ data }) => {
  const [show, setShow] = useState(false);

  console.log(data.type);
  return (
    <>
      <div className="relative flex w-full  justify-between items-center mt-4">
        <div>{data.title}</div>
        <div onClick={() => setShow(!show)}>{data.icon}</div>
      </div>
      <div className={`${show ? 'block ml-5' : 'hidden'}`}>
        {data.children.map((value) => {
          return <InfiniteSidebar data={value} />;
        })}
      </div>
    </>
  );
};

export default InfiniteSidebar;
