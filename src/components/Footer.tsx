import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";


function Footer() {
    return (
        <footer className="p-4 md:px-28">

            <div className="p-4 md:p-10 md:px-16 mb-20 bg-black mx-auto flex flex-col gap-5 md:flex-row items-center md:space-y-0 md:justify-between rounded-2xl">

                <div className="basis-1/2">
                    <h1 className="text-2xl md:text-5xl font-bold text-white">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                </div>

                <div className="w-full flex flex-col space-y-4 md:basis-1/4 md:w-auto">
                    <div className="bg-white flex items-center rounded-full p-3 md:p-4">
                        <TfiEmail className="text-gray-500" size={20} />
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            className="bg-transparent flex-1 outline-none px-2 text-sm text-gray-700"
                        />
                    </div>
                    <div className="bg-white text-black text-sm p-3 md:p-4 rounded-full text-center w-full">
                        Subscribe to Newsletter
                    </div>

                </div>
            </div>


            <div className="mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">

                    <div className="w-full md:w-1/4 flex flex-col items-start md:justify-between text-left">
                        <span className="text-2xl font-extrabold">SHOP.CO</span>
                        <p className="text-gray-400">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <div className="flex space-x-4 text-center">
                            <a href="#" className="text-gray-900 hover:text-black">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-900 hover:text-black">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" className="text-gray-900 hover:text-black">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-gray-900 hover:text-black">
                                <FaGithub size={20} />
                            </a>
                        </div>
                    </div>


                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">About</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">Features</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">Works</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">Career</a>
                            </li>
                        </ul>
                    </div>


                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Help</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">Customer Support</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">Delivery Details</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">Terms and Services</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>


                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">FAQ</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">Account</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">Manage Deliveries</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">Orders</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">Payments</a>
                            </li>
                        </ul>
                    </div>


                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">Free eBooks</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">Developer Tutorials</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">How To Blogs</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-black">Youtube Playlist</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-gray-700 mb-6" />

                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="">
                        <p className="text-sm text-gray-700">Shop.co © 2000-2023, All Rights Reserved</p>

                    </div>

                    <div className="flex space-x-4 text-center">
                        <Image
                            src="/images/payments.png"
                            alt="Paymentsl"
                            className="object-cover rounded-lg"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
