import React from 'react';
import ProductsSlider from './ProductsSlider';

import Chip from './StyledComponents/Chip';

const NewArrivals = () => {
  const chipsData = [
    {
      title: 'ladies',
      path: '/ladies',
    },
    {
      title: 'men',
      path: '/men',
    },
    {
      title: 'kids',
      path: '/kids',
    },
    {
      title: 'babies',
      path: '/babies',
    },
    {
      title: 'babies',
      path: '/babies',
    },
    {
      title: 'babies',
      path: '/babies',
    },
  ];

  return (
    <div className="flex flex-col w-full items-start justify-center mb-8 border">
      <div>
        <h3 className="text-lg font-semibold mb-4">New Arrivals</h3>
      </div>
      <div className="flex gap-2  w-full mb-1 ">
        {chipsData.map((value, i) => {
          return <Chip value={value.title} key={i} />;
        })}
      </div>
      <ProductsSlider />
    </div>
  );
};

export default NewArrivals;
