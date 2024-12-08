import React from 'react'
import Image from "next/image";
import { FaChevronRight, FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AiFillStar } from 'react-icons/ai';
import { HiBadgeCheck, HiDotsHorizontal } from 'react-icons/hi';

function Details() {
  return (
    <div>
      <div className="px-6 md:px-28 mb-12 md:mb-20">

        <p className="flex items-center gap-2 mt-4 mb-6 text-sm text-gray-400">Home <FaChevronRight /> Shop <FaChevronRight /> Mens <FaChevronRight /> <b className="text-black">T-Shirts</b>
        </p>

        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex gap-4">
            {/* Side Images */}
            <div className="flex flex-col space-y-4 w-1/4">
              <img
                src="/images/detail1.png"
                alt="Thumbnail"
                className="w-full h-full object-cover rounded-xl cursor-pointer hover:opacity-80 border border-gray-800"
              />
              <img
                src="/images/detail2.png"
                alt="Thumbnail"
                className="w-full h-full object-cover rounded-xl cursor-pointer hover:opacity-80"
              />
              <img
                src="/images/detail3.png"
                alt="Thumbnail"
                className="w-full h-full object-cover rounded-xl cursor-pointer hover:opacity-80"
              />
            </div>

            {/* Main Image */}
            <div className="w-3/4">
              <img
                src="/images/detail1.png"
                alt="Product"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">One Life Graphic T-shirt</h1>

            <div className="flex items-center text-xl">
              <div className="flex text-yellow-500">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar className="text-gray-300" />
              </div>
              <span className="text-gray-600">(4/5)</span>
            </div>

            <div className="flex items-center space-x-2 text-3xl">
              <span className="font-bold">$260</span>
              <span className="line-through text-gray-500 text-xl">$300</span>
              <span className="text-red-500 py-1 px-2 rounded-lg bg-red-200 text-xs">40%</span>
            </div>

            <p className="text-gray-400 text-lg">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>

            <div className="mb-8">
              <h3 className="flex flex-row items-center justify-between mb-2 text-gray-500 text-base">
                <p>Color</p>
              </h3>
              <div className="flex flex-row items-center gap-4 mb-4">
                <div className="bg-yellow-900 rounded-full w-8 h-8"></div>
                <div className="bg-teal-900 rounded-full w-8 h-8"></div>
                <div className="bg-slate-700 rounded-full w-8 h-8"></div>
              </div>
            </div>

            <div className="mb-8 md:mb-20">
              <h3 className="flex flex-row items-center justify-between mb-2 text-gray-500 text-base">
                <p>Size</p>
              </h3>
              <div className="flex flex-row flex-wrap gap-3 mb-4 cursor-pointer">
                <div className="bg-gray-200 rounded-full py-3 px-6 text-sm">Small</div>
                <div className="bg-gray-200 rounded-full py-3 px-6 text-sm">Medium</div>
                <div className="bg-black text-white rounded-full py-3 px-6 text-sm">Large</div>
                <div className="bg-gray-200 rounded-full py-3 px-6 text-sm">X Large</div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center mt-20">
              {/* Quantity Controls */}
              <div className="w-full flex items-center gap-2 md:gap-4">

                <div className="w-fit flex items-center justify-between border border-gray-300 rounded-full">
                  <button className="px-4 md:px-8 py-2 text-gray-800 text-xl md:text-2xl cursor-pointer">-</button>
                  <span className="px-4">1</span>
                  <button className="px-4 md:px-8 py-2 text-gray-800 text-xl md:text-2xl cursor-pointer">+</button>
                </div>

                <button className="flex items-center justify-center text-center gap-2 w-full bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                  Add to Cart <FaArrowRight />
                </button>
              </div>

            </div>



          </div>
        </div>


        <div className="flex justify-between items-center mt-12">
          <div className="flex space-x-2">
            <h1 className="text-2xl md:text-3xl font-extrabold leading-tight text-black">All Reviews</h1>
            <sub className="text-gray-500 text-lg mt-1">(45)</sub>
          </div>

          <div className="flex space-x-1 md:space-x-4">
            <div className="rounded-full p-4">
              <FaArrowLeft />
            </div>
            <div className="rounded-full p-4">
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="py-12">
          {/* Testimonial Wrapper */}
          <div className="relative flex justify-center items-center gap-6 overflow-hidden">
            {/* Testimonial Cards */}
            <div className="grid grid-columns-1 md:grid-cols-2 gap-4">

              <div className="bg-white p-6 space-y-4 border border-gray-300 flex-shrink-0 rounded-xl">
                <div className="flex items-center justify-between space-x-1">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <HiDotsHorizontal size={18} />
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <h4 className="text-gray-800 font-bold">John D.</h4>
                  <p className="text-green-500">
                    <HiBadgeCheck size={24} />
                  </p>
                </div>
                <p className="text-gray-500 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>

                <p className="text-gray-600 text-sm">
                  Posted on August 14, 2023
                </p>

              </div>
              <div className="bg-white p-6 space-y-4 border border-gray-300 flex-shrink-0 rounded-xl">
                <div className="flex items-center justify-between space-x-1">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <HiDotsHorizontal size={18} />
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <h4 className="text-gray-800 font-bold">John D.</h4>
                  <p className="text-green-500">
                    <HiBadgeCheck size={24} />
                  </p>
                </div>
                <p className="text-gray-500 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>

                <p className="text-gray-600 text-sm">
                  Posted on August 14, 2023
                </p>

              </div>
              <div className="bg-white p-6 space-y-4 border border-gray-300 flex-shrink-0 rounded-xl">
                <div className="flex items-center justify-between space-x-1">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <HiDotsHorizontal size={18} />
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <h4 className="text-gray-800 font-bold">John D.</h4>
                  <p className="text-green-500">
                    <HiBadgeCheck size={24} />
                  </p>
                </div>
                <p className="text-gray-500 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>

                <p className="text-gray-600 text-sm">
                  Posted on August 14, 2023
                </p>

              </div>
              <div className="bg-white p-6 space-y-4 border border-gray-300 flex-shrink-0 rounded-xl">
                <div className="flex items-center justify-between space-x-1">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <HiDotsHorizontal size={18} />
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <h4 className="text-gray-800 font-bold">John D.</h4>
                  <p className="text-green-500">
                    <HiBadgeCheck size={24} />
                  </p>
                </div>
                <p className="text-gray-500 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>

                <p className="text-gray-600 text-sm">
                  Posted on August 14, 2023
                </p>

              </div>
              <div className="bg-white p-6 space-y-4 border border-gray-300 flex-shrink-0 rounded-xl">
                <div className="flex items-center justify-between space-x-1">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <HiDotsHorizontal size={18} />
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <h4 className="text-gray-800 font-bold">John D.</h4>
                  <p className="text-green-500">
                    <HiBadgeCheck size={24} />
                  </p>
                </div>
                <p className="text-gray-500 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>

                <p className="text-gray-600 text-sm">
                  Posted on August 14, 2023
                </p>

              </div>
              <div className="bg-white p-6 space-y-4 border border-gray-300 flex-shrink-0 rounded-xl">
                <div className="flex items-center justify-between space-x-1">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <HiDotsHorizontal size={18} />
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <h4 className="text-gray-800 font-bold">John D.</h4>
                  <p className="text-green-500">
                    <HiBadgeCheck size={24} />
                  </p>
                </div>
                <p className="text-gray-500 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>

                <p className="text-gray-600 text-sm">
                  Posted on August 14, 2023
                </p>

              </div>
              <div className="bg-white p-6 space-y-4 border border-gray-300 flex-shrink-0 rounded-xl">
                <div className="flex items-center justify-between space-x-1">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <HiDotsHorizontal size={18} />
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <h4 className="text-gray-800 font-bold">John D.</h4>
                  <p className="text-green-500">
                    <HiBadgeCheck size={24} />
                  </p>
                </div>
                <p className="text-gray-500 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>

                <p className="text-gray-600 text-sm">
                  Posted on August 14, 2023
                </p>

              </div>
              <div className="bg-white p-6 space-y-4 border border-gray-300 flex-shrink-0 rounded-xl">
                <div className="flex items-center justify-between space-x-1">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <HiDotsHorizontal size={18} />
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <h4 className="text-gray-800 font-bold">John D.</h4>
                  <p className="text-green-500">
                    <HiBadgeCheck size={24} />
                  </p>
                </div>
                <p className="text-gray-500 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>

                <p className="text-gray-600 text-sm">
                  Posted on August 14, 2023
                </p>

              </div>

            </div>
          </div>

          <div className="flex justify-center items-center my-20">
            <button className="w:1/3 border border-gray-300 text-black px-20 py-3 rounded hover:bg-black hover:text-white transition">
              Load More Reviews
            </button>
          </div>


          <div className="flex justify-center items-center mb-12">
            <h1 className="text-3xl font-extrabold leading-tight text-black">
              YOU MIGHT ALSO LIKE
            </h1>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
            {/* Product 1 */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/product1.png"
                  alt="Product 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold text-gray-800 truncate">Casual T-Shirt</h3>
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
                  <span className="text-lg font-bold">$120</span>
                  <span className="line-through text-gray-500">$150</span>
                  <span className="text-red-500 text-sm">20% OFF</span>
                </div>
              </div>
            </div>

            {/* Repeat for other products */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/product2.png"
                  alt="Product 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold text-gray-800 truncate">Elegant Dress</h3>
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
                  <span className="text-lg font-bold">$220</span>
                  <span className="line-through text-gray-500">$300</span>
                  <span className="text-red-500 text-sm">26% OFF</span>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/product3.png"
                  alt="Product 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold text-gray-800 truncate">Classic Sneakers</h3>
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
                  <span className="text-lg font-bold">$90</span>
                  <span className="line-through text-gray-500">$120</span>
                  <span className="text-red-500 text-sm">25% OFF</span>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/product4.png"
                  alt="Product 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold text-gray-800 truncate">Stylish Backpack</h3>
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
                  <span className="text-lg font-bold">$80</span>
                  <span className="line-through text-gray-500">$100</span>
                  <span className="text-red-500 text-sm">20% OFF</span>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Details