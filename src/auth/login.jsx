"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-5xl">

        {/* Left Side Image */}
        <div className="hidden lg:block w-1/2">
          <Image
            width={600}
            height={600}
            className="rounded-xl shadow-lg"
            src="https://static.vecteezy.com/system/resources/previews/009/508/327/non_2x/web-designer-makes-portfolio-2d-isolated-illustration-remote-work-flat-character-on-cartoon-background-colourful-editable-scene-for-mobile-website-presentation-vector.jpg"
            alt="registration image"
          />
        </div>

        {/* Login Card */}
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="px-6 py-6">
            <h3 className="text-xl font-semibold text-center text-gray-700 dark:text-gray-200">
              Welcome Back
            </h3>

            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
              Login or create an account
            </p>

            <form className="mt-5">

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg 
                    dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 
                    focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 
                    focus:outline-none"
                />
              </div>

              {/* Password */}
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="block w-full px-4 py-2 pr-10 text-gray-700 bg-white border rounded-lg 
                      dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
                      focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 
                      focus:outline-none"
                  />

                  <span
                    onClick={handlePassword}
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                  >
                    {showPassword ? "🙈" : "👁"}
                  </span>
                </div>
              </div>

              {/* Sign In Button */}
              <div className="flex justify-end mt-6">
                <button
                  className="w-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize bg-blue-500 rounded-lg 
                    hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-center py-4 bg-gray-50 dark:bg-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-200">
              Don't have an account?
            </span>

            <Link
              href="/register"
              className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;
