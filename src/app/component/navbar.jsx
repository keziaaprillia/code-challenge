"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { BiHome } from "react-icons/bi";

function NavbarComponents() {
  const [open, setOpen] = useState(false); // < false : intial default value

  return (
    <>
      {/* menu bar */}
      <div className="flex justify-between sticky z-50 top-0 p-2 bg-lime-700 items-center">
        <div className="px-3 gap-4 text-sm md:flex hidden ">
          <Link
            href="/"
            className="hover:bg-white hover:text-black py-1 px-1 rounded-full text-stone-50 font-semibold"
          >
            <BiHome className="text-[23px] " />
          </Link>
          <Link
            href="/about"
            className="hover:bg-white hover:text-black p-2 rounded-full text-stone-50 font-semibold"
          >
            About
          </Link>
          <Link
            href="/service"
            className="hover:bg-white hover:text-black p-2 rounded-full text-stone-50 font-semibold"
          >
            Services
          </Link>

          <Link
            href="/teams"
            className="text-sm hover:bg-white hover:text-black p-2 rounded-full text-stone-50 font-semibold"
          >
            Crew
          </Link>
        </div>

        {/* logo */}
        <div className="md:hidden block px-3">
          <button onClick={() => setOpen(!open)}>
            <FaBars className="text-white" />
          </button>
          {open && (
            <div className="absolute bg-slate-100 w-[155px] h-[175px] text-center rounded-md">
              <div className=" flex flex-col gap-2 p-1">
                <Link
                  href="/"
                  className="hover:bg-white text-black text-sm p-2 rounded-full  font-semibold"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:bg-white text-black text-sm p-2 rounded-full  font-semibold"
                >
                  About
                </Link>{" "}
                <Link
                  href="/service"
                  className="hover:bg-white text-black text-sm p-2 rounded-full  font-semibold"
                >
                  Services
                </Link>
                <Link
                  href="/teams"
                  className="hover:bg-white text-black text-sm p-2 rounded-full font-semibold"
                >
                  Crew
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="flex px-3 gap-4 text-sm">
          <div className="hover:bg-white hover:text-black p-2 rounded-full text-stone-50 font-semibold">
            Newsroom
          </div>
          <div className="hover:bg-white hover:text-black p-2 rounded-full text-stone-50 font-semibold">
            Connect
          </div>

          {/* <img src={menu} className=" object-cover mt-2.5 h-4 w-5.5"></img> */}
        </div>
      </div>
    </>
  );
}
export default NavbarComponents;
