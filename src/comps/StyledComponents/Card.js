import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="w-full h-full px-1 mr-4 my-2 ">
      <div className="h-[85%] w-full mb-2">
        <a>
          <img
            src={data.productImage}
            alt="image"
            className="w-full h-full object-cover cursor-pointer"
          />
        </a>
      </div>
      <div className="w-full">
        <a className="my-2 hover:underline cursor-pointer font-medium">
          <p className="text-sm text-black">{data.title}</p>
        </a>
        <p className="text-sm font-medium">Rs.{data.originalPrice}</p>
      </div>
    </div>
  );
};

export default Card;
