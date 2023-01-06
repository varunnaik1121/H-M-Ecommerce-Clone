import React from 'react';
import { useDimension } from '../Hooks/useDimension';

import HomeButton from './StyledComponents/HomeButton';
const SingleAds = ({
  mobileImage,
  laptopImage,
  title,
  subtitle,
  info,
  btnName,
}) => {
  const width = useDimension();
  return (
    <div className="w-full lg:h-full  relative mb-5">
      <img
        src={width <= 1024 ? mobileImage : laptopImage}
        alt="model"
        className="w-full lg:h-full object-cover "
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,.2)]"></div>
      <div className=" font-[600]  absolute bottom-[0px] md:bottom-[10%] text-white left-[50%] translate-x-[-50%] text-center w-full flex flex-col items-center">
        <p className="md:text-4xl leading-4 sm:text-2xl text-lg capitalize">
          {title}{' '}
        </p>

        <p className="text-[12px] md:text-sm  font-medium my-2 text-gray max-w-[80%] ">
          {subtitle}
        </p>
        <HomeButton title={btnName} />
      </div>
    </div>
  );
};

export default SingleAds;
