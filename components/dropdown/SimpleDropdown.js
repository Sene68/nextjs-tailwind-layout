import React, { useState } from 'react';

const SimpleDropdown = () => {
  const [isOpen, setOpen] = useState(false);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  return (
    <>
      <div className="items-center flex" onClick={toggleDropdown}>
        <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
            alt="..."
            className="w-full rounded-full align-middle border-none shadow-lg"
            src="/img/384-original.jpg"
            />
        </span>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <div className="absolute right-0 z-10 mt-8 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
          <div className="py-1" role="none">
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">Account settings</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Support</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">License</a>
              <form method="POST" action="#" role="none">
                  <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" id="menu-item-3">Sign out</button>
              </form>
          </div>
        </div>
      </div>
    </>
        
  )
}

export default SimpleDropdown;