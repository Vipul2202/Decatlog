import React from 'react';
import Decatlog from "../Assets/Decatlog.png";
import t from "../Assets/t.png";
import i from "../Assets/i.png";
import f from "../Assets/f.png";
import l from "../Assets/l.png";
import you from "../Assets/you.png";
const Footer = () => {
    const currentYear = new Date().getFullYear(); 
    return (
        <div>
            <footer className="bg-white dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="md:flex md:w-[40%] items-start mb-6 md:mb-0 flex flex-col p-4 space-y-4">
                            <a href="/" className="flex items-center mb-4 md:mb-0 md:me-4">
                                <img src={Decatlog} className="h-8" alt="FlowBite Logo" />
                            </a>
                            <div className='md:w-[55%] flex-col flex space-y-4'>
                                <p>Empowering communities through seamless access to professional services and fundraising opportunities</p>
                                <div className='flex flex-row space-x-2'><svg width="24" height="34" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6906 14.7469C9.67801 14.7469 8.70686 14.3501 7.99083 13.6439C7.27481 12.9376 6.87254 11.9797 6.87254 10.9809C6.87254 9.98207 7.27481 9.02417 7.99083 8.3179C8.70686 7.61164 9.67801 7.21486 10.6906 7.21486C11.7032 7.21486 12.6744 7.61164 13.3904 8.3179C14.1064 9.02417 14.5087 9.98207 14.5087 10.9809C14.5087 11.4754 14.4099 11.9652 14.2181 12.4221C14.0262 12.879 13.745 13.2941 13.3904 13.6439C13.0359 13.9936 12.615 14.271 12.1517 14.4602C11.6885 14.6495 11.192 14.7469 10.6906 14.7469ZM10.6906 0.436035C7.8553 0.436035 5.13609 1.54701 3.13121 3.52455C1.12633 5.50209 0 8.18421 0 10.9809C0 18.8895 10.6906 30.5642 10.6906 30.5642C10.6906 30.5642 21.3813 18.8895 21.3813 10.9809C21.3813 8.18421 20.2549 5.50209 18.25 3.52455C16.2452 1.54701 13.526 0.436035 10.6906 0.436035Z" fill="#0BDBB6" />
                                </svg>
                                    <p>70 Washington Square South,
                                        New York, NY 10012, US</p></div>
                                <div className='flex flex-row space-x-2'><svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.4687 25.7685C18.4098 25.7685 16.9224 25.3703 14.6951 24.0764C11.9867 22.4971 9.89171 21.039 7.19789 18.2453C4.60063 15.5464 3.33672 13.799 1.56778 10.452C-0.430609 6.67291 -0.0899494 4.692 0.290852 3.84537C0.744341 2.83348 1.41373 2.22826 2.27894 1.62756C2.77037 1.29276 3.29043 1.00577 3.83252 0.770216C3.88677 0.745963 3.93721 0.722837 3.98224 0.701968C4.25075 0.576186 4.65759 0.386104 5.17292 0.589159C5.51683 0.723401 5.82386 0.998089 6.30447 1.49163C7.29011 2.50239 8.63702 4.75348 9.1339 5.859C9.46751 6.6041 9.68829 7.09594 9.68883 7.64757C9.68883 8.2934 9.37638 8.79145 8.9972 9.32898C8.92614 9.42994 8.85562 9.52639 8.78727 9.62003C8.37447 10.1841 8.28388 10.3471 8.34355 10.6381C8.46452 11.223 9.36661 12.9642 10.8491 14.5024C12.3317 16.0405 13.9579 16.9193 14.5226 17.0445C14.8145 17.1094 14.9745 17.0112 15.5343 16.5668C15.6146 16.503 15.697 16.437 15.7833 16.371C16.3615 15.9238 16.8183 15.6073 17.4247 15.6073H17.428C17.9558 15.6073 18.4077 15.8454 19.1562 16.2379C20.1327 16.7501 22.3627 18.1325 23.3407 19.1585C23.8164 19.6571 24.0817 19.9753 24.2113 20.3323C24.4066 20.8698 24.2227 21.2912 24.1029 21.5732C24.0828 21.62 24.0605 21.6713 24.0372 21.7283C23.8089 22.291 23.5312 22.8306 23.2078 23.3403C22.6312 24.2372 22.047 24.9315 21.0716 25.4036C20.5708 25.6499 20.0227 25.7747 19.4687 25.7685Z" fill="#0BDBB6" />
                                </svg>  <p>+91-9876543214</p>
                                </div>

                                <div className='flex flex-row space-x-2'><svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.4913 0.768799H2.72125C1.22456 0.768799 0.0136062 1.97149 0.0136062 3.44146L0 19.4774C0 20.9474 1.22456 22.15 2.72125 22.15H24.4913C25.9879 22.15 27.2125 20.9474 27.2125 19.4774V3.44146C27.2125 1.97149 25.9879 0.768799 24.4913 0.768799ZM24.4913 6.11411L13.6063 12.7958L2.72125 6.11411V3.44146L13.6063 10.1231L24.4913 3.44146V6.11411Z" fill="#0BDBB6" />
                                </svg>
                                    <p>info@companyname.com</p>
                                </div>
                                <div className='flex flex-row space-x-6 w-full' >
                                    <img src={f} alt='facebook' />
                                    <img src={i} alt='instra' />
                                    <img src={l} alt='linkedin' />
                                    <img src={you} alt='you-tube' />
                                    <img src={t} alt='twitter' />

                                </div>

                            </div>
                        </div>
                        <div className="md:w-[60%] grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-[#0BDBB6] uppercase dark:text-white">Quick Links</h2>
                                <ul className="text-gray-500 dark:text-gray-400">
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">About us</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Investor Relations</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">We're hiring</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Customer Care</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Free Listing</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">What's New</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Report a Bug</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">B2B Sitemap</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-[#0BDBB6] uppercase dark:text-white">Popular Categories</h2>
                                <ul className="text-gray-500 dark:text-gray-400">
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Doctors</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Engineers</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">CA’s</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Advocates</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Teachers</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Labours</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Officers</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Govt. Officials</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-[#0BDBB6] uppercase dark:text-white">Popular Cities</h2>
                                <ul className="text-gray-500 dark:text-gray-400">
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">New Delhi</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Pune</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Surat</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Mumbai</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Panaji</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Bangalore</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Chandigarh</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Srinagar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    
                    </div>
                 


                    <div className="bg-[#0BDBB6] flex justify-center items-center py-[2%]">
        <span className="text-sm text-black font-bold mt-4 sm:mt-0">
          © <a href="/" className="hover:underline">Copyrights 2008-{currentYear} </a>. All Rights Reserved.
        </span>
      </div>
                    
            </footer>
            
<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>What is Flowbite?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      
      <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
 
  
 
</div>

        </div>
    );
}

export default Footer;
