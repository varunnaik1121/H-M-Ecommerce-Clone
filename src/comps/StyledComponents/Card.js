import React from 'react';
import { BsHeart, BsFillHeartFill } from 'react-icons/bs';

const Card = ({ data, index, isAddedToCart, isNewArrival }) => {
  return (
    <div
      className={`relative w-full h-full sm:px-3 px-2   mr-4 my-2 lg:max-w-[240px] md:max-w-[340px]`}
    >
      <div className="h-[85%] w-full mb-2 ">
        <a className="relative">
          <img
            src={data.modelImage}
            alt="image"
            className="w-full h-full object-cover cursor-pointer"
          />
          <div className="absolute right-3 bottom-3 p-2 hover:scale-125 transition-all cursor-pointer">
            {isAddedToCart ? (
              <BsFillHeartFill className="text-xl text-red" />
            ) : (
              <BsHeart className="text-xl " />
            )}
          </div>
        </a>
      </div>
      <div className="w-full">
        <a className="my-2 hover:underline cursor-pointer font-medium capitalize">
          <p className="text-[12px] text-black">{data.title}</p>
        </a>
        <p className="text-[12px] leading-6 font-medium">
          Rs.{data.originalPrice}.00
        </p>
        <div>
          {['#8f44fd', '#121212', '#50d71e'].map((color, i) => {
            return <div className={`bg-[${color}] w-2 h-2 rounded-full`}></div>;
          })}
          {/* <div className="bg-[#8f44fd] w-2 h-2 rounded-full"></div>
          <div className="bg-[#121212] w-2 h-2 rounded-full"></div>
          <div className="bg-[#4f4f4f] w-2 h-2 rounded-full"></div> */}
        </div>
        <p className="text-[11px]">{isNewArrival && 'New Arrival'}</p>
      </div>
    </div>
  );
};

export default Card;
