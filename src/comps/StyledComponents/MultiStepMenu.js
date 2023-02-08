import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BsChevronDown } from 'react-icons/bs';
const MultiStepMenu = ({ data, index }) => {
  const userSelectedSortByValue = useSelector((state) => state.search);
  const { title, children, mainTitle, type, availableItems, specific } = data;

  console.log({ menuType: type });
  const [show, setShow] = useState(false);
  const [isChildOpen, setIsOpenChild] = useState(false);
  console.log({ data });
  return (
    <div className={`w-full  relative  z-50  hover bg-[#fff]`}>
      {type === 'normal' && (
        <div>
          <div className="w-full flex justify-between items-center relative">
            <p className="text-sm">{title}</p>
            <BsChevronDown
              className="hover:text-red"
              onClick={() => {
                setIsOpenChild(true);
              }}
            />
          </div>
          {isChildOpen && (
            <div className="absolute w-full bottom-1">{children[0].title}</div>
          )}
        </div>
      )}
      {type === 'radio' && (
        <div className="flex items-center w-full cursor-pointer py-4 px-3 hover:bg-[#F4EDDD]">
          <input
            type={'radio'}
            value={title}
            name={mainTitle}
            id={title}
            className="w-[18px] h-[18px] accent-black cursor-pointer hover:text-red"
            defaultChecked={index === 0}
          ></input>
          <label className="ml-5 text-[12px] capitalize" htmlFor={title}>
            {title}
          </label>
        </div>
      )}
      {type === 'checkbox' && (
        <div className="w-full flex py-4 px-2  items-center hover:bg-[#F4EDDD] justify-between cursor-pointer">
          {
            <>
              <div className="flex items-center ">
                <div className="w-[18px]  h-[18px] relative rounded-sm  ">
                  <input
                    type={'checkbox'}
                    value={title}
                    name={mainTitle}
                    id={title}
                    // checked={isChecked}
                    className={`w-full h-full accent-black   checked:bg-green-300 checked:text-green-400 cursor-pointer rounded-sm outline-none z-50 ${
                      specific && 'bg-red'
                    }`}
                    onChange={(e) => {
                      console.log(e.target.checked);
                    }}
                    // onChange={(e) =>
                    //   handleRadioClick(title, type, e.target.checked, value)
                    // }
                  ></input>
                  {specific && (
                    <div
                      className={`after:content-[""] absolute top-0 left-0  w-full h-full rounded-sm `}
                      style={{ backgroundColor: `${title}` }}
                    ></div>
                  )}
                </div>
                <label htmlFor={title} className="ml-5 text-[12px] capitalize ">
                  {title}
                </label>
              </div>
              <div>
                <p className="text-[12px]">{availableItems}</p>
              </div>
            </>
          }
        </div>
      )}
    </div>
  );
};

export default MultiStepMenu;
