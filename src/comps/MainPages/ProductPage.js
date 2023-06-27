import React, { useState } from 'react';
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
const ProductPage = () => {
  const { id } = useParams();
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

  const handleSizeClick=(size,index)=>{

  }
  return (
    <div className="w-full flex px-4 gap-2 ">
      <div className="flex-row gap-3  ">
        <div className="flex">
          <div>
            <img src={shirtImage1} alt="shirt1" className="object-cover" />
          </div>
          <div className="hidden xl:block">
            <img src={shirtImage2} alt="shirt2" className="object-cover" />
          </div>
        </div>
        <div className=" capitalize font-medium bg-[#fff] xl:py-[8%] xl:px-[15%] sm:py-[4%] sm:px-[10%] flex flex-col text justify-center items-start ">
          {data?.map((value) => {
            return <Accordin data={value} />;
          })}
        </div>
      </div>

      <div className="xl:w-[45%] font-medium  text-[#222] tracking-wide h-full pt-5 pl-4">
        <h4 className="text-[16px]">Relaxed fit patterned resort shirt</h4>
        <h1 className=" text-black text-[20px]">Rs. 1299.00</h1>
        <h6 className="py-3 text-sm mb-3">White/Goldfish</h6>
        <ColorSlider data={colorsData} />
        <div className="flex  items-center my-3">
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
            {sizes.map((size, idx) => (
              <button
                className="px-8 py-[10px] uppercase border-darkGray border"
                onClick={() => handleSizeClick(size, idx)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
