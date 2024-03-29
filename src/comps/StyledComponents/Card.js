import React, { useEffect, useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';

import { Tooltip } from '@mui/material';
import heartIcon from '../../assets/heartIcon.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  addToFavourites,
  removeFromFavourites,
} from '../../redux/favouritesSlice';
import { ConstructionOutlined } from '@mui/icons-material';

const Card = ({ data, isAddedToCart, isNewArrival, isNotSlider }) => {
  const dispatch = useDispatch();
  const { favouriteItems } = useSelector((state) => state.favourites);
  const navigate = useNavigate();
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [isItemAddedToCart, setIsItemAddedToCart] = useState(
    favouriteItems.some((item) => item === data.id)
  );

  useEffect(() => {
    setIsItemAddedToCart(favouriteItems.some((item) => item === data.id));
    console.log({ favouriteItems });
  }, [favouriteItems, data]);

  // function to handle the routes
  const handleRoute = (id) => {
    navigate(`/product/${id}`);
  };

  //fuction to handle to favourites
  const handleFavourites = (e, id) => {
    e.stopPropagation();
    dispatch(addToFavourites(id));
  };

  const handleRemoveFromFavourites = (e, id) => {
    e.stopPropagation();
    dispatch(removeFromFavourites(id));
  };

  return (
    <div
      className={`relative w-full h-full sm:px-1 px-1    mr-2 my-2   ${
        isNotSlider ? '' : 'lg:max-w-[240px]'
      } ${isNotSlider ? '' : 'md:max-w-[340px]'} ${isNotSlider && ''} `}
    >
      <div className="h-max w-full mb-2  ">
        <button className="relative" onClick={() => handleRoute(data.id)}>
          <img
            src={isMouseEntered ? data.primaryTumbnail : data.primaryImage}
            alt="image"
            className="w-full h-full object-cover cursor-pointer"
            onMouseEnter={() => setIsMouseEntered(true)}
            onMouseLeave={() => setIsMouseEntered(false)}
          />
          <div className="absolute right-2 bottom-2 p-1 hover:scale-125 transition-all cursor-pointer z-50">
            {isItemAddedToCart ? (
              <BsFillHeartFill
                className="text-xl text-red font-thin border"
                onClick={(e, id) => handleRemoveFromFavourites(e, data.id)}
              />
            ) : (
              <img
                src={heartIcon}
                className="right-0 w-[30px] h-auto z-50 border"
                onClick={(e, id) => handleFavourites(e, data.id)}
              ></img>
            )}
          </div>
        </button>
      </div>
      <div className="w-full ">
        <a
          className=" hover:underline cursor-pointer font-medium capitalize"
          href="#"
        >
          <p className="text-[12px] mt-4  text-black">{data.title}</p>
        </a>
        <p className={`text-[12px]   font-medium ${isNotSlider ? 'mt-1' : ''}`}>
          Rs.{data.price}.00
        </p>
        <div className="flex  items-center  ">
          {data?.colors &&
            data?.colors?.slice(0, 3).map((color, i) => {
              return (
                <>
                  <Tooltip title={color.color} aria-label="add">
                    <div
                      className={`w-2 h-2 rounded-full mr-[4px] my-2 `}
                      key={i}
                      style={{ backgroundColor: `${color.color}` }}
                    ></div>
                  </Tooltip>
                </>
              );
            })}
          {data.colors && data?.colors?.length > 3 && (
            <p className="text-[10px] ml-1 leading-[6px]">
              +{parseInt(data?.colors?.length) - 3}
            </p>
          )}
          {/* <div className="bg-[#8f44fd] w-2 h-2 rounded-full"></div>
          <div className="bg-[#121212] w-2 h-2 rounded-full"></div>
          <div className="bg-[#4f4f4f] w-2 h-2 rounded-full"></div> */}
        </div>
        <p className={`text-[10px] tracking-wide ${isNotSlider ? 'my-1' : ''}`}>
          {isNewArrival ? 'New Arrival' : ''}
        </p>
      </div>
    </div>
  );
};

export default Card;
