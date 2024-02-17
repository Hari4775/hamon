import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCount,
  increaseCount,
} from "../Utils/Redux/Pages/cartCountSlice";
import { CgSquare } from "react-icons/cg";

const ProductCard = (category) => {
  const [dishes, setDishes] = useState([]);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handleIncrement = (dishId) => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [dishId]: (prevCounts[dishId] || 0) + 1,
    }));
    dispatch(increaseCount());
  };

  const handleDecrement = (dishId) => {
    if (count[dishId] > 0) {
      setCount((prevCounts) => ({
        ...prevCounts,
        [dishId]: prevCounts[dishId] - 1,
      }));
    }
    dispatch(decreaseCount());
  };

  useEffect(() => {
    if (category) {
      setDishes(category?.category?.category_dishes);
    }
  }, [category]);

  return (
    <>
      <div className="bg-black mx-2 productCard">
        {dishes?.map((item) => (
          <div
            key={item?.dish_id}
            className="flex flex-col my-16 h-3/5 w-full shadow-slate-600 shadow-lg"
          >
            <div
              key={item?.dish_id}
              className="relative flex h-2/12 sm:h-full md:flex-row  space-y-3 rounded-xl shadow-lg p-3  "
            >
              <div
                key={item?.dish_id}
                className="w-full flex flex-col space-y-2 p-3"
              >
                <div
                  key={item?.dish_id}
                  className="flex justify-between item-center sm:w-4/6"
                >
                  <p className="text-white font-bold sm:text-sm md:text-xl flex">
                    <span className="text-4xl text-left mr-4 -ml-2">
                      {item?.dish_Availability ? (
                        <CgSquare className="text-green-500" />
                      ) : (
                        <CgSquare className="text-red-700" />
                      )}
                    </span>
                    {item?.dish_name}
                  </p>
                  <div className="flex items-center"></div>
                </div>

                <p className=" text-white  md:text-lg sm:text-xs">
                  {item?.dish_currency} {item?.dish_price}
                </p>
                <p className="md:text-lg text-gray-400 text-base">
                  {item?.dish_description}
                </p>
                <p className="text-xl  text-gray-500"></p>
              </div>
              <div className="">
                <p className="text-slate-400 flex sm:text-center mx-2 my-7 sm:p-5 ">
                  {item?.dish_calories}&nbsp;<span>calories</span>
                </p>
              </div>

              <div
                key={item?.dish_id}
                className=" md:w-2/6 md:h-2/6 sm:w-3/6 sm:h-2/6  grid place-items-center content-start "
              >
                <img
                  className="w-60 h-60 sm:h-10 md:h-48 rounded-lg" // Adjusted height for small devices
                  src={item?.dish_image}
                  alt={item?.dish_name}
                />
              </div>
            </div>
            <div
              key={item?.dish_id}
              className="bg-green-500 flex rounded-xl text-white md:m-5 md:w-1/4 sm:w-8  justify-between p-3 "
            >
              <button
                className="px-5 py-1 text-white rounded-md"
                onClick={() => handleIncrement(item?.dish_id)}
              >
                +
              </button>
              {count[item?.dish_id] || 0}
              <button
                className="px-5 py-1 text-white rounded-md"
                onClick={() => handleDecrement(item?.dish_id)}
                disabled={count[item?.dish_id] === 0}
              >
                -
              </button>
            </div>
            {item?.addonCat ? (
              <p className="text-red-600  md:m-5 md:w-1/4 sm:w-8 ">
                Customization available
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
