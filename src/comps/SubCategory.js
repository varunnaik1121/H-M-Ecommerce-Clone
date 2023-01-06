import React from 'react';
import { useParams } from 'react-router-dom';
const SubCategory = () => {
  const {subcat} = useParams();

  return <div>SubCategory</div>;
};

export default SubCategory;
