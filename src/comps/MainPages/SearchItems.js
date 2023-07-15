import React from 'react';
import ProductsSidebar from '../ProductsSidebar';
const SearchItems = () => {
  const categories = [
    { title: 'mens', totalItems: 40 },
    { title: 'womens', totalItems: 30 },
    { title: 'kids', totalItems: 28 },
    { title: 'sport', totalItems: 37 },
  ];
  return (
    <div className=" w-full ">
      <div className="w-full">
        <h1 className="text-center font-bold text-xl">
          SHOWING RESULTS FOR "sweater"
        </h1>
      </div>
      <div className="flex">
        <ProductsSidebar categories={categories} />
        <div className="border w-full">items</div>
      </div>
    </div>
  );
};

export default SearchItems;
