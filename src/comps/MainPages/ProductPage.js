import React from 'react';
import { useParams } from 'react-router-dom';
const ProductPage = () => {
  const { id } = useParams();
  return <div className='w-full'>
    <div>images</div>
    <div>sizes and buttons</div>
  </div>;
};

export default ProductPage;
