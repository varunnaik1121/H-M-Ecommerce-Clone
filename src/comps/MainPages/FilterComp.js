import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  updateSelectedSortByValue,
  removeSelectedFilter,
  updateUserSelectedFilters,
  updateSearchValue,
} from '../../redux/searchFilterSlice';

import { HiArrowRight } from 'react-icons/hi';
import DynamicInputs from '../StyledComponents/DynamicInputs';
import { useEffect } from 'react';
const FilterComp = ({ data, handleClick, handleBack }) => {
  const dispatch = useDispatch();
  const { userSelectedSortByValue, userSelectedFilters } = useSelector(
    (state) => state.search
  );

  useEffect(() => {
    console.log({ userSelectedSortByValue, userSelectedFilters });
  }, [userSelectedSortByValue, userSelectedFilters]);

  const handleRadioClick = (value, type, isChecked, singleValue) => {
    if (type === 'normal') return;

    if (type === 'radio') {
      dispatch(updateSelectedSortByValue(value));
    } else if (type === 'checkbox' && isChecked) {
      console.log('u want to add the particular item i think');
      dispatch(updateUserSelectedFilters(singleValue));
    } else if (type === 'checkbox' && !isChecked) {
      console.log('u want to delete the particular item');
      dispatch(removeSelectedFilter(singleValue));
    }
  };

  return (
    <>
      {data.map((value, index) => {
        return (
          <div
            className="w-full flex border  justify-between items-center  py-2  px-2 "
            key={index}
          >
            {value.type === 'normal' ? (
              <div className="hover:text-red flex justify-between items-center w-full">
                <div className="text-sm py-2 d">{value.title}</div>
                <div onClick={() => handleClick(value)}>
                  <HiArrowRight className="text-xl" />
                </div>
              </div>
            ) : (
              <DynamicInputs
                value={value}
                index={index}
                handleRadioClick={handleRadioClick}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default FilterComp;
