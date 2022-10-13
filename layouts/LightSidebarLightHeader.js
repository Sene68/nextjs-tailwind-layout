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
        <div className="mx-auto w-full">
          {children}
        </div>
      </div>
    </>
  );
}
