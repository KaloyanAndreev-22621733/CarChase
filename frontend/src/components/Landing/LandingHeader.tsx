import React from 'react'
import logo from "../../images/logo.png"

function LandingHeader() {
  return (
    <header className="absolute top-0 left-0 w-full h-20 grid grid-cols-12 z-10 border-b border-gray-400 ">
      <div className="col-span-3 flex items-center justify-center">
        <img src={logo} alt="logo" className="w-24" /> 
      </div>

      <div className="col-span-5 flex items-center justify-center"></div>

      <div className="col-span-4 flex items-center justify-between px-4">
        <nav className="flex items-center space-x-4">
          <a href="#about" className="text-white hover:text-gray-300">About Us</a>
          <a href="#services" className="text-white hover:text-gray-300">Services</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          <a href="#blog" className="text-white hover:text-gray-300">Blog</a>
        </nav>
        <div>
        <button className="px-4 py-1.5 ml-2 border-2 border-white text-white rounded hover:bg-white hover:text-blue-800 transition">
          Get Started
        </button>
        </div>
      </div>
    </header>
  )
}

export default LandingHeader;