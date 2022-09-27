import React from "react";
import Link from "next/link";

export default function BrandSidebar() {
  const menus = [
    {id: 1, text:'Dashboard', icon:'fa-tv'}, 
    {id: 2, text:'Team', icon:'fa-tools'},
    {id: 3, text:'Projects', icon:'fa-table'},
    {id: 4, text:'Calendar', icon:'fa-map-marked'}
  ];
  

  return (
    <>
      <nav className="bg-indigo-700 md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-4">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Brand */}
          <Link href="/">
            <div className="text-left pt-3 pl-3">
              <img className="h-8 w-auto sm:h-10" src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=200' alt="" />
            </div>
          </Link>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden "
            }
          >
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {menus.map(menu => (
                <li key={menu.id} className="items-center">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className={
                        "text-xs uppercase py-3 font-bold block pl-3 font-Montserrat text-white hover:bg-indigo-800 hover:text-white " 
                      }
                    >
                      <i
                        className={
                          "fas mr-2 text-sm " + menu.icon
                        }
                      ></i>{" "}
                      {menu.text}
                    </a>
                  </Link>
                </li>
              ))}             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
