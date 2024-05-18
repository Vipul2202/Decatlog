import React, { useState, useEffect } from "react";
import Decatlog from "../Assets/Decatlog.png";
import { Button } from "@mui/material";

const Navnext = ({navigate}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 560); // Adjust the breakpoint as needed
    };

    handleResize(); // Call the function to set initial state
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <nav className="">
        <div className=" z-40 flex justify-between items-center space-x-6   px-[4%] lg:px-[8%] g w-full bg-white">

          <a
            href="https://ragasoft.co.in/about-us/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <img
              src={Decatlog}
              className="h-8 "
              alt="Logo"
            />
          </a>

          <div className="flex md:order-2 space-x-2">

            <div className="w-full">
              {!isMobile && (
                <div className=" items-center flex gap-5 w-full">
                <p className="w-full font-semibold">Already have an account?</p>

                <div className="flex justify-end">
              <div className="w-full h-10 py-2 bg-[#0BDBB6] px-4 flex justify-center items-center rounded-md text-white hover:scale-105 hover:shadow-md transition duration-300 hover:drop-shadow-2xl">
             
              <button onClick={() => navigate('/Login')}  className="text-white ">Login</button>
            </div>
            </div>
                </div>
              )}
            </div> 
            
            {/* <div>
              {!isMobile && (
                <div className="w-full h-10 py-2 hover:scale-105 hover:shadow-md transition duration-300 hover:drop-shadow-2xl bg-white border-2 border-[#0BDBB6] px-4 flex justify-center items-center rounded-md ">
                      <a href="#contact" className="text-[#0BDBB6] ">Donate Now</a>
                </div>
                
              )}
            </div> */}
          </div>
          
          {isMenuOpen ? (
            <div className="md:hidden">
              <button className="navbar-close" onClick={toggleMenu}>
                <svg
                  className={`h-6 w-6 cursor-pointer hover:text-gray-500`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          ) : (
            <button
              className={`navbar-burger md:hidden flex items-center p-2 text-black`}
              onClick={toggleMenu}
            >
              <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          )}
          <div
            className={`items-center  w-full  md:w-auto md:order-1 md:block hidden`}
            id="navbar-sticky"
          >
            <ul
              className={`flex   flex-col md:p-0 mt-4 font-medium    md:flex-row md:mt-0 md:border-0 text-gray-900 `}
            >
              <li>
                <a
                  href="#/"
                  className="block py-2 rounded hover:text-[#0BDBB6]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 rounded hover:text-[#0BDBB6]"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#upcoming"
                  className="block py-2 px-3 rounded hover:text-[#0BDBB6]"
                >
                  Raise
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="block py-2 px-3 rounded hover:text-[#0BDBB6]"
                >
                  Startup
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="block py-2 px-3 rounded hover:text-[#0BDBB6]"
                >
                  Funds
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="block py-2  rounded hover:text-[#0BDBB6]"
                >
                  Investors
                </a>
              </li>
            </ul>
          </div>


          <div className={`navbar-menu md:hidden fixed inset-0 z-20 ${isMenuOpen ? '' : 'hidden'}`}>
            <div className={`navbar-backdrop fixed inset-0 bg-gray-800 opacity-25 `} onClick={toggleMenu}></div>
            <nav className={`fixed top-0 left-0 bottom-0 flex flex-col w-6/7 max-w-sm py-6 border-r overflow-y-auto bg-white`}>
              <div>
                <div className="flex justify-between items-start p-2 flex-col space-y-4 text-start ">
                  <img
                    src={Decatlog}
                    className="h-8"
                    alt="Logo"
                  />
                  <div className="flex items-center space-x-2 ">

                    <div className="h-10 py-2 bg-[#0BDBB6]  px-4 flex justify-center items-center rounded-md text-white ml-4">
                      <a href="#login/signup" className="text-white">Login/Sign Up</a>
                    </div>
                    {/* <div className="w-full h-10 py-2 bg-white border-2 border-[#0BDBB6] px-4 flex justify-center items-center rounded-md ">
                      <a href="#contact" className="text-[#0BDBB6]">Donate Now</a>
                </div> */}
                  </div>
                </div>
                <ul
              className={`flex   flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 sm: text-gray-900 `}
            >
              <li>
                <a
                  href="/home"
                  className="block py-2 px-3 rounded hover:text-[#0BDBB6]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 rounded hover:text-[#0BDBB6]"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#upcoming"
                  className="block py-2 px-3 rounded hover:text-[#0BDBB6]"
                >
                  Raise
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="block py-2 px-3 rounded hover:text-[#0BDBB6]"
                >
                  Startup
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="block py-2 px-3 rounded hover:text-[#0BDBB6]"
                >
                  Funds
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="block py-2 px-3 rounded hover:text-[#0BDBB6]"
                >
                  Investors
                </a>
              </li>
            </ul>
              </div>
            </nav>
          </div>

          
        </div>
      </nav>
    </div>
  );
};

export default Navnext;
