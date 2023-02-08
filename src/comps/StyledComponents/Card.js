import React from 'react';
import { BsHeart, BsFillHeartFill } from 'react-icons/bs';
import { TfiHeart } from 'react-icons/tfi';
import { Tooltip } from '@mui/material';
import heartIcon from '../../assets/heartIcon.png';
const Card = ({ data, isAddedToCart, isNewArrival, isNotSlider }) => {
  return (
    <div
      className={`relative w-full h-full sm:px-1 px-1    mr-2 my-2   ${
        isNotSlider ? '' : 'lg:max-w-[240px]'
      } ${isNotSlider ? '' : 'md:max-w-[340px]'} ${isNotSlider && '  '} `}
    >
      <div className="h-max w-full mb-2  ">
        <a className="relative">
          <img
            src={data.modelImage}
            alt="image"
            className="w-full h-full object-cover cursor-pointer"
          />
          <div className="absolute right-2 bottom-2 p-1 hover:scale-125 transition-all cursor-pointer">
            {isAddedToCart ? (
              <BsFillHeartFill className="text-xl text-red font-thin" />
            ) : (
              <img className="w-[26px] h-[26px]  " alt="icon" src={heartIcon} />
            )}
          </div>
        </a>
      </div>
      <div className="w-full">
        <a
          className=" hover:underline cursor-pointer font-medium capitalize"
          href="#"
        >
          <p className="text-[12px] mt-4  text-black">{data.title}</p>
        </a>
        <p className="text-[12px]   font-medium">Rs.{data.originalPrice}.00</p>
        <div className="flex my-1 items-center  ">
          {data?.colors?.slice(0, 3).map((color, i) => {
            return (
              <>
                <Tooltip title={color.title} aria-label="add">
                  <div
                    className={`w-2 h-2 rounded-full mr-[4px] `}
                    key={i}
                    style={{ backgroundColor: `${color.color}` }}
                  ></div>
                </Tooltip>
              </>
            );
          })}
          {data?.colors?.length > 3 && (
            <p className="text-[10px] ml-1 leading-[6px]">
              +{parseInt(data?.colors?.length) - 3}
            </p>
          )}
          {/* <div className="bg-[#8f44fd] w-2 h-2 rounded-full"></div>
          <div className="bg-[#121212] w-2 h-2 rounded-full"></div>
          <div className="bg-[#4f4f4f] w-2 h-2 rounded-full"></div> */}
        </div>
        <p className="text-[11px] my-1">{isNewArrival ? 'New Arrival' : ''}</p>
      </div>
    </div>
  );
};

export default Card;
