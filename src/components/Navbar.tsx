import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BsLuggage } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-800 text-white">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/favicon.ico" alt="Voyagent logo" className="h-10 w-10" />
            <span className="ml-2 text-lg font-bold">Voyagent</span>
          </a>
        </div>
        <nav className="flex space-x-4">
          <a href="/" className="flex items-center p-2 hover:bg-gray-700">
            <IoHomeOutline className="mr-2" />
            Home
          </a>
          <a
            href="/Explore"
            className="flex items-center p-2 hover:bg-gray-700"
          >
            <MdOutlineExplore className="mr-2" />
            Explore
          </a>
          <a
            href="/MyTrips"
            className="flex items-center p-2 hover:bg-gray-700"
          >
            <BsLuggage className="mr-2" />
            My Trips
          </a>
          <a
            href="/TripGPT"
            className="flex items-center p-2 hover:bg-gray-700"
          >
            <FaRegLightbulb className="mr-2" />
            TripGPT
          </a>
          <a
            href="/TravelBlogs"
            className="flex items-center p-2 hover:bg-gray-700"
          >
            <TfiWrite className="mr-2" />
            Travel Blogs
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center p-2 hover:bg-gray-700"
            >
              <VscAccount className="mr-2" />
              Account
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white border border-gray-700 rounded shadow-lg">
                <a
                  href="/Profile"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Profile
                </a>
                <a
                  href="/Settings"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Settings
                </a>
                <a
                  href="/SignOut"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Sign Out
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
