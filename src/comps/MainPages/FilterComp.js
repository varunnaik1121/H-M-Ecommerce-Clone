import React from 'react';
import SingleFilterList from './SingleFilterList';
import { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
const FilterComp = ({ data, handleClick, handleBack }) => {
  return (
    <>
      {data.map((value, index) => {
        return (
          <>
            <div
              className="w-full flex bg-[rgba(0,0,0,.1)]  justify-between items-center mt-5  p-2"
              key={index}
            >
              <div>{value.title}</div>
              <div className="py-3" onClick={() => handleClick(value)}>
                <HiArrowRight />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default FilterComp;
