import React from "react";
import logo from "./images/logo1.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault(); // Чтобы не было перехода по ссылке

    const userId = localStorage.getItem("userId");

    if (userId) {
      navigate("/profile");
    } else {
      navigate("/auth/login");
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0B0B1F] z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Car Chase" className="h-16" />
          </a>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="/" className="text-white hover:text-gray-300 text-sm font-medium">
              Home
            </a>
            <a href="/about-us" className="text-white hover:text-gray-300 text-sm font-medium">
              About
            </a>
            <a href="/contact" className="text-white hover:text-gray-300 text-sm font-medium">
              Contact
            </a>
            <a
              href="#"
              onClick={handleClick}
              className="text-white hover:text-gray-300 text-sm font-medium flex items-center"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {/* Можно добавить текст рядом с иконкой, если нужно */}
            </a>
          </nav>

          <a href="/listing">
          <button className="border border-white hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors">
            Submit Listing
          </button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;