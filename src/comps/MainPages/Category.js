import React from 'react';
import { useParams } from 'react-router-dom'

const Category = () => {
  console.log(useParams());
  return <div>Category</div>;
};

export default Category;
