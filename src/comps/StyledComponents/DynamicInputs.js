import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const DynamicInputs = ({ value, handleRadioClick, index }) => {
  const { userSelectedFilters } = useSelector((state) => state.search);

  const [isChecked, setIsChecked] = useState(false);
  //function to send user selected radio button choice

  useEffect(() => {
    checkCurrentState(value);
  }, [userSelectedFilters]);

  const checkCurrentState = (value) => {
    if (
      userSelectedFilters.find(
        (userValue) => JSON.stringify(userValue) === JSON.stringify(value)
      )
    ) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <>
      {value.type === 'radio' && (
        <div className="w-full flex py-3 px-2  items-center hover:bg-[#F4EDDD]">
          {
            <div className="flex items-center w-full cursor-pointer">
              <input
                type={'radio'}
                value={value.title}
                name={value.mainTitle}
                id={value.title}
                className="w-[18px] h-[18px]  accent-black  checked:bg-green-300 checked:text-green-400 cursor-pointer hover:text-red"
                defaultChecked={index === 0}
                onClick={(e) =>
                  handleRadioClick(
                    value.title,
                    value.type,
                    e.target.checked,
                    value.mainTitle
                  )
                }
              ></input>
              <label className="ml-5 text-sm capitalize" htmlFor={value.title}>
                {value.title}
              </label>
            </div>
          }
        </div>
      )}
      {value.type === 'checkbox' && (
        <div className="w-full flex py-3 px-2  items-center hover:bg-[#F4EDDD] justify-between">
          {
            <>
              <div className="flex items-center">
                <input
                  type={'checkbox'}
                  value={value.title}
                  name={value.mainTitle}
                  id={value.title}
                  checked={isChecked}
                  className="w-[18px] h-[18px]  accent-black  checked:bg-green-300 checked:text-green-400 cursor-pointer"
                  onChange={(e) =>
                    handleRadioClick(
                      value.title,
                      value.type,
                      e.target.checked,
                      value
                    )
                  }
                ></input>
                <label
                  htmlFor={value.title}
                  className="ml-5 text-sm capitalize"
                >
                  {value.title}
                </label>
              </div>
              <div>
                <p className="text-[12px]">{value.availableItems}</p>
              </div>
            </>
          }
        </div>
      )}
    </>
  );
};

export default DynamicInputs;
