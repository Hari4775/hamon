import React from "react";
import { useSelector } from "react-redux";

const Head = () => {
  const cartCount = useSelector((state) => state.cartCount);
  const hotelInfo = useSelector((state) => state.hotelData);

  return (
    <div className="bg-black">
      <nav className="bg-black shadow-gray-300 w-100 px-8 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="text-indigo-500 md:order-1">
            <h1 className="text-white font-bold font-mono  text-xl">
              <a href="/">{hotelInfo?.restaurant_name}</a>
            </h1>
          </div>

          <div class="order-2 md:order-3">
            <button className="px-2 py-2  text-gray-50 rounded-xl flex items-center gap-2">
              <span>My orders</span>
              <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-white hover:text-gray-700">
                <a href="#" role="button" class="relative flex">
                  <svg
                    className="flex-1 w-8 h-8 fill-current"
                    viewbox="0 0 24 24"
                  >
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                  </svg>
                  <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {cartCount}
                  </span>
                </a>
              </li>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Head;
