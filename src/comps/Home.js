import React from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import Sidebar from './Sidebar';
import Hero from './Hero';
import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <div className="w-full min-h-[100vh] max-w-[100vw] bg-white overflow-hidden pt-3">
      <Navbar />
      <Categories />
      <div className="border-2 border-green-500 flex justify-start">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
