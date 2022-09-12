import React from 'react';

// components

import BrandSidebarLightHeader from '../layouts/BrandSidebarLightHeader.js';

export default function Sidebar() {
  return (
    <>
      <BrandSidebarLightHeader>
        <div className='bg-gray-200 h-screen'>
          <div className="flex flex-wrap">
            <div className="w-full mb-12 xl:mb-0 px-4">
              Dashboard
            </div>
          </div>
        </div>
        
      </BrandSidebarLightHeader>
    </>
  );
}