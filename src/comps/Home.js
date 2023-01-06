import React from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import Sidebar from './Sidebar';
import Hero from './Hero';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
const Home = () => {
  return (
    <div className="w-full min-h-[100vh]  bg-white  pt-3 ">
      <Navbar />
      <Categories />
      <div className=" flex justify-center mt-5">
        {/* <Sidebar /> */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
