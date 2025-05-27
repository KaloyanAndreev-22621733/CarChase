import React from "react";

function LandingSearchBox() {
  return (
    <div className="w-full h-60 flex justify-center items-center">
      <div className="w-[95%] max-w-6xl bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-white/30">
        <div className="grid grid-cols-5 gap-4 h-full items-end">
          
          {/* Select Makes */}
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-700 mb-1">Select Makes</label>
            <select className="bg-white text-gray-800 border border-gray-300 text-sm rounded px-3 py-2 focus:outline-none">
              <option>Audi</option>
              <option>BMW</option>
              <option>Mercedes</option>
              <option>Toyota</option>
            </select>
          </div>

          {/* Select Models */}
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-700 mb-1">Select Models</label>
            <select className="bg-white text-gray-800 border border-gray-300 text-sm rounded px-3 py-2 focus:outline-none">
              <option>Q1</option>
              <option>Q2</option>
              <option>A1</option>
              <option>A2</option>
            </select>
          </div>

          {/* Year */}
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-700 mb-1">Year</label>
            <div className="bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-800">
              0 - 2024
            </div>
          </div>

          {/* Select Price */}
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-700 mb-1">Select Price</label>
            <select className="bg-white text-gray-800 border border-gray-300 text-sm rounded px-3 py-2 focus:outline-none">
              <option>1000-5000$</option>
              <option>5000-10000$</option>
              <option>10000-20000$</option>
              <option>20000-50000$</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex justify-end w-full">
            <button className="w-full h-11 flex justify-center items-center bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg text-sm shadow">
              Search
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LandingSearchBox;