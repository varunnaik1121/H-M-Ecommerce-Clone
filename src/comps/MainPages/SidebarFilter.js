import React, { useState } from 'react';

import { SidebarFilterData } from '../../data/filterData';
import FilterComp from './FilterComp';
import { useEffect } from 'react';
const SidebarFilter = ({ totalItems }) => {
  const [data, setData] = useState(SidebarFilterData);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (history.length) {
      console.log(`history changed value is`, history);
    }
  }, [history]);

  const handleClick = (item) => {
    setHistory([...history, data]);
    setData(item.children);
  };

  const handleBack = () => {
    setData(history.pop());
  };

  return (
    <>
      <div className="sm:max-w-[450px] w-full  absolute top-0 right-0 h-full bg-[#FAF9F8] min-h-[100vh] z-[100] py-6 px-8">
        <button
          disabled={history.length === 0}
          onClick={() => handleBack()}
          className="bg-black text-white py-2 px-4 capitalize disabled:bg-[rgba(0,0,0,.1)]"
        >
          back
        </button>
        <FilterComp
          data={data}
          handleClick={handleClick}
          handleBack={handleBack}
          history={history}
        />
      </div>
    </>
  );
};

export default SidebarFilter;
