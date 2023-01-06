import React, { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const FooterAccordin = ({ data }) => {
  const [isAccordinOpen, setIsAccordinOpen] = useState(false);

  return (
    <>
      <div className="w-full lg:flex lg:justify-center lg:flex-col lg:align-middle lg:px-2 lg:py-4 hidden ">
        <div className="font-medium py-4 text-sm uppercase hidden lg:block ">
          {data.title}
        </div>

        <div className=" flex-col h-full hidden lg:flex">
          {data.subtitle.map((item, index) => {
            return (
              <a className="hover:underline" key={index} href={item.path}>
                <div className="text-sm py-2 text-[12px] capitalize">
                  {item.name}
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div className="lg:hidden  w-full  max-auto flex justify-center items-center flex-col ">
        <div className="flex  w-[85%] items-center justify-between mx-auto  p-2">
          <div className=" font-medium py-2 text-sm uppercase text-black">
            {data.title}
          </div>
          <button onClick={() => setIsAccordinOpen(!isAccordinOpen)}>
            <AiOutlineDown className="hover:text-red" />
          </button>
        </div>
        <div
          className={`w-[85%]  p-2 text-[12px] ${
            isAccordinOpen ? 'flex flex-col ' : 'hidden'
          } `}
        >
          {data.subtitle.map((item, i) => (
            <a href={item.path} className="py-1 capitalize">
              <p key={i}>{item.name}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default FooterAccordin;
