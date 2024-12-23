"use client";
import React, { useState } from "react";
import Link from 'next/link';
import {
    AiOutlineSearch,
    AiOutlineMenu,
    AiOutlineClose,
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { LuCircleUserRound } from "react-icons/lu"; import { FiShoppingCart } from "react-icons/fi";

function Navbar() {

    const handleClose = () => {
        const topBarElement = document.getElementById("top-bar");
        if (topBarElement) {
            topBarElement.style.display = "none"; // Hide the top bar
        }
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div>
            {/* Top Navbar */}
            <div id="top-bar" className="bg-black text-gray-300 py-2 relative px-6 md:px-28">
                <p className="text-center text-xs md:text-lg">
                    Sign up and get 20% off your first order.{" "}
                    <span className="underline text-white cursor-pointer">Sign Up Now</span>
                </p>
                <AiOutlineClose
                    className="text-sm md:text-2xl absolute top-1/2 right-6 md:right-28 transform -translate-y-1/2 cursor-pointer text-white"
                    onClick={handleClose} // Call the close handler
                />
            </div>

            {/* Main Navbar */}
            <div className="bg-white px-6 md:px-28 py-6 flex flex-wrap gap-8 items-center justify-between">
                {/* Logo */}
                <div className="flex flex-row items-center justify-center gap-2">
                    <AiOutlineMenu
                        className="block md:hidden cursor-pointer"
                        size={22}
                        onClick={toggleMenu}
                    />
                    <Link href="/">
                        <div className="font-extrabold text-2xl md:text-3xl text-black mr-6">
                            SHOP.CO
                        </div>
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-gray-800 font-normal relative">
                    {/* Shop Dropdown */}
                    <div className="group relative">
                        <Link href="/category">
                            <div className="flex items-center cursor-pointer">
                                Shop <IoIosArrowDown className="ml-1" />
                            </div>
                        </Link>
                        {/* Dropdown Content */}
                        <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg mt-0 w-40 z-60">
                            <Link
                                href="/category"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black"
                            >
                                Casuals
                            </Link>
                        </div>
                    </div>

                    {/* Other Navigation Links */}
                    <a href="#onsales" className="hover:text-black">
                        On Sales
                    </a>
                    <a href="#newarrivals" className="hover:text-black">
                        New Arrivals
                    </a>
                    <a href="#brands" className="hover:text-black">
                        Brands
                    </a>
                </div>

                {/* Search Bar */}
                <div className="hidden md:flex flex-1 w-full md:w-auto mx-0 md:mx-8 mt-4 md:mt-0">
                    <div className="bg-gray-100 flex items-center rounded-full px-4 py-2">
                        <AiOutlineSearch className="text-gray-500" size={20} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent flex-1 outline-none px-2 text-gray-700"
                        />
                    </div>
                </div>

                {/* Icons */}
                <div className="flex items-center justify-center space-x-4 lg:space-x-6 text-black md:mt-0">
                    {!isMenuOpen && (
                        <AiOutlineSearch className="md:hidden cursor-pointer" size={24} />
                    )}
                    <Link href="/cart">
                        <FiShoppingCart className="cursor-pointer" size={24} />
                    </Link>
                    <LuCircleUserRound className="cursor-pointer" size={24} />
                </div>

                {/* Dropdown Menu for Mobile */}
                {isMenuOpen && (
                    <div className={`absolute top-24 left-0 w-full bg-white shadow-lg z-50 p-6 space-y-4 md:hidden transition-transform ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
                        }`}
                    >
                        <div className="flex flex-col items-start space-y-2 text-gray-800 font-normal">
                            <div className="group relative">
                                <Link href="/category">
                                    <div className="flex items-center cursor-pointer">
                                        Shop <IoIosArrowDown className="ml-1" />
                                    </div>
                                </Link>
                                {/* Dropdown Content */}
                                <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg mt-0 w-40 z-60">
                                    <Link
                                        href="/category"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black"
                                    >
                                        Casuals
                                    </Link>
                                </div>
                            </div>
                            <a href="#onsales" className="hover:text-black">
                                On Sales
                            </a>
                            <a href="#newarrivals" className="hover:text-black">
                                New Arrivals
                            </a>
                            <a href="#brands" className="hover:text-black">
                                Brands
                            </a>
                        </div>
                        <div className="bg-gray-100 flex items-center rounded-full px-4 py-2">
                            <AiOutlineSearch className="text-gray-500" size={20} />
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-transparent flex-1 outline-none px-2 text-gray-700"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
