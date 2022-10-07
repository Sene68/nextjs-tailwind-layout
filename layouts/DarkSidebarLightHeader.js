import React from 'react';

// components

import DarkSidebar from "../components/sidebar/DarkSidebar.js";
import Navbar from '../components/navbar/Navbar.js';

export default function BrandSidebarLightHeader({ children }) {
  return (
    <>
      <DarkSidebar />
      <div className="relative ml-64 bg-gray-200">
        <Navbar />
        <div className="relative pb-32 pt-12"></div>
        <div className="mx-auto w-full -m-24">
          {children}
        </div>
      </div>
    </>
  );
}
