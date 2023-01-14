import React from 'react';
import { useParams } from 'react-router-dom';
const Product = () => {
  console.log(useParams());
  return <div>Product</div>;
};

export default Product;
