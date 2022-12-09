import React from 'react';
import newImage from '../assets/new.png';
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.png';
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Pagination } from 'swiper';
import { useDimension } from '../Hooks/useDimension';
import 'swiper/css';
//lets assume that it is data

const data = [
  {
    category: 'men',
    type: 'clothes',
    image: newImage,
  },
  {
    category: 'men',
    type: 'hoodies & sweatshirts',
    image: slider1,
  },
  {
    category: 'ladies',
    type: 'Tops & T-shirts',
    image: slider2,
  },
  {
    category: 'ladies',
    type: 'Trousers',
    image: slider3,
  },
  {
    category: 'ladies',
    type: 'Trousers',
    image: slider3,
  },
  {
    category: 'ladies',
    type: 'Trousers',
    image: slider3,
  },
  {
    category: 'ladies',
    type: 'Trousers',
    image: slider3,
  },
  {
    category: 'ladies',
    type: 'Trousers',
    image: slider3,
  },
  {
    category: 'ladies',
    type: 'Trousers',
    image: slider3,
  },
  {
    category: 'ladies',
    type: 'Trousers',
    image: slider3,
  },
  {
    category: 'ladies',
    type: 'Trousers',
    image: slider3,
  },
  {
    category: 'ladies',
    type: 'Trousers',
    image: slider3,
  },
];

const TrendingCategories = () => {
  const width = useDimension();
  const setSlidesPerView = () => {
    if (width <= 600 && width >= 0) {
      return 4;
    } else if (width > 600 && width < 1000) {
      return 6;
    } else {
      return 8;
    }
  };

  return (
    <div className="w-full h-full  ">
      <div className="w-full">
        <h3 className="text-lg  font-sm capitalize font-semibold">
          Trending categories
        </h3>
      </div>
      <div className="w-full py-4">
        <Swiper
          slidesPerView={setSlidesPerView()}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="w-full flex px-2"
        >
          {data.map((value, i) => {
            return (
              <SwiperSlide className="w-full  h-max flex flex-col items-center">
                <div className=" w-full  h-full max-w-[110px]">
                  <img
                    src={value.image}
                    alt="image"
                    className="rounded-full w-full h-full"
                  />
                </div>
                <p className="text-gray-500 capitalize mt-2 text-[12px] font-semibold">
                  {value.category}
                </p>
                <p className="text-[12px] font-medium max-w-[85%] text-center leading-4">
                  {value.type}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingCategories;
