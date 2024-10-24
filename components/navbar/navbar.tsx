"use client";
import React,{useState} from "react";
import Modal from "../modal/modal";
// import { IoLogoOctocat } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Image from "next/image";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialize the router

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (path: string) => {
    router.push(path); // This will navigate to the specified path
  };
 

  return (
    <>
   <div className="sticky top-2 z-50">
        <nav
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Light white with 70% opacity
            backdropFilter: 'blur(10px)', // Blur effect
          }}
          className="text-gray-800 rounded-3xl shadow-lg py-4 px-6 sticky top-0 z-50 mx-2"
        >
          <div className="flex justify-between items-center">
            {/* Text and Icon aligned horizontally */}
            <div className="flex items-center space-x-2">
              <Image
                src="/logo/stock_guru_icon.png"
                alt="Company Logo"
                width={100}
                height={100}
                className="rounded-full" // Optional styling
              />
            </div>

            <div className="hidden lg:flex space-x-4">
              <button
                onClick={() => navigateTo("/")}
                className="bg-transparent text-gray-800 border border-transparent px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black"
              >
                Home
              </button>
              <button
                onClick={() => navigateTo("/services")}
                className="bg-transparent text-gray-800 border border-transparent px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black"
              >
                Services
              </button>
              <button
                onClick={() => navigateTo("/about")}
                className="bg-transparent text-gray-800 border border-transparent px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black"
              >
                About
              </button>
              <div className="px-3 py-2">
                <Modal />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button className="text-gray-800 focus:outline-none" onClick={toggleNavbar}>
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden mt-2">
              <button
                onClick={() => navigateTo("/home")}
                className="block bg-transparent text-gray-800 border border-transparent px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black"
              >
                Home
              </button>
              <button
                onClick={() => navigateTo("/services")}
                className="block bg-transparent text-gray-800 border border-transparent px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black"
              >
                Services
              </button>
              <button
                onClick={() => navigateTo("/about")}
                className="block bg-transparent text-gray-800 border border-transparent px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black"
              >
                About
              </button>
              <button className="block bg-transparent text-gray-800 border border-transparent px-3 py-2 rounded transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black">
                Contact Us
              </button>
            </div>
          )}
        </nav>
      </div>
    








    </>
  );
}
