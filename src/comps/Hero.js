import React from 'react';

import NewArrivals from './NewArrivals';
import SingleAds from '../comps/SingleAds';
import advertiseImage3 from '../assets/advertisementImage2.webp';
import advertiseImage1 from '../assets/advertisementImage1.webp';
import advertiseImage4 from '../assets/advertisementImage4.webp';
import advertisement3 from '../assets/advertisement3.webp';
import section3mobileImage from '../assets/section3mobileImage.webp';
import section3LaptopImage from '../assets/section3LaptopImage.webp';
import TrendingCategories from './TrendingCategories';
const Hero = () => {
  return (
    <div className="lg:w-[85%] xl:w-[70%] w-full md:px-6 px-5 ">
      <div className="w-full h-full flex flex-col gap-1">
        <SingleAds
          mobileImage={advertiseImage3}
          laptopImage={advertisement3}
          info={'Seasonal prints and cosy details ahead'}
          title={'festive check'}
          subtitle={'Seasonal prints and cosy details ahead'}
          btnName={'shop Now'}
        />
        <SingleAds
          mobileImage={advertiseImage1}
          laptopImage={advertiseImage4}
          info={'Seasonal prints and cosy details ahead'}
          title={'festive check'}
          subtitle={'Seasonal prints and cosy details ahead'}
          btnName={'shop Now'}
        />

        <TrendingCategories />
        <NewArrivals />
        <SingleAds
          mobileImage={section3LaptopImage}
          laptopImage={section3mobileImage}
          title={'Warm in any weather'}
          subtitle={'Embrace the new season in warm styles for your baby'}
          btnName={'shop now'}
        />
      </div>
    </div>
  );
};

export default Hero;
