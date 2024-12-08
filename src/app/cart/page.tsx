import React from 'react'
import { FiTrash2 } from 'react-icons/fi';
import { GoTag } from 'react-icons/go';
import { FaArrowRight } from "react-icons/fa";

function CartPage() {
    return (
        <div>
            <div className="px-6 md:px-28 mb-12 md:mb-20">
                {/* Text Column */}
                <h1 className="text-2xl md:text-3xl font-extrabold leading-tight text-black mb-6">Your Cart</h1>

                <div className="flex flex-wrap lg:flex-nowrap gap-8">
                    {/* Cart Items Section */}
                    <div className="w-full lg:w-3/5 space-y-6">

                        <div className="flex items-center border border-gray-300 p-4 rounded-lg space-x-4">
                            {/* Item Image */}
                            <div className="w-20 md:w-28 aspect-square flex-shrink-0">
                                <img
                                    src="/images/cart1.png"
                                    alt="Product"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            <div className="flex w-full flex-col">
                                {/* Item Text */}
                                <div className="flex flex-row items-start justify-between space-y-2">
                                    <div>
                                        <h3 className="text-lg font-semibold">Gradient Graphic T-shirt</h3>
                                        <p className="text-sm text-gray-600">Size: Large</p>
                                        <p className="text-sm text-gray-600">Color: White</p>
                                    </div>
                                    <FiTrash2 className="cursor-pointer text-red-500" size={24} />
                                </div>

                                {/* Actions */}
                                <div className="flex flex-row items-center justify-between space-y-2">
                                    {/* Quantity Controls */}

                                    <p className="text-lg font-bold text-gray-800">$145</p>
                                    <div className="flex items-center border border-gray-300 rounded-md">
                                        <button className="px-2 py-1 text-gray-600 hover:bg-gray-200">-</button>
                                        <span className="px-4">1</span>
                                        <button className="px-2 py-1 text-gray-600 hover:bg-gray-200">+</button>
                                    </div>

                                    {/* Delete Icon */}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center border border-gray-300 p-4 rounded-lg space-x-4">
                            {/* Item Image */}
                            <div className="w-28 h-28 flex-shrink-0">
                                <img
                                    src="/images/cart2.png"
                                    alt="Product"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            <div className="flex w-full flex-col">
                                {/* Item Text */}
                                <div className="flex flex-row items-start justify-between space-y-2">
                                    <div>
                                        <h3 className="text-lg font-semibold">Checkered Shirt</h3>
                                        <p className="text-sm text-gray-600">Size: Medium</p>
                                        <p className="text-sm text-gray-600">Color: Red</p>
                                    </div>
                                    <FiTrash2 className="cursor-pointer text-red-500" size={24} />
                                </div>

                                {/* Actions */}
                                <div className="flex flex-row items-center justify-between space-y-2">
                                    {/* Quantity Controls */}

                                    <p className="text-lg font-bold text-gray-800">$180</p>
                                    <div className="flex items-center border border-gray-300 rounded-md">
                                        <button className="px-2 py-1 text-gray-600 hover:bg-gray-200">-</button>
                                        <span className="px-4">1</span>
                                        <button className="px-2 py-1 text-gray-600 hover:bg-gray-200">+</button>
                                    </div>

                                    {/* Delete Icon */}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center border border-gray-300 p-4 rounded-lg space-x-4">
                            {/* Item Image */}
                            <div className="w-28 h-28 flex-shrink-0">
                                <img
                                    src="/images/cart3.png"
                                    alt="Product"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            <div className="flex w-full flex-col">
                                {/* Item Text */}
                                <div className="flex flex-row items-start justify-between space-y-2">
                                    <div>
                                        <h3 className="text-lg font-semibold">Skinny Fit Jeans</h3>
                                        <p className="text-sm text-gray-600">Size: Large</p>
                                        <p className="text-sm text-gray-600">Color: Blue</p>
                                    </div>
                                    <FiTrash2 className="cursor-pointer text-red-500" size={24} />
                                </div>

                                {/* Actions */}
                                <div className="flex flex-row items-center justify-between space-y-2">
                                    {/* Quantity Controls */}

                                    <p className="text-lg font-bold text-gray-800">$240</p>
                                    <div className="flex items-center border border-gray-300 rounded-md">
                                        <button className="px-2 py-1 text-gray-600 hover:bg-gray-200">-</button>
                                        <span className="px-4">1</span>
                                        <button className="px-2 py-1 text-gray-600 hover:bg-gray-200">+</button>
                                    </div>

                                    {/* Delete Icon */}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Billing Section */}
                    <div className="w-full lg:w-2/5 border border-gray-300 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                        <div className="space-y-4">
                            <div className="flex justify-between text-lg">
                                <span className='text-gray-400'>Subtotal</span>
                                <span className="font-bold">$150.00</span>
                            </div>
                            <div className="flex justify-between text-lg">
                                <span className='text-gray-400'>Discount (-20%)</span>
                                <span className="font-bold text-red-500">$12.00</span>
                            </div>
                            <div className="flex justify-between text-lg">
                                <span className='text-gray-400'>Delivery Fees</span>
                                <span className="font-bold">$12.00</span>
                            </div>
                            <hr className="" />
                            <div className="flex justify-between text-xl my-8">
                                <span>Total</span>
                                <span className="font-bold">$162.00</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-full gap-2 md:w-auto my-8">
                            <div className="md:flex-grow bg-gray-300 flex items-center w-full rounded-full px-4 py-2">
                                <GoTag className="text-gray-500" size={20} />
                                <input
                                    type="text"
                                    placeholder="Add promo code"
                                    className="flex-1 bg-transparent outline-none px-2 text-gray-700"
                                />
                            </div>
                            <button className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-800 transition">
                                Apply
                            </button>

                        </div>
                        <button className="flex items-center justify-center text-center gap-2 w-full bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                            Go to Checkout <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartPage