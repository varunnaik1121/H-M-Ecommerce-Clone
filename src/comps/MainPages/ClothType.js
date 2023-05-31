import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Wrapper from '../Wrapper';
import { sidebarCategories } from '../../data/sidebarData';
import Title from '../StyledComponents/Title';
import SidebarFilter from './SidebarFilter';
import { useDispatch, useSelector } from 'react-redux';
import SlidingBar from '../StyledComponents/SlidingBar';
import { BsFilterRight } from 'react-icons/bs';
import { cardsData } from '../../data/cardsData';
import Card from '../StyledComponents/Card';
const ClothType = () => {
  const dispatch = useDispatch();
  const { clothType } = useParams();
  const { isSidebarFilterOpen, openSidebarFilter } = useSelector(
    (state) => state.user
  );

  const handleFilter = () => {
    dispatch(openSidebarFilter());
  };
  return (
    <Wrapper open={isSidebarFilterOpen}>
      <Sidebar data={sidebarCategories} />
      <div className=" w-full sm:m-6 sm:w-full flex flex-col mt-2 mx-4 border">
        <Title title={clothType} />
        {isSidebarFilterOpen && <SidebarFilter totalItems={'241'} />}
        <div className="w-full border-1 flex sm:justify-between sm:flex-row border-red flex-col border">
          <div className="w-max flex border-1 border-blue">
            <SlidingBar />

            <div className="flex items-center justify-between px-3 py-2  text-sm">
              <BsFilterRight className="text-2xl" />
              <button
                className="w-full flex-1 ml-2 capitalize"
                onClick={handleFilter}
              >
                filters
              </button>
            </div>
          </div>
          <div className="flex items-center px-3">
            <div className="flex items-center mr-6">
              <button className="text-[13px] font-medium capitalize px-3 text-red">
                model
              </button>
              <button className="text-[13px] font-medium capitalize">
                product
              </button>
            </div>
            <div>
              <p className="text-[13px] font-medium capitalize">442 items</p>
            </div>
          </div>
        </div>
        <div className="mt-5 grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 ">
          {cardsData.map((data, index) => {
            return (
              <Card data={data} isNewArrival={data.isNewArrival} isNotSlider />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default ClothType;
