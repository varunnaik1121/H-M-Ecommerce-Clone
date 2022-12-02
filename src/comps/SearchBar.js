import React, { useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { closeSearch } from '../redux/userSlice';
const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };

  // for handling input clear
  const handleClear = () => {
    dispatch(closeSearch());
  };
  return (
    <div className="w-full  flex items-center  animate-slowfade">
      <form
        className="flex items-center justify-between"
        onSubmit={handleSearch}
      >
        <button type="submit">
          <BsSearch className="w-5 h-5 text-black mx-1" />
        </button>
        <div>
          <input
            type={'text'}
            autoFocus
            className="min-w-[80vw] px-3 py-2 outline-none border-hidden bg-transparent placeholder:text-medium placeholder:text-[#000] placeholder:text-sm placeholder:text-medium text-sm "
            placeholder="Search products"
          />
        </div>
        <button onClick={handleClear} className="p-[3px] absolute right-[5%]">
          <MdClear className="w-7 h-7 text-black px-0 mx-0 " />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
