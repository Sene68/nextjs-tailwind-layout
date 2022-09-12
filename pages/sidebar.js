import React from 'react';

// components

import BrandSidebarLightHeader from '../layouts/BrandSidebarLightHeader.js';

export default function Sidebar() {
  return (
    <>
      <BrandSidebarLightHeader>
        <div className='bg-gray-200'>
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              1
            </div>
            <div className="w-full xl:w-4/12 px-4">
              2
            </div>
          </div>
        </div>
        
      </BrandSidebarLightHeader>
    </>
  );
}