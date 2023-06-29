import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Wrapper from '../Wrapper';
import { sidebarCategories } from '../../data/sidebarData';
import Title from '../StyledComponents/Title';
import SidebarFilter from './SidebarFilter';
import { useDispatch, useSelector } from 'react-redux';
import SlidingBar from '../StyledComponents/SlidingBar';
import { openSidebarFilter } from '../../redux/userSlice';
import { BsFilterRight } from 'react-icons/bs';
import { cardsData } from '../../data/cardsData';
import { allProducts } from '../../data/singleProductData';
import Card from '../StyledComponents/Card';
import { BiCheckbox, BiGridAlt } from 'react-icons/bi';
import { LinearProgress } from '@mui/material';
import Button from '../StyledComponents/Button';
const ClothType = () => {
  const dispatch = useDispatch();
  const { clothType } = useParams();
  const { isSidebarFilterOpen } = useSelector((state) => state.user);
  const [isActive, setIsActive] = useState('model');

  const handleActive = (value) => {
    setIsActive(value);
    // console.log(value)
  };

  const handleFilter = () => {
    dispatch(openSidebarFilter());
  };
  return (
    <Wrapper open={isSidebarFilterOpen}>
      {/* {isSidebarFilterOpen && <SidebarFilter />} */}
      <Sidebar data={sidebarCategories} />
      <div className=" w-full sm:m-6 sm:w-full flex flex-col mt-2 mx-4 border">
        <Title title={clothType} />
        {isSidebarFilterOpen && <SidebarFilter totalItems={'241'} />}
        <div className="w-full border-1 flex sm:justify-between sm:flex-row border-red flex-col border">
          {/* <SlidingBar /> */}

          <div
            className="flex items-center justify-end   border px-3 py-2  text-sm"
            onClick={handleFilter}
          >
            <BsFilterRight className="text-xl border" />
            <button className="  ml-2 uppercase font-medium text-sm">
              FILTER & SORT
            </button>
          </div>

          <div className="flex items-center justify-between px-3 py-2 sm:py-0">
            <div className="flex items-center mr-6">
              <button
                className={`text-[13px] font-medium capitalize  mx-3  ${
                  isActive === 'model' && 'border-b-[1px] border-red text-red'
                }`}
                value={'model'}
                onClick={(e) => handleActive(e.target.value)}
              >
                model
              </button>
              <button
                className={`text-[13px] font-medium capitalize ${
                  isActive === 'product' && 'border-b-[1px] border-red text-red'
                }`}
                value={'product'}
                onClick={(e) => handleActive(e.target.value)}
              >
                product
              </button>
            </div>
            <div className="flex items-center justify-end gap-1">
              <p className="text-[13px] font-medium capitalize">442 items</p>
              <div className="flex gap-2">
                <BiCheckbox className="text-2xl border" />
                <BiGridAlt className="text-2xl border" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 ">
          {allProducts?.map((data, index) => {
            return (
              <Card data={data} isNewArrival={data.isNewArrival} isNotSlider />
            );
          })}
        </div>
        <div className="flex-1 border py-5 flex justify-center flex-col items-center">
          <h4 className="text-[12px] font-medium">
            Showing {36} of {158} items
          </h4>
          <div className="my-3  flex justify-center ">
            <LinearProgress
              variant="determinate"
              value={20}
              sx={{ width: '200px', bgcolor: 'gray' }}
              valueBuffer={100}
              color={'secondary'}
            />
          </div>
          <Button title={"Load more Products"} />
        </div>
      </div>
    </Wrapper>
  );
};

export default ClothType;
