import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { VscAccount } from 'react-icons/vsc';
import { BsSearch, BsHeart, BsBag } from 'react-icons/bs';
import { RiAccountCircleLine } from 'react-icons/ri';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { openSearch, closeSearch } from '../redux/userSlice';
import SearchBar from './SearchBar';
const Navbar = () => {
  const { isSearchOpen } = useSelector((state) => state.user);
  console.log(isSearchOpen);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openSearch());
  };

  return (
    <div className=" max-w-full bg-white flex justify-between px-4 py-4 items-center sm:px-8 md:py-3 md:px-14 md:pb-12 ">
      {isSearchOpen && <SearchBar />}
      {isSearchOpen === false && (
        <>
          <div className="w-max h-8 ">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center justify-around cursor-pointer">
              <VscAccount className="w-6 h-6 text-black mx-1" />
              <p className="text-black hidden lg:block text-sm font-normal capitalize mx-1">
                sign in
              </p>
            </div>
            <div
              className="flex items-center justify-between lg:hidden cursor-pointer"
              onClick={handleClick}
            >
              <BsSearch className="w-5 h-5 text-black mx-1 " />
            </div>
            <div className="flex items-center justify-between cursor-pointer">
              <BsHeart className="w-5 h-5 text-black mx-1 " />
              <p className="text-black hidden lg:block font-normal text-sm capitalize mx-1">
                Favourites
              </p>
            </div>
            <div className="flex items-center justify-between cursor-pointer">
              <BsBag className="w-5 h-5 text-black mx-1" />
              <p className="text-black hidden lg:block text-sm font-normal capitalize mx-1">
                Shopping Bag <span className="text-sm">(0)</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
