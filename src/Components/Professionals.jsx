import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import element from "../Assets/element.png";

const Professionals = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 365 });
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState([]);
  const [slider, setSlider] = useState([]);

  const fetchAllCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/category/getcategory");
      const data = res.data;
      setCategory(data.categories);
    } catch (error) {
      console.log("error in fetching", error);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const fetchSliderDetail = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/slider/getslider");
      const data = res.data;
      setSlider(data.sliderdata);
    } catch (error) {
      console.log("error in fetching slider", error);
    }
  };

  useEffect(() => {
    fetchSliderDetail();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const currentSlide = slider[activeIndex];

  return (
    <div className="p-6 px-[4%] lg:px-[8%] w-full relative">
      <img
        src={element}
        alt="background"
        className="absolute top-0 left-0 w-40% h-[500px] z-0 object-cover"
      />

      <div className="z-10">
        <h1 className="text-black text-2xl font-bold">
          Lorem Ipsum Dolor Sit Amet,
          <span className="text-[#0BDBB6]">Consectetur Adipiscing Elit</span>
        </h1>

        <form className="max-w-2xl mt-4">
          <div className="flex">
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-start py-2.5 px-12 space-x-2 text-sm font-medium text-start text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z"
                  fill="#938F96"
                />
              </svg>
              <h1 className="text-[#938F96]">Search Location...</h1>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            ></div>
            <div className="relative w-full">
              <input
                type="text"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-700 bg-gray-50 rounded-e-lg border-s-gray-2 border-s-2 border border-gray-300 focus:ring-[#0BDBB6] focus:border-[#0BDBB6] dark:border-[#0BDBB6] dark:text-white dark:focus:border-[#0BDBB6]"
                placeholder="Search cardiologist, doctors..."
                required
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#0BDBB6] rounded-e-lg border border-[#0BDBB6] hover:bg-[#0BDBB6] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#0BDBB6] dark:hover:bg-[#0BDBB6] dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 space-x-4 mt-4">
        <div className="h-96 md:w-[95%] w-full bg-gradient-to-r from-[#2D4760] to-[#275680] rounded-lg relative px-4 p-4 mt-2">
          {currentSlide && (
            <div>
              <h1 className="text-4xl font-bold w-[60%] text-white ">
                {currentSlide.title}
              </h1>
              <h2 className="text-white w-[60%] text-sm">
                {currentSlide.description}
              </h2>
              <button className="px-2 py-1 bg-[#FBFF7F] rounded-lg mt-2">
                Subscribe Now
              </button>
            </div>
          )}
          <div
            className={`flex ${isMobile ? "flex-col" : "flex-row"} md:space-x-3 items-end justify-end`}
          >
            {currentSlide && (
              <img
                className={`absolute ${isMobile ? "w-full h-[70%] bottom-5" : "w-[40%] bottom-0 right-0"} `}
                src={currentSlide.image}
                alt="testimonial"
              />
            )}
          </div>
          <div className="absolute flex justify-center items-end w-full bottom-8">
            <div className="flex justify-center items-end">
              {slider.map((_, index) => (
                <div key={index} className="pagination-icon">
                  <button
                    className={`w-3 h-3 rounded-full mx-1 ${activeIndex === index ? "bg-white" : "bg-gray-500 opacity-50"}`}
                    onClick={() => handleSlideChange(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-4 gap-4">
            {category.map((cat) => (
              <img
                key={cat._id}
                src={cat.image}
                alt={cat.name}
                className="col-span-2 lg:col-span-1 w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professionals;
