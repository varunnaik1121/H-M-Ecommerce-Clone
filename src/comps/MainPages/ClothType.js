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
      <Title title={clothType} />
      {isSidebarFilterOpen && <SidebarFilter totalItems={'241'} />}
    </Wrapper>
  );
};

export default ClothType;
