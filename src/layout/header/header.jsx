"use client";
import { BASE_URL } from "@/basUrl/url";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";

function Header() {
  const router = useRouter()
  const [user, setUser] = useState(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const email = useAuth();
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!email) return;

    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/get/${email}`);
        if (response.status === 201 || response.status === 200) {
          setUser(response.data?.user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [email]);

  const handleLogout = ()=>{
    localStorage.removeItem("email")
    toast.success("User logout success")
    router.push("/login")
  }
  return (
    <header className="w-full shadow-sm bg-white sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* --- Logo Area --- */}
        <Link href="/">
           <div className="text-xl font-bold text-blue-600 cursor-pointer">
             HRMS
           </div>
        </Link>

        {/* --- Desktop Navigation (Hidden on Mobile) --- */}
        <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium text-gray-700">
          <Link href="/">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Dashboard</li>
          </Link>
          <Link href="/about">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">About</li>
          </Link>
          <Link href="/services">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Services</li>
          </Link>
          <Link href="/projects">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Projects</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact</li>
          </Link>
        </ul>

        {/* --- Right Side (User & Mobile Toggle) --- */}
        <div className="flex items-center gap-4">
          
          {user ? (
            // --- User Logged In ---
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 focus:outline-none"
              >
                {/* User Avatar / Name Badge */}
                <div className="px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-semibold border border-amber-200 hover:bg-amber-200 transition">
                  {user.name || "User"}
                </div>
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-2 z-50">
                  <div className="px-4 py-2 border-b text-sm text-gray-500">
                     Signed in as <br /> <span className="font-bold text-gray-800">{user.name}</span>
                  </div>
                  
                  <Link href="/profile">
                    <div 
                        onClick={() => setIsProfileOpen(false)}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      Profile
                    </div>
                  </Link>
                  <Link href="/settings">
                    <div 
                        onClick={() => setIsProfileOpen(false)}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      Settings
                    </div>
                  </Link>
                  <div 
                    className="px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
                    onClick={() => {
                        console.log("Logout Logic Here");
                        setIsProfileOpen(false);
                    }}
                  >
                  <h1 onClick={handleLogout}> Logout from {user.name}</h1>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // --- User Not Logged In ---
            <div className="hidden md:block">
                <Link href="/login">
                <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-md">
                    Login
                </button>
                </Link>
            </div>
          )}

          {/* --- Mobile Menu Toggle Button --- */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
                 /* Close Icon (X) */
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg>
            ) : (
                /* Hamburger Icon */
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            )}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Dropdown (Full Width) --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in-down">
          <ul className="flex flex-col p-4 space-y-2 font-medium text-gray-700">
            <Link href="/">
              <li onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-md hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Dashboard</li>
            </Link>
            <Link href="/about">
              <li onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-md hover:bg-blue-50 hover:text-blue-600 cursor-pointer">About</li>
            </Link>
            <Link href="/services">
              <li onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-md hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Services</li>
            </Link>
            <Link href="/projects">
              <li onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-md hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Projects</li>
            </Link>
            <Link href="/contact">
              <li onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-md hover:bg-blue-50 hover:text-blue-600 cursor-pointer">Contact</li>
            </Link>
            
            {/* Mobile Login Button (Only if not logged in) */}
            {!user && (
                <Link href="/login">
                    <li onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-4 py-3 text-center bg-blue-600 text-white rounded-lg cursor-pointer">
                        Login
                    </li>
                </Link>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;