import React from 'react';

// components

import DarkSidebar from "../components/sidebar/DarkSidebar.js";
import Navbar from '../components/navbar/Navbar.js';

export default function DarkSidebarLightHeader({ children }) {
  return (
    <>
      <DarkSidebar />
      <div className="relative ml-64 bg-gray-200">
        <Navbar />
        <div className="mx-auto w-full">
          {children}
        </div>
      </div>
    </>
  );
}
