import React from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import Sidebar from './Sidebar';
import Hero from './Hero';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import SidebarFilter from './MainPages/SidebarFilter';
const Home = () => {
  const { isSidebarFilterOpen } = useSelector((state) => state.user);
  return (
    <div className={`w-full min-h-[100vh] relative bg-white  pt-3  `}>
      {isSidebarFilterOpen && (
        <div className="absolute w-[100vw] min-h-full bg-[rgba(0,0,0,.5)] z-50 overflow-hidden top-0 left-0 bottom-0 right-0 "></div>
      )}
      <Navbar />
      <Categories />
      <div className=" flex justify-center mt-5">
        {/* <Sidebar /> */}
        <Outlet />
      </div>
      <Footer />
      {isSidebarFilterOpen && <SidebarFilter />}
    </div>
  );
};

export default Home;
