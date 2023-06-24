import React, { useState } from 'react';

import { SidebarFilterData } from '../../data/filterData';
import { IoMdArrowBack } from 'react-icons/io';
import FilterComp from './FilterComp';
import { useDispatch } from 'react-redux';

import ExitButton from '../StyledComponents/ExitButton';

import { closeSidebarFilter } from '../../redux/userSlice';
const SidebarFilter = ({ totalItems }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(SidebarFilterData);
  const [history, setHistory] = useState([]);

  const handleClick = (item) => {
    setHistory([...history, data]);
    setData(item.children);
  };

  const handleBack = () => {
    setData(history.pop());
  };

  const handleSidebarClose = () => {
    dispatch(closeSidebarFilter());
  };
  return (
    <>
      <div className="sm:max-w-[450px] w-full top-0 right-0    bg-[#FAF9F8] h-full z-[999] py-6 px-7 overflow-hidden fixed transition-transform ">
        <div className="w-full flex py-5 items-center">
          {history.length > 0 && (
            <button onClick={() => handleBack()} className="absolute left-4">
              <IoMdArrowBack className="text-[28px] opacity-50 font-light" />
            </button>
          )}
          <h4 className="flex justify-center items-center py-4 font-medium text-lg capitalize flex-1">
            {history.length > 0 ? data[0].mainTitle : 'filter and sort'}
          </h4>
        </div>

        <FilterComp
          data={data}
          handleClick={handleClick}
          handleBack={handleBack}
          history={history}
        />
        <button
          className="absolute top-[10px] right-[30px] cursor-pointer p-2  outline-none border-none"
          onClick={handleSidebarClose}
        >
          <ExitButton size={28} />
        </button>
      </div>
    </>
  );
};

export default SidebarFilter;
