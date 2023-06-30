import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './StyledComponents/Card';
import productImage1 from '../assets/productImage1.jpeg';
import productImage2 from '../assets/productImage2.jpeg';
import { useRef } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState } from 'react';
import { useDimension } from '../Hooks/useDimension';

const ProductsSlider = ({allProducts}) => {
  const [sliderRef, setSliderRef] = useState(null);
  const width = useDimension();
  const setSlidesToShow = () => {
    if (width >= 1024) {
      return 4;
    }
    if (width < 1024 && width >= 700) {
      return 3;
    }
    if (width > 0 && width < 700) {
      return 2;
    }
  };
  const cardsData = [
    {
      modelImage: productImage1,
      productImage: '',
      originalPrice: 1299.0,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['cyan-500', 'indigo-400', 'indigo-400'],
      title: 'knitted bodycorn dress',
      path: '',
    },
    {
      modelImage: productImage2,
      productImage: '',
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['cyan-500', 'cyan-500', 'cyan-500'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: productImage2,
      productImage: '',
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['cyan-500', 'indigo-400', 'cyan-500'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: productImage2,
      productImage: '',
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['cyan-500', 'indigo-400', 'cyan-500'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: productImage2,
      productImage: '',
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['cyan-500', 'indigo-400', 'cyan-500'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: productImage2,
      productImage: '',
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['cyan-500', 'indigo-400', 'cyan-500'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: productImage2,
      productImage: '',
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['cyan-500', 'indigo-400', 'cyan-500'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: productImage2,
      productImage: '',
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['cyan-500', 'indigo-400', 'cyan-500'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: productImage2,
      productImage: '',
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['cyan-500', 'indigo-400', 'cyan-500'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: productImage2,
      productImage: '',
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['cyan-500', 'indigo-400', 'cyan-500'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: productImage2,
      productImage: '',
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['cyan-500', 'indigo-400', 'cyan-500'],
      title: 'noob dress',
      path: '',
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: setSlidesToShow(),
    slidesToScroll: setSlidesToShow(),
  };
  return (
    <div className="w-full  relative  ">
      <div className="w-full h-full absolute sm:flex  top-0 left-0 hidden">
        <button
          onClick={sliderRef?.slickPrev}
          className="absolute -left-8 top-[50%] translate-y-1/2"
        >
          <AiOutlineArrowLeft className="text-xl  font-normal opacity-70 hover:text-red" />
        </button>
        <button
          onClick={sliderRef?.slickNext}
          className="absolute -right-8 top-[50%] translate-y-1/2"
        >
          <AiOutlineArrowRight className="text-xl  font-normal opacity-70 hover:text-red" />
        </button>
      </div>
      <Slider
        {...settings}
        ref={setSliderRef}
        className="w-full flex justify-evenly"
      >
        {allProducts?.map((value, i) => {
          return (
            <div className="w-full grid grid-cols-16 " key={i}>
              <Card
                data={value}
                index={i}
                isAddedToCart
                isNewArrival={value.isNewArrival}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductsSlider;
