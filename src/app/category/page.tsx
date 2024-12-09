"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronUp, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { AiFillStar, AiOutlineClose } from 'react-icons/ai';



function CategoryPage() {

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <div className="px-6 md:px-28 mb-12 md:mb-20">

        <p className="flex items-center gap-2 mt-4 mb-6 text-sm text-gray-400">Home <FaChevronRight /> <b className="text-black">Casuals</b>
        </p>
        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          {/* Filter Sidebar */}
          {/* w-full lg:w-1/4 p-6 rounded-lg space-y-6 border border-gray-300 */}
          <div
            className={`fixed bottom-0 left-0 w-full h-[90%] bg-white border-t border-gray-300 z-50 p-6 rounded-t-lg space-y-6 lg:static lg:w-1/4 lg:h-auto lg:translate-y-0 lg:border lg:p-6 transition-transform transform ${isFilterOpen
              ? "translate-y-0"
              : "translate-y-full lg:translate-y-0"
              }`}
          >
            <h3 className="flex flex-row items-center justify-between text-xl font-semibold mb-2">
              <p>Filters</p>
              <p
                className="hidden lg:block cursor-pointer"
                onClick={toggleFilter}
              >
                <HiAdjustmentsVertical size={18} />
              </p>
              <p
                className="lg:hidden block cursor-pointer"
                onClick={toggleFilter}
              >
                <AiOutlineClose size={18} />
              </p>
            </h3>

            <div className="mb-8">
              <div className="flex flex-row flex-wrap gap-3 mb-4 cursor-pointer">
                <div className="w-full flex flex-row items-center justify-between text-base text-gray-500">
                  <p>T-Shirts </p>
                  <p><FaChevronRight size={14} /></p>
                </div>
                <div className="w-full flex flex-row items-center justify-between text-base text-gray-500">
                  <p>Shorts </p>
                  <p><FaChevronRight size={14} /></p>
                </div>
                <div className="w-full flex flex-row items-center justify-between text-base text-gray-500">
                  <p>Shirts </p>
                  <p><FaChevronRight size={14} /></p>
                </div>
                <div className="w-full flex flex-row items-center justify-between text-base text-gray-500">
                  <p>Hoodie </p>
                  <p><FaChevronRight size={14} /></p>
                </div>
                <div className="w-full flex flex-row items-center justify-between text-base text-gray-500">
                  <p>Jeans </p>
                  <p><FaChevronRight size={14} /></p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="flex flex-row items-center justify-between text-lg font-semibold mb-4">
                <p>Color</p>
                <p><FaChevronUp size={16} /></p>
              </h3>
              <div className="flex flex-row items-center justify-between mb-4">
                <div className="bg-green-500 rounded-full w-8 h-8"></div>
                <div className="bg-red-500 rounded-full w-8 h-8"></div>
                <div className="bg-yellow-500 rounded-full w-8 h-8"></div>
                <div className="bg-orange-500 rounded-full w-8 h-8"></div>
                <div className="bg-blue-300 rounded-full w-8 h-8"></div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="bg-blue-500 rounded-full w-8 h-8"></div>
                <div className="bg-purple-500 rounded-full w-8 h-8"></div>
                <div className="bg-pink-500 rounded-full w-8 h-8"></div>
                <div className="bg-gray-300 rounded-full w-8 h-8"></div>
                <div className="bg-black rounded-full w-8 h-8"></div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="flex flex-row items-center justify-between text-lg font-semibold mb-4">
                <p>Size</p>
                <p><FaChevronUp size={16} /></p>
              </h3>
              <div className="flex flex-row flex-wrap gap-3 mb-4 cursor-pointer">
                <div className="bg-gray-200 rounded-full py-3 px-6 text-sm">XX Small</div>
                <div className="bg-gray-200 rounded-full py-3 px-6 text-sm">X Small</div>
                <div className="bg-gray-200 rounded-full py-3 px-6 text-sm">Small</div>
                <div className="bg-gray-200 rounded-full py-3 px-6 text-sm">Medium</div>
                <div className="bg-black text-white rounded-full py-3 px-6 text-sm">Large</div>
                <div className="bg-gray-200 rounded-full py-3 px-6 text-sm">X Large</div>
                <div className="bg-gray-200 rounded-full py-3 px-6 text-sm">XX Large</div>
                <div className="bg-gray-200 rounded-full py-3 px-6 text-sm">3X Large</div>
                <div className="bg-gray-200 rounded-full py-3 px-6 text-sm">4X Large</div>
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Price Range</h3>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-20 p-2 border border-gray-300 rounded-md"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-20 p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <h3 className="flex flex-row items-center justify-between text-lg font-semibold mb-4">
                <p>Dress Style</p>
                <p><FaChevronUp size={16} /></p>
              </h3>
              <div className="flex flex-row flex-wrap gap-3 mb-4 cursor-pointer">
                <div className="w-full flex flex-row items-center justify-between text-base text-gray-500">
                  <p>Casual </p>
                  <p><FaChevronRight size={14} /></p>
                </div>
                <div className="w-full flex flex-row items-center justify-between text-base text-gray-500">
                  <p>Formal </p>
                  <p><FaChevronRight size={14} /></p>
                </div>
                <div className="w-full flex flex-row items-center justify-between text-base text-gray-500">
                  <p>Party </p>
                  <p><FaChevronRight size={14} /></p>
                </div>
                <div className="w-full flex flex-row items-center justify-between text-base text-gray-500">
                  <p>Gym </p>
                  <p><FaChevronRight size={14} /></p>
                </div>
              </div>
            </div>

            <button className="flex items-center justify-center text-center gap-2 w-full bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
              Apply Filters
            </button>

          </div>

          {/* Products Section */}
          <div className="w-full lg:w-3/4">
            <div className="w-full flex flex-row items-center md:justify-between text-base text-gray-500 mb-4 gap-2">
              <p className="text-xl md:text-2xl text-black font-bold">Casuals</p>
              <div className="flex flex-row items-center gap-2">
                <p className="flex-grow text-xs md:text-sm">
                  Showing 1-10 of 100 Products
                </p>
                <p className="hidden md:flex items-center gap-2">
                  Sort By:{" "}
                  <b className="flex text-black gap-2 items-center">
                    Most Popular <FaChevronDown size={14} />
                  </b>
                </p>
                <p
                  className="block lg:hidden text-black cursor-pointer"
                  onClick={toggleFilter}
                >
                  <HiAdjustmentsVertical size={18} color="text-black" />
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative h-40 md:h-80 w-full">
                  <Image
                    src="/images/product1.png"
                    alt="Product 1"
                    fill
                    className="object-fill"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-sm md:text-lg font-bold text-gray-800 truncate">Casual T-Shirt</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-500">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar className="text-gray-300" />
                    </div>
                    <span className="text-gray-600 text-sm">(4/5)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm md:text-lg font-bold">$120</span>
                    <span className="line-through text-gray-500">$150</span>
                    <span className="text-red-500 p-1 rounded-lg bg-red-300 text-xs">20%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative h-40 md:h-80 w-full">
                  <Image
                    src="/images/product2.png"
                    alt="Product 1"
                    fill
                    className="object-fill"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-sm md:text-lg font-bold text-gray-800 truncate">Casual T-Shirt</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-500">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar className="text-gray-300" />
                    </div>
                    <span className="text-gray-600 text-sm">(4/5)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm md:text-lg font-bold">$120</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative h-40 md:h-80 w-full">
                  <Image
                    src="/images/product3.png"
                    alt="Product 1"
                    fill
                    className="object-fill"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-sm md:text-lg font-bold text-gray-800 truncate">Casual T-Shirt</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-500">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar className="text-gray-300" />
                    </div>
                    <span className="text-gray-600 text-sm">(4/5)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm md:text-lg font-bold">$120</span>
                    <span className="line-through text-gray-500">$150</span>
                    <span className="text-red-500 p-1 rounded-lg bg-red-300 text-xs">20%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative h-40 md:h-80 w-full">
                  <Image
                    src="/images/product4.png"
                    alt="Product 1"
                    fill
                    className="object-fill"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-sm md:text-lg font-bold text-gray-800 truncate">Casual T-Shirt</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-500">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar className="text-gray-300" />
                    </div>
                    <span className="text-gray-600 text-sm">(4/5)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm md:text-lg font-bold">$120</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative h-40 md:h-80 w-full">
                  <Image
                    src="/images/product1.png"
                    alt="Product 1"
                    fill
                    className="object-fill"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-sm md:text-lg font-bold text-gray-800 truncate">Casual T-Shirt</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-500">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar className="text-gray-300" />
                    </div>
                    <span className="text-gray-600 text-sm">(4/5)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm md:text-lg font-bold">$120</span>
                  </div>
                </div>
              </div>


              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative h-40 md:h-80 w-full">
                  <Image
                    src="/images/product2.png"
                    alt="Product 1"
                    fill
                    className="object-fill"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-sm md:text-lg font-bold text-gray-800 truncate">Casual T-Shirt</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-500">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar className="text-gray-300" />
                    </div>
                    <span className="text-gray-600 text-sm">(4/5)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm md:text-lg font-bold">$120</span>
                    <span className="line-through text-gray-500">$150</span>
                    <span className="text-red-500 p-1 rounded-lg bg-red-300 text-xs">20%</span>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage