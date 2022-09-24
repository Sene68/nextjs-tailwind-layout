import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BrandSidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="bg-gray-800 md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-4">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <div className="text-left pt-3 pl-3">
              <img className="h-8 w-auto sm:h-10" src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=200' alt="" />
            </div>
          </Link>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="font-Montserrat md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      Brand Sidebar
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block pl-3 font-Montserrat text-white hover:bg-indigo-800 hover:text-white " +
                      (router.pathname.indexOf("/sidebar/brand") !== -1
                        ? "text-white hover:text-lightBlue-600"
                        : "text-white bg-indigo-800")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-white")
                      }
                    ></i>{" "}
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/settings">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block pl-3 font-Montserrat text-white hover:bg-indigo-800 hover:text-white " +
                      (router.pathname.indexOf("/admin/settings") !== -1
                        ? "text-white hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/settings") !== -1
                          ? "opacity-75"
                          : "text-white")
                      }
                    ></i>{" "}
                    Team
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/tables">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block pl-3 font-Montserrat text-white hover:bg-indigo-800 hover:text-white " +
                      (router.pathname.indexOf("/admin/tables") !== -1
                        ? "text-white hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/tables") !== -1
                          ? "opacity-75"
                          : "text-white")
                      }
                    ></i>{" "}
                    Projects
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/maps">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block pl-3 font-Montserrat text-white hover:bg-indigo-800 hover:text-white " +
                      (router.pathname.indexOf("/admin/maps") !== -1
                        ? "text-white hover:text-lightBlue-600"
                        : "text-white hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-map-marked mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/maps") !== -1
                          ? "opacity-75"
                          : "text-white")
                      }
                    ></i>{" "}
                    Calendar
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}