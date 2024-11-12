"use client"

import React from "react";
import { Navbar } from "@/components";
import EmailMarketing from "@/components/email/email";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Service(){
 
  // using Router
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

 
    return(
   <>
   
   {/* content */}
   <header>
      {/* Navbar */}
      <Navbar />

      {/* Section Hero */}
      <div className="bg-blue-100 py-14">
        <h3 className="text-2xl tracking-widest text-blue-600 text-center">FEATURES</h3>
        <h1 className="mt-8 text-center text-5xl text-blue-600 font-bold">Our Features & Services.</h1>

        {/* Box Section */}
        <div className="md:flex md:justify-center md:space-x-8 md:px-14">
          {/* box-1: Java Consulting */}
          <div className="mt-16 py-4 px-4 w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="w-sm">
              <img
                className="w-64"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg"
                alt="Java Consulting"
              />
              <div className="mt-4 text-blue-600 text-center">
                <h1 className="text-xl font-bold">Java Consulting</h1>
                <p className="mt-4 text-gray-600">
                  Expert Java development and consulting services to build high-performance, scalable applications.
                </p>
                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-blue-600 text-white tracking-widest hover:bg-blue-500 transition duration-200">
                  MORE
                </button>
              </div>
            </div>
          </div>

          {/* box-2: Oracle License Management */}
          <div className="mt-16 py-4 px-4 w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="w-sm">
              <img
                className="w-64"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg"
                alt=" License Management"
              />
              <div className="mt-4 text-blue-600 text-center">
                <h1 className="text-xl font-bold"> License Management</h1>
                <p className="mt-4 text-gray-600">
                  Ensure compliance and optimize your Oracle software licensing to reduce costs and improve efficiency.
                </p>
                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-blue-600 text-white tracking-widest hover:bg-blue-500 transition duration-200">
                  MORE
                </button>
              </div>
            </div>
          </div>

          {/* box-3: Cybersecurity Consulting */}
          <div className="mt-16 py-4 px-4 w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="w-sm">
              <img
                className="w-64"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg"
                alt="Cybersecurity Consulting"
              />
              <div className="mt-4 text-blue-600 text-center">
                <h1 className="text-xl font-bold">Cybersecurity Consulting</h1>
                <p className="mt-4 text-gray-600">
                  Protect your business with our comprehensive cybersecurity consulting services.We also build a lot of security.
                </p>
                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-blue-600 text-white tracking-widest hover:bg-blue-500 transition duration-200">
                  MORE
                </button>
              </div>
            </div>
          </div>

          {/* box-4: Web Development */}
          <div className="mt-16 py-4 px-4 w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="w-sm">
              <img
                className="w-64"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg"
                alt="Web Development"
              />
              <div className="mt-4 text-blue-600 text-center">
                <h1 className="text-xl font-bold">Web Development</h1>
                <p className="mt-4 text-gray-600">
                  Tailored web development services to build responsive, user-friendly websites and applications.
                </p>
                <button 
                onClick={() => handleNavigation("/services/MoreSection")}
                className="mt-8 mb-4 py-2 px-14 rounded-full bg-blue-600 text-white tracking-widest hover:bg-blue-500 transition duration-200">
                  MORE
                </button>
              </div>
            </div>
          </div>
        </div>

       <div className=" flex flex-col justify-center items-center">
       <h4 className="text-center  text-lg mt-14 text-black font-bold">
         Our Service
        </h4>
        <Image 
                src="/logo/stock_guru_icon.png" 
                alt="Company Logo"
                width={200} 
                height={200} 
                className="rounded-full" // Optional styling
              />
       </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-16 bg-blue-700 text-sm">
       <EmailMarketing/>
      </footer>
    </header>
   
   
   
   
   
   </>
    );

}



