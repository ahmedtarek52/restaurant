// import React from 'react'

import { FaCaretDown, FaUser } from "react-icons/fa";

const Navbar = ({HandlePopup}) => {
  return (
    <>
    <div className="bg-white shadow-md" data-aos="fade">
    <div className="container flex justify-between py-4 sm:py-3">
        <div className="font-bold text-3xl font-cursive text-secondary">Tofy</div>
        <div>
          <ul className="flex items-center gap-10">
            <li>
              <a href="/#"
                className="hidden sm:inline-block hover:text-primary text-xl font-semibold"> Home  </a>
            </li>
            <li>
              <a href="/#"
                className="hidden sm:inline-block hover:text-primary text-xl font-semibold" >About</a>
            </li>
            <li>
              <a  href="/#"
                className="hidden sm:inline-block hover:text-primary text-xl font-semibold">Contact</a>
            </li>
            <li className="hidden md:block cursor-pointer group ">
              <a href="/#"
                className="inline-block hover:text-primary text-xl font-semibold" >
                <div className="flex items-center gap-[2px] py-2">
                  Dropdown
                  <span>
                    <FaCaretDown
                    className="group-hover:rotate-180 duration-300 "/>
                  </span>
                </div>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2">
                <ul>
                  <li>
                    <a
                      href="/#"
                      className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20 "  >  Vegetables </a>
                  </li>
                  <li>
                    <a href="/#"
                      className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20 " >  Fruits </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20 "> Grains </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button className="flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-2 md:px-5 py-2 hover:scale-105 duration-300" onClick={HandlePopup}>
              <FaUser/>
                My Account
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
