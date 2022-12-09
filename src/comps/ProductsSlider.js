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
const ProductsSlider = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const cardsData = [
    {
      modelImage: '',
      productImage: productImage1,
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['red', 'blue', 'green', 'black'],
      title: 'knitted bodycorn dress',
      path: '',
    },
    {
      modelImage: '',
      productImage: productImage2,
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['red', 'blue', 'green', 'black'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: '',
      productImage: productImage2,
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['red', 'blue', 'green', 'black'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: '',
      productImage: productImage2,
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['red', 'blue', 'green', 'black'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: '',
      productImage: productImage2,
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['red', 'blue', 'green', 'black'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: '',
      productImage: productImage2,
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['red', 'blue', 'green', 'black'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: '',
      productImage: productImage2,
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['red', 'blue', 'green', 'black'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: '',
      productImage: productImage2,
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['red', 'blue', 'green', 'black'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: '',
      productImage: productImage2,
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['red', 'blue', 'green', 'black'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: '',
      productImage: productImage2,
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['red', 'blue', 'green', 'black'],
      title: 'noob dress',
      path: '',
    },
    {
      modelImage: '',
      productImage: productImage2,
      originalPrice: 1299,
      discountPrice: 999,
      isNewArrival: false,
      availableColors: ['red', 'blue', 'green', 'black'],
      title: 'noob dress',
      path: '',
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="w-full  relative border-2 ">
      <div className="w-full h-full absolute sm:flex  top-0 left-0 hidden">
        <button
          onClick={sliderRef?.slickPrev}
          className="absolute -left-8 top-[50%] translate-y-1/2"
        >
          <AiOutlineArrowLeft className="text-xl text-black font-normal opacity-70 hover:text-red" />
        </button>
        <button
          onClick={sliderRef?.slickNext}
          className="absolute -right-8 top-[50%] translate-y-1/2"
        >
          <AiOutlineArrowRight className="text-xl text-black font-normal opacity-70 hover:text-red" />
        </button>
      </div>
      <Slider
        {...settings}
        ref={setSliderRef}
        className="w-full flex justify-evenly"
      >
        {cardsData.map((value) => {
          return (
            <div className="w-full grid grid-cols-16">
              <Card data={value} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductsSlider;
