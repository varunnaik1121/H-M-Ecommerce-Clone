import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Wrapper from '../Wrapper';
import { sidebarCategories } from '../../data/sidebarData';
import Title from '../StyledComponents/Title';
import SidebarFilter from './SidebarFilter';
import { useSelector } from 'react-redux';
import SlidingBar from '../StyledComponents/SlidingBar';
const ClothType = () => {
  const { clothType } = useParams();
  const { isSidebarFilterOpen } = useSelector((state) => state.user);
  const clothColors = [
    { color: 'red', code: '#FF0000' },
    { color: 'blue', code: '#8f44fd' },
    { color: 'green', code: '#00FF00' },
    { color: 'orange', code: '"fff' },
  ];

  return (
    <Wrapper open={isSidebarFilterOpen}>
      <Sidebar data={sidebarCategories} />
      <div className="xl:w-[65%] w-full sm:m-6 sm:w-full flex flex-col mt-2 mx-4 border  ">
        <Title title={clothType} />
        {isSidebarFilterOpen && <SidebarFilter totalItems={'241'} />}
        <div className="w-full border-1 flex justify-between">
          <div className="w-full ">
            <SlidingBar title={'sort by'} collections={clothColors} />
          </div>
          <div>Right</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ClothType;
