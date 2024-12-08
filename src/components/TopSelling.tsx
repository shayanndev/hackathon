import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

function TopSelling() {
    return (
        <div id="onsales" className="px-6 md:px-28 py-16">
            {/* Section Heading */}
            <div className="flex justify-center items-center mb-12">
                <h1 className="text-3xl font-extrabold leading-tight text-black">
                    TOP SELLINGS
                </h1>
            </div>


            <Link href="/detail">
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
            </Link>

            <div className="flex justify-center items-center mt-20">
                <button className="w:1/3 border border-gray-300 text-black px-20 py-3 rounded-full hover:bg-black hover:text-white transition">
                    View All
                </button>
            </div>


        </div>
    );
}

export default TopSelling;