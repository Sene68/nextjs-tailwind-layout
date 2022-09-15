import React from 'react';
import SimpleDropdown from '../dropdown/SimpleDropdown';

export default function BrandNavbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 bg-white shadow-b">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap px-4">
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-black absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-black text-black relative bg-white bg-white rounded text-sm outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <SimpleDropdown /> 
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
