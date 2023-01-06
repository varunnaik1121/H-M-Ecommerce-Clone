import React from 'react';

const Wrapper = ({ children }) => {
  console.log(children);
  return <div className={`flex justify-start mt-5 w-full`}>{children}</div>;
};

export default Wrapper;
