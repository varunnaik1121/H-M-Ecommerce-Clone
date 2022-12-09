import React from 'react';
import advertiseImage3 from '../assets/advertisementImage2.webp';
import advertiseImage1 from '../assets/advertisementImage1.webp';
import advertiseImage4 from '../assets/advertisementImage4.webp';
import advertisement3 from '../assets/advertisement3.webp';
import NewArrivals from './NewArrivals';
import HomeButton from './StyledComponents/HomeButton';
import { useDimension } from '../Hooks/useDimension';
import TrendingCategories from './TrendingCategories';
const Hero = () => {
  const width = useDimension();

return (
    <div className="lg:w-[70%]  w-full md:px-6 px-5 ">
      <div className="w-full  h-full flex flex-col gap-1">
        <div className="w-full lg:h-full  relative mb-5">
          <img
            src={width <= 1024 ? advertiseImage3 : advertisement3}
            alt="model"
            className="w-full lg:h-full object-cover "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,.2)]"></div>
          <div className="text-4xl uppercase font-bold absolute top-8 text-white">
            <p className="">Black pink </p>
            <span>merch</span>
            <p className="text-sm  font-normal">Rev up your new style</p>
            <HomeButton title={'Shop Now'} />
          </div>
        </div>
        <div className="w-full lg:max-h-[600px] h-350px relative mb-5 ">
          <img
            src={width <= 1024 ? advertiseImage1 : advertiseImage4}
            alt="model"
            className="w-full lg:h-full object-cover bg-center"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,.2)]"></div>
          <div className="text-4xl uppercase font-bold absolute top-8 text-white ">
            <p className="">Festive check! </p>
            <span>Seasonal prints and cosy details ahead</span>
          </div>
        </div>
        <TrendingCategories />
        <NewArrivals />
      </div>
    </div>
  );
};

export default Hero;
