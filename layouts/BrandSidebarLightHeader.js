import React from 'react';

// components

import BrandSidebar from "../components/sidebar/BrandSidebar.js";
import Navbar from '../components/navbar/Navbar.js';

export default function BrandSidebarLightHeader({ children }) {
  return (
    <>
      <BrandSidebar />
      <div className="relative ml-64 bg-gray-200">
        <Navbar />
        <div className="relative pt-24 mx-auto w-full -m-24">
          {children}
        </div>
      </div>
    </>
  );
}
