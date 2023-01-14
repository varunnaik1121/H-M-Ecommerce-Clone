import React from 'react';

const Title = ({ title }) => {
  return (
    <h2 className="font-medium md:text-4xl uppercase text-black tracking-wide mb-6 w-full text-2xl text-center md:text-left">
      {title}
    </h2>
  );
};

export default Title;
