import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shirtImage1 from '../../assets/shirtImage1.jpeg';
import shirtImage2 from '../../assets/shirtImage2.jpeg';
import CategoryDescription from '../CategoryDescription';
import FooterAccordin from '../StyledComponents/FooterAccordin';
import Footer from '../Footer';
import Accordin from '../StyledComponents/Accordin';
import shirt1 from '../../assets/shirt1.webp';
import shirt2 from '../../assets/shirt2.webp';
import shirt3 from '../../assets/shirt3.webp';
import shirt4 from '../../assets/shirt4.webp';
import ColorSlider from '../StyledComponents/ColorSlider';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import Button from '../StyledComponents/Button';
import { BsHandbag } from 'react-icons/bs';
import { BiStore } from 'react-icons/bi';
import { VscInfo } from 'react-icons/vsc';
import gridImage1 from '../../assets/gridImage1.webp';
import gridImage2 from '../../assets/gridImage2.webp';
import gridImage3 from '../../assets/gridImage3.webp';
import gridImage4 from '../../assets/gridImage4.webp';
// import { singleProductData } from '../../data/singleProductData';
import { allProducts } from '../../data/singleProductData';
import ProductsSlider from '../ProductsSlider';
import Slider from 'react-slick';
import Card from '../StyledComponents/Card';
import TrendingCategories from '../TrendingCategories';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDimension } from '../../Hooks/useDimension';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductPage = () => {
  const { id } = useParams();

  //we will keep another table for ratings and keep track of id and total reviews
  //and calculate the total reviews by total persons *each rating value/total persons
  const data = [
    {
      title: 'Description',
      subtitle: `Length: Regular length
  Sleeve Length: Short sleeve
  Fit: Relaxed fit
  Neckline: Round neck
  Description: Green/White/Orange, Wake up and smell the flowers, Flowers
  Price (MRP): Rs. 799.00incl. of all taxes
  Country of production: Bangladesh
  Common generic name: T-shirt
  Size: XS: Width: 100 cm, Length: 68 cm
  Size: S: Width: 1.08 m, Length: 69 cm
  Size: M: Width: 1.16 m, Length: 71 cm
  Size: L: Width: 1.24 m, Length: 72 cm
  Size: XL: Width: 1.32 m, Length: 73 cm
  Size: XXL: Width: 1.40 m, Length: 74 cm
  Net quantity: 1 N
  Manufactured by: N/A
  Date of manufacture: N/A
  Date of import: 05-2023
  Customer service: In case of consumer complaint, write to H&M Hennes & Mauritz Retail PVT. Ltd, A Wing, D3, 2nd Floor, District Center, Saket, New Delhi 110017, India or call Telephone: 0008000501633. For online and store complaints email customerservice.in@hm.com`,
    },
    {
      title: 'Materials & Supports',
      subtitle: `Length: Regular length
    Sleeve Length: Short sleeve
    Fit: Relaxed fit
    Neckline: Round neck
    Description: Green/White/Orange, Wake up and smell the flowers, Flowers
    Price (MRP): Rs. 799.00incl. of all taxes
    Country of production: Bangladesh
    Common generic name: T-shirt
    Size: XS: Width: 100 cm, Length: 68 cm
    Size: S: Width: 1.08 m, Length: 69 cm
    Size: M: Width: 1.16 m, Length: 71 cm
    Size: L: Width: 1.24 m, Length: 72 cm
    Size: XL: Width: 1.32 m, Length: 73 cm
    Size: XXL: Width: 1.40 m, Length: 74 cm
    Net quantity: 1 N
    Manufactured by: N/A
    Date of manufacture: N/A
    Date of import: 05-2023
    Customer service: In case of consumer complaint, write to H&M Hennes & Mauritz Retail PVT. Ltd, A Wing, D3, 2nd Floor, District Center, Saket, New Delhi 110017, India or call Telephone: 0008000501633. For online and store complaints email customerservice.in@hm.com`,
    },
  ];

  const colorsData = [
    {
      colorName: 'Blue',
      image: shirt1,
    },
    {
      colorName: 'green',
      image: shirt2,
    },
    {
      colorName: 'red',
      image: shirt3,
    },
    {
      colorName: 'black/beige',
      image: shirt4,
    },
  ];

  const sizes = ['xs', 'sm', 'm', 'l', 'xl', 'xxl'];

  //a state to select
  const [selectedSize, setSelectedSize] = useState('');
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSizeClick = (size, index) => {
    setSelectedSize(size);
  };

  const fetchItem = (id) => {
    setProductData(
      allProducts.find((item, idx) => parseInt(item.id) === parseInt(id))
    );
  };

  console.log({ productData, id });

  useEffect(() => {
    setLoading(true);
    fetchItem(id);
    setLoading(false);
  }, [id]);

  //probably add some loaders
  if (loading) {
    return (
      <div className="min-h-[100vh] flex justify-center items-center">
        Loading.....
      </div>
    );
  }
  if (productData === undefined) {
    return (
      <div className="h-[90vh] flex justify-center text-2xl font-bold mt-[10%]">
        No Such prodcut Found
      </div>
    );
  }

  return (
    <div className="flex-row md:px-4 px-2 min-h-[100vh]">
      <div className="w-full flex px-4 gap-2 relative flex-col lg:flex-row">
        <div className="flex-row gap-3  ">
          <div className="flex gap-2 justify-center">
            <div>
              <img
                src={productData?.primaryImage}
                alt="shirt1"
                className="object-cover"
              />
            </div>
            <div className="hidden xl:block ">
              <img
                src={productData?.primaryImage}
                alt="shirt2"
                className="object-cover"
              />
            </div>
          </div>
          <div className="capitalize font-medium bg-[#fff] xl:py-[8%] xl:px-[15%] sm:py-[4%] sm:px-[10%] flex flex-col text justify-center py-3 my-4 items-start">
            {data?.map((value) => {
              return <Accordin data={value} />;
            })}
          </div>
          <div className="w-full  grid-cols-2 gap-2 place-content-end hidden lg:grid">
            {productData?.gridImages?.map((image, idx) => (
              <div key={idx}>
                <img src={image} alt={`${idx + 1}image`} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full xl:w-[50%] font-medium  text-[#222] tracking-wide h-full md:pt-5 pt-2 pl-4">
          <h4 className="text-[16px]">{productData?.title}</h4>
          <h1 className=" text-black text-[20px]">
            Rs {productData?.price}.00
          </h1>
          <h6 className="py-3 text-sm mb-3 text-center lg:text-left">
            {productData?.subtitle}
          </h6>
          <ColorSlider data={productData?.colors} />
          <div className="flex  items-center  my-3">
            <h6 className="uppercase xl:my-4 my-3 font-semibold tracking-wide text-sm">
              Reviews (45)
            </h6>
            <div className="flex mx-3 gap-[1px]">
              <BsStarFill className="text-[12px]" />
              <BsStarFill className="text-[12px]" />
              <BsStarFill className="text-[12px]" />
              <BsStarFill className="text-[12px]" />
              <BsStarHalf className="text-[12px]" />
            </div>
          </div>
          <div>
            <h6 className="capitalize text-sm">sizes</h6>
            <div className="flex gap-2 my-2 tracking-wide flex-wrap text-[12px]">
              {productData?.availableSizes?.map((size, idx) => (
                <button
                  className={`px-8 py-[10px] uppercase border-darkGray border ${
                    selectedSize === size && 'bg-black text-white'
                  }`}
                  onClick={() => handleSizeClick(size, idx)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full my-5 shadow-sm cursor-pointer flex items-center py-3 px-4 bg-black text-white justify-center">
            <BsHandbag className="mx-2" />
            <button>Add</button>
          </div>
          <div>
            <div className="flex items-center font-medium">
              <BiStore />
              <h6
                className={`text-sm mx-3 text-black ${
                  productData?.isAvailableInStores ? '' : 'opacity-70'
                } font-medium`}
              >
                {productData?.isAvailableInStores
                  ? 'Available in Stores'
                  : 'Not available in stores'}
              </h6>
            </div>
            <div className="flex items-center font-medium">
              <VscInfo />
              <h6 className="text-sm mx-3 my-2 text-black  font-medium">
                {productData?.estimatedDeliveryTime}
              </h6>
            </div>
          </div>
        </div>
        <div className="w-full  grid-cols-2 gap-2 place-content-end lg:hidden grid">
          {productData?.gridImages?.map((image, idx) => (
            <div key={idx}>
              <img src={image} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-[5%] px-[5%]">
        <div className="">
          <h2 className="sm:text-xl text-md text-semibold py-2">
            Others also bought
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
