import login from "../Assets/login.png";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import google from "../Assets/google.png";
import facebook from "../Assets/facebook.png";
import apple from "../Assets/apple.png";
import Navnext from "../Components/Navnext";
import Footer from "./Footer";
import Group from "../Assets/Group.png";
import axios from "axios";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ fullname: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const ShowIcon = () => (
    <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.2094 4.02031C10.9478 4.02031 11.6561 4.31367 12.1782 4.83584C12.7004 5.35801 12.9938 6.06623 12.9938 6.80469C12.9938 7.54315 12.7004 8.25137 12.1782 8.77354C11.6561 9.29571 10.9478 9.58906 10.2094 9.58906C9.47091 9.58906 8.7627 9.29571 8.24052 8.77354C7.71835 8.25137 7.425 7.54315 7.425 6.80469C7.425 6.06623 7.71835 5.35801 8.24052 4.83584C8.7627 4.31367 9.47091 4.02031 10.2094 4.02031ZM10.2094 -0.15625C14.85 -0.15625 18.8131 2.73022 20.4188 6.80469C18.8131 10.8792 14.85 13.7656 10.2094 13.7656C5.56875 13.7656 1.60566 10.8792 0 6.80469C1.60566 2.73022 5.56875 -0.15625 10.2094 -0.15625ZM2.02331 6.80469C2.77347 8.33638 3.93832 9.62688 5.38543 10.5295C6.83253 11.4321 8.50385 11.9106 10.2094 11.9106C11.9149 11.9106 13.5862 11.4321 15.0333 10.5295C16.4804 9.62688 17.6453 8.33638 18.3954 6.80469C17.6453 5.273 16.4804 3.98249 15.0333 3.07989C13.5862 2.17728 11.9149 1.69878 10.2094 1.69878C8.50385 1.69878 6.83253 2.17728 5.38543 3.07989C3.93832 3.98249 2.77347 5.273 2.02331 6.80469Z" fill="#8C8C8C" />
    </svg>
  );

  const HideIcon = () => (
    <svg width="21" height="14" viewBox="0 0 21 14" fill="#808080" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.2094 4.02031C10.9478 4.02031 11.6561 4.31367 12.1782 4.83584C12.7004 5.35801 12.9938 6.06623 12.9938 6.80469C12.9938 7.54315 12.7004 8.25137 12.1782 8.77354C11.6561 9.29571 10.9478 9.58906 10.2094 9.58906C9.47091 9.58906 8.7627 9.29571 8.24052 8.77354C7.71835 8.25137 7.425 7.54315 7.425 6.80469C7.425 6.06623 7.71835 5.35801 8.24052 4.83584C8.7627 4.31367 9.47091 4.02031 10.2094 4.02031ZM10.2094 -0.15625C14.85 -0.15625 18.8131 2.73022 20.4188 6.80469C18.8131 10.8792 14.85 13.7656 10.2094 13.7656C5.56875 13.7656 1.60566 10.8792 0 6.80469C1.60566 2.73022 5.56875 -0.15625 10.2094 -0.15625ZM2.02331 6.80469C2.77347 8.33638 3.93832 9.62688 5.38543 10.5295C6.83253 11.4321 8.50385 11.9106 10.2094 11.9106C11.9149 11.9106 13.5862 11.4321 15.0333 10.5295C16.4804 9.62688 17.6453 8.33638 18.3954 6.80469C17.6453 5.273 16.4804 3.98249 15.0333 3.07989C13.5862 2.17728 11.9149 1.69878 10.2094 1.69878C8.50385 1.69878 6.83253 2.17728 5.38543 3.07989C3.93832 3.98249 2.77347 5.273 2.02331 6.80469Z" fill="#808080" />
      <line x1="1" y1="1" x2="20" y2="13" stroke="red" strokeWidth="2" />
    </svg>
  );

  const validate = () => {
    const newErrors = {};
    if (!formData.fullname) newErrors.fullname = "Field is required";
    if (!formData.email) newErrors.email = "Field is required";
    if (!formData.password) newErrors.password = "Field is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      navigate("/");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister=async() => {
    try {
      const res=(await axios.post("http://localhost:5000/api/user/register",formData)).data;
      console.log(res);
      
      
    } catch (error) {
      console.log("error in register",error);
      
    }

  }
console.log(formData)


  return (
    <>
      <Navnext navigate={nav} />
      <div>
       <img src={Group} alt='background' className='absolute top-0 left-0 w-34% h-[360px]   object-cover' />
      
       </div>
    <div className="flex flex-col md:flex-row justify-center items-start min-h-screen bg-gray-100 ">
    
      <div className="w-full md:w-1/3 py-[8%]">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-black text-4xl  text-center  font-bold">Welcome to <span className="text-[#0BDBB6] ">DECATLOG</span></h1>
          <h2 className="text-black font-semibold flex justify-center items-center text-center">Empowering Communities: Connecting Professionals and Funding Initiatives</h2>
        </div>
        <form className="space-y-4 py-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700"></label>
            <input
              type="text"
              id="fullname"
              className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700"></label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-sm leading-5"
              >
                {showPassword ? <HideIcon /> : <ShowIcon />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div>
            <button
              type="submit"
              onClick={handleRegister}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg text-black font-bold bg-[#0BDBB6] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create An Account
            </button>
          </div>
        </form>
        <h1 className="text-gray-500 flex justify-center items-center">
          OR
        </h1>
        <div className="flex flex-row  space-x-4 justify-center py-4">
          <img className="rounded-full hover:shadow-md transition duration-900 hover:drop-shadow-2xl transform  duration-300 ease-in-out hover:scale-125" src={google} alt="google" />
          <img className="rounded-full hover:shadow-md transition duration-300 hover:drop-shadow-2xl  ease-in-out hover:scale-125" src={facebook} alt="facebook" />
          <img className="rounded-full hover:shadow-md transition duration-300 hover:drop-shadow-2xl  ease-in-out hover:scale-125" src={apple} alt="apple" />
        </div>
        <p className="text-black justify-center flex text-xs w-full">By using Decatlog, you agree to our privacy policy, and our terms and conditions</p>
        <h1 className="text-3xl text-black font-bold text-center">Join <span className="text-[#0BDBB6]">500+</span> Happy Customers</h1>
      </div>
      <div className="w-full md:w-1/2 p-4 flex justify-end items-start">
        <img src={login} alt="Login" className="max-w-full md:h-[726px] h-auto" />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Signup;
