import React from 'react';
import advertiseImage3 from '../assets/advertisement3.webp';
import advertiseImage2 from '../assets/advertisementImage1.webp';
import HomeButton from './StyledComponents/HomeButton';
import TrendingCategories from './TrendingCategories';
const Hero = () => {
  return (
    <div className="lg:w-[70%]  w-full md:px-3 px-5 ">
      <div className="w-full  h-full flex flex-col gap-1">
        <div className="w-full lg:max-h-[600px] lg:min-h-[600px] h-350px relative mb-5">
          <img
            src={advertiseImage3}
            alt="model image"
            className="w-full lg:h-full object-cover "
          />
          <div className="text-4xl uppercase font-bold absolute top-8 text-white">
            <p className="">Black pink </p>
            <span>merch</span>
            <p className="text-sm  font-normal">Rev up your new style</p>
            <HomeButton title={'Shop Now'} />
          </div>
        </div>
        <div className="w-full lg:max-h-[600px] h-350px relative mb-5 ">
          <img
            src={advertiseImage2}
            alt="model image"
            className="w-full lg:h-full object-cover bg-center"
          />
          <div className="text-4xl uppercase font-bold absolute top-8 text-white ">
            <p className="">Festive check! </p>
            <span>Seasonal prints and cosy details ahead</span>
          </div>
        </div>
        <TrendingCategories />
      </div>
    </div>
  );
};

export default Hero;
