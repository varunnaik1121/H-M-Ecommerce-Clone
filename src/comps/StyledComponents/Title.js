import React from 'react';

const Title = ({ title }) => {
  return (
    <div className='mb-3'>
      <h2 className="font-[600] md:text-4xl uppercase text-black tracking-wide mb-4 w-full text-2xl text-center md:text-left">
        {title}
      </h2>
      <p className="text-sm">
        Dress up your everyday look with our men's shirts. We have slim- and
        regular-fit shirts to match your mood as well as your plans – think
        everything from classic Grandad and oxford shirts, to timeless denim
        shirts, flannel shirts and corduroy shirts. Trend setter? Look no
        further than our stylish shackets to solve all your weather woes this
        season. dress your new favorite shirt with a pair of jeans and you'll be
        good to go.
      </p>
    </div>
  );
};

export default Title;
