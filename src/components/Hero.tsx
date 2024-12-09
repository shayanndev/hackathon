import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
    return (
        <div className="relative h-4/5">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start px-6 md:px-28 h-4/5 overflow-hidden bg-gray-100">
                {/* Text Column */}
                <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start mt-12 md:mt-32 space-y-6">
                    <h1 className="w-full md:w-5/6 text-3xl md:text-7xl font-extrabold leading-tight text-black">
                        FIND CLOTHES THAT MATCH YOUR STYLE
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>

                    <Link href="/category">
                        <button className="w-full md:w-1/3 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                            Shop Now
                        </button>
                    </Link>
                </div>

                {/* Image Column */}
                <div className="relative md:w-1/2 h-full flex justify-center items-start mt-12 md:mt-0">

                    <Image
                        src="/images/hero.jpeg"
                        alt="Fashion model"
                        className="object-cover rounded-lg"
                        width={600}
                        height={600}
                    />
                    <Image
                        src="/images/star-1.png"
                        alt="Fashion model"
                        className="object-cover rounded-lg absolute top-6 right-3 md:top-24 md:right-10"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/images/star-2.png"
                        alt="Fashion model"
                        className="object-cover rounded-lg absolute top-32 left-4 md:left-10 md:top-80"
                        width={60}
                        height={60}
                    />
                </div>
            </div>

            {/* Companies Logo Section */}
            <div id="brands" className="absolute bottom-0 w-full bg-black py-12">
                <div className="grid grid-cols-3 md:grid-cols-5 place-items-center px-4 md:p-0">
                    <Image
                        src="/images/comp1.png"
                        alt="Company 1"
                        className="md:h-16 object-contain"
                        width={120}
                        height={60}
                    />
                    <Image
                        src="/images/comp2.png"
                        alt="Company 2"
                        className="h-12 md:h-16 object-contain"
                        width={120}
                        height={60}
                    />
                    <Image
                        src="/images/comp3.png"
                        alt="Company 3"
                        className="h-16 object-contain"
                        width={120}
                        height={60}
                    />
                    <Image
                        src="/images/comp4.png"
                        alt="Company 4"
                        className="h-16 object-contain"
                        width={120}
                        height={60}
                    />
                    <Image
                        src="/images/comp5.png"
                        alt="Company 5"
                        className="h-16 object-contain"
                        width={120}
                        height={60}
                    />
                </div>
            </div>

        </div>
    );
}

export default HeroSection;
