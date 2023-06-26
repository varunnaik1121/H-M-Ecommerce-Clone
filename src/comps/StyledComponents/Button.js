import React from 'react';

const Button = ({ title }) => {
  return <button className='py-3 border-none outline-none shadow-md text-sm font-medium tracking-wide bg-black px-[50px] text-white'>{title}</button>;
};

export default Button;
