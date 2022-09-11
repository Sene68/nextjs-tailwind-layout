import React from 'react';

// components

import BrandSidebar from "../components/sidebar/BrandSidebar.js";

export default function Sidebar() {
  return (
    <>
      <BrandSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          Hello
        </div>
      </div>
    </>
  );
}
