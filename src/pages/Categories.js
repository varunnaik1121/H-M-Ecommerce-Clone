import React from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { sidebarCategories } from '../data/sidebarData';
import Hero from '../comps/Hero';
import Sidebar from '../comps/Sidebar';
import Wrapper from '../comps/Wrapper';
import SingleAds from '../comps/SingleAds';
import menMobileImage from '../assets/menMobileImage.jpeg';
import menLaptopImage from '../assets/menLaptopImage.jpeg';
import menMobileImage2 from '../assets/menMobileImage2.jpeg';
import menLaptopImage2 from '../assets/menLaptopImage2.jpeg';
import menMobileImage3 from '../assets/menMobileImage3.jpeg';
import menLaptopImage3 from '../assets/menLaptopImage3.jpeg';
import CategoryDescription from '../comps/CategoryDescription';
import Title from '../comps/StyledComponents/Title';
import SidebarFilter from '../comps/MainPages/SidebarFilter';

const Categories = () => {
  const { categories } = useParams();
  //desc
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  // const { categories } = useParams();
  console.log('this is from categories', categories);
  return (
    <Wrapper>
      <Sidebar data={sidebarCategories} />
      <div className="xl:w-[65%] w-full sm:m-6 sm:w-full flex flex-col mt-2 mx-4">
        <Title title={'View all'} />
        <SingleAds mobileImage={menMobileImage} laptopImage={menLaptopImage} />
        <SingleAds
          mobileImage={menMobileImage2}
          laptopImage={menLaptopImage2}
        />
        <SingleAds
          mobileImage={menMobileImage3}
          laptopImage={menLaptopImage3}
        />
        <CategoryDescription
          description={description}
          title={"Men's Clothing"}
        />
      </div>
      
    </Wrapper>
  );
};

export default Categories;
