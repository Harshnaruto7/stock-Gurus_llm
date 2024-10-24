"use client"

import React from "react";

import { Navbar } from "@/components";
import EmailMarketing from "@/components/email/email";
 

export default function About(){
 
    return(
   <>
   <Navbar/>
   <section>
        {/* Title */}
        <h1 className="mt-7 mb-5 xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
          More Than 10 Years We Provide Service <br className="md:block hidden" />
          in Software Solutions and Services
        </h1>

        {/* Map and Statistics Section */}
        <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
          {/* Desktop map image */}
          <img
            src="https://i.ibb.co/KjrPCyW/map.png"
            alt="global software services"
            className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden"
          />

          {/* Mobile map image */}
          <img
            src="https://i.ibb.co/SXKj9Mf/map-bg.png"
            alt="mobile-software-map"
            className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
          />

          {/* Statistic 1: Projects Delivered */}
          <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12 hover:bg-black hover:text-white transition duration-300">
            <p className="text-3xl font-semibold">500+</p>
            <p className="text-base leading-4 xl:mt-4 mt-2">
              Successful Projects Delivered Globally
            </p>
          </div>

          {/* Statistic 2: Technologies Supported */}
          <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12 hover:bg-black hover:text-white transition duration-300">
            <p className="text-3xl font-semibold">30+</p>
            <p className="text-base leading-4 xl:mt-4 mt-2">
              Supported Technologies (Java, Oracle, etc.)
            </p>
          </div>

          {/* Statistic 3: Security Services */}
          <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24 hover:bg-black hover:text-white transition duration-300">
            <p className="text-3xl font-semibold">10K+</p>
            <p className="text-base leading-4 xl:mt-4 mt-2">
              Licenses Managed & Security Services Provided
            </p>
          </div>
        </div>
        <EmailMarketing/>
      </section>
   
   
   
   </>
    );

}




















