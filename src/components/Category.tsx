
import Image from "next/image";
import React from 'react'

function Category() {
    return (
        <div className="py-12 px-6 md:px-28">
            {/* Section Title */}
            <div className="bg-gray-100 p-4 md:p-20 rounded-2xl">
                <div className="flex justify-center items-center md:items-start mb-12">
                    <h1 className="text-3xl text-center md:text-left font-extrabold leading-tight text-black">BROWSE BY DRESS STYLE</h1>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-columns-1 md:grid-cols-3 gap-4">
                    {/* Row 1 - First Image */}
                    <div className="relative h-72">
                        <Image
                            src="/images/category1.png"
                            alt="Category 1"
                            fill
                            className="object-cover rounded-lg w-full"
                        />
                    </div>
                    <div className="relative h-72 md:col-span-2">
                        <Image
                            src="/images/category2.png"
                            alt="Category 2"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="relative h-72 md:col-span-2">
                        <Image
                            src="/images/category3.png"
                            alt="Category 3"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="relative h-72">
                        <Image
                            src="/images/category4.png"
                            alt="Category 4"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Category