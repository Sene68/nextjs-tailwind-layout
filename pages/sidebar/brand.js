import React from 'react';

// components

import BrandSidebarLightHeader from '../../layouts/BrandSidebarLightHeader.js';

export default function Sidebar() {
  return (
    <>
      <BrandSidebarLightHeader>
        <div className='bg-gray-200 h-screen'>
          <div className="flex flex-wrap">
            <div className="w-full m-12 xl:mb-0 px-4">
              <h2 className="font-Montserrat font-bold text-neutral-900">
                Dashboard
              </h2>
            </div>
          </div>
        </div>
      </BrandSidebarLightHeader>
    </>
  );
}