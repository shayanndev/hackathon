import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";


function Testimonials() {
    return (
        <div className="p-4 md:p-0">

            <div className="space-y-8">

                <div className="flex justify-between items-center mt-8 md:px-28">
                    <div className="flex space-x-2">
                        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight text-black">OUR HAPPY CUSTOMERS</h1>
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
                        <div className="flex gap-8">
                            {/* Left Blurred Card */}
                            <div className="bg-white p-6 space-y-5 border border-gray-300 opacity-40 scale-90 blur-sm flex-shrink-0 w-[300px]">
                                <div className="flex space-x-1 text-yellow-500">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <FaStar key={index} />
                                    ))}
                                </div>
                                <div className="flex items-center space-x-1 mt-4">
                                    <h4 className="text-gray-800 font-bold">Alex P.</h4>
                                    <p className="text-green-500">
                                        <HiBadgeCheck size={24} />
                                    </p>
                                </div>
                                <p className="text-gray-500 text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                                </p>
                            </div>

                            {/* Center Cards */}
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 space-y-5 border border-gray-300 flex-shrink-0 w-[300px] md:w-[400px]"
                                >
                                    <div className="flex space-x-1 text-yellow-500">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
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
                                </div>
                            ))}

                            {/* Right Blurred Card */}
                            <div className="bg-white p-6 space-y-5 border border-gray-300 opacity-40 scale-90 blur-sm flex-shrink-0 w-[300px]">
                                <div className="flex space-x-1 text-yellow-500">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <FaStar key={index} />
                                    ))}
                                </div>
                                <div className="flex items-center space-x-1 mt-4">
                                    <h4 className="text-gray-800 font-bold">Chris R.</h4>
                                    <p className="text-green-500">
                                        <HiBadgeCheck size={24} />
                                    </p>
                                </div>
                                <p className="text-gray-500 text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Testimonials;