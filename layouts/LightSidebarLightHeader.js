import React from 'react';

// components

import LightSidebar from "../components/sidebar/LightSidebar.js";
import Navbar from '../components/navbar/Navbar.js';

export default function LightSidebarLightHeader({ children }) {
  return (
    <>
      <LightSidebar />
      <div className="relative ml-64 bg-gray-200">
        <Navbar />
        <div className="relative pb-12 pt-12"></div>
        <div className="mx-auto w-full -m-24">
          {children}
        </div>
      </div>
    </>
  );
}
