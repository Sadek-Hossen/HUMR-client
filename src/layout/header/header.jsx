"use client";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [user, setUser] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        {/* <div className="text-xl font-bold">MyLogo</div> */}

        {/* Desktop Menu */}
        <ul className="flex-1 hidden md:flex items-center gap-6 text-[16px] font-medium">
        <Link href={"/"}>
           <li className="hover:text-blue-600 cursor-pointer">Home</li>
        </Link>
        <Link href={"/about"}>
           <li className="hover:text-blue-600 cursor-pointer">About</li>

        </Link>
        <Link href={"/services"}>
           <li className="hover:text-blue-600 cursor-pointer">Services</li>
        </Link>
        <Link href={"/projects"}>
           <li className="hover:text-blue-600 cursor-pointer">Projects</li>
        </Link>
        <Link href={"/contact"}>
           <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </Link>
      
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {user ? (
            // Avatar Dropdown
            <div className="relative">
              <div
                onClick={() => setOpen(!open)}
                className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border"
              >
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dropdown */}
              {open && (
                <ul className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg py-2">
                  <Link href="/profile">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </li>
                  </Link>
                   
                 <Link href="/settings">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  </Link>
           
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Logout
                  </li>
             
                </ul>
              )}
            </div>
          ) : (
            <Link href="/login">
              <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                Login
              </button>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white shadow-md py-4 space-y-3 px-5 text-[16px] font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Projects</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      )}
    </header>
  );
}

export default Header;
