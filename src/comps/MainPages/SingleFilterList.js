import React from 'react';

const SingleFilterList = ({ title, type }) => {
  console.log(title);
  return (
    <div className="w-full py-2 border-2 mt-2">
      {/* {
        <div className="w-full  flex justify-between items-center">
          <div>{title}</div>
          {type === 'normal' ? (
            <div>
              <HiArrowRight />
            </div>
          ) : (
            <input type={'radio'}></input>
          )}
        </div>
      } */}
      hello
    </div>
  );
};

export default SingleFilterList;
