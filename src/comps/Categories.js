import React from 'react';
import { categoryData } from '../data/categories';
import { FiSearch } from 'react-icons/fi';
const Categories = () => {
  return (
    <div className="w-full  hidden lg:flex px-3 py-1">
      <div className="flex flex-1 items-center justify-center">
        {categoryData.map((category) => {
          return (
            <li
              className="list-none capitalize text-sm mx-3 font-medium tracking-wide cursor-pointer"
              key={category.name}
            >
              {category.name}
            </li>
          );
        })}
      </div>
      <form
        className="flex py-2  border-black border-b-[1px] text-sm"
        onSubmit={() => {}}
      >
        <button type="submit">
          <FiSearch className="w-6 h-6 mr-2 text-black opacity-80 font-thin" />
        </button>

        <input
          type={'text'}
          className="w-full outline-none bg-transparent placeholder:text-sm placeholder:text-black placeholder:text-medium text-sm "
          placeholder="Search product"
        />
      </form>
    </div>
  );
};

export default Categories;
