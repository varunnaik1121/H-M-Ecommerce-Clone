import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Wrapper from '../Wrapper';
import { sidebarCategories } from '../../data/sidebarData';
import Title from '../StyledComponents/Title';
import SidebarFilter from './SidebarFilter';
import { useSelector } from 'react-redux';
const ClothType = () => {
  const { clothType } = useParams();
  const { isSidebarFilterOpen } = useSelector((state) => state.user);

  return (
    <Wrapper open={isSidebarFilterOpen}>
      <Sidebar data={sidebarCategories} />
      <div className="xl:w-[65%] w-full sm:m-6 sm:w-full flex flex-col mt-2 mx-4 border  ">
        <Title title={clothType} />
        {isSidebarFilterOpen && <SidebarFilter totalItems={'241'} />}
        <div className="w-full border-1 flex justify-between">
          <div>left</div>
          <div>Right</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ClothType;
