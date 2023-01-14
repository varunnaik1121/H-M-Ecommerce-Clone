import React, { useState } from 'react';

const CategoryDescription = ({ description, title }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full text-center my-4">
        <h1 className="font-semibold  sm:text-[34px] text-[28px]">{title}</h1>
      </div>
      <div className="w-full text-centuries">
        <p className="text-[12px] font-medium  overflow-hidden">
          {show ? description : description.substring(0, 400)}
        </p>
      </div>
      <div className="w-full text-center my-4" onClick={() => setShow(!show)}>
        <p className="underline cursor-pointer text-[12px]">
          {show ? 'Read Less' : 'Read More'}
        </p>
      </div>
    </div>
  );
};

export default CategoryDescription;
