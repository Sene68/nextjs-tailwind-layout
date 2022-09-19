import React from 'react';

// components

import BrandSidebar from "../components/sidebar/BrandSidebar.js";
import BrandNavbar from '../components/navbar/BrandNavbar.js';

export default function BrandSidebarLightHeader({ children }) {
  return (
    <>
      <BrandSidebar />
      <div className="relative ml-64 bg-gray-200">
        <BrandNavbar />
        <div className="relative pb-32 pt-12"></div>
        <div className="mx-auto w-full -m-24">
          {children}
        </div>
      </div>
    </>
  );
}
