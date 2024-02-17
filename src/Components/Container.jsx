import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import { product_API } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { setProductData } from "../Utils/Redux/Pages/productSlice";
import { setCategoryData } from "../Utils/Redux/Pages/categorySlice";
import { setHotelData } from "../Utils/Redux/Pages/HotelSice";

const Container = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(product_API);
      if (!data.ok) {
        throw new Error("data fetching error");
      }
      const json = await data.json();
      setData(json?.data[0]);
      dispatch(setCategoryData(json?.data[0]?.table_menu_list));
      dispatch(setProductData(json?.data[0]?.table_menu_list));
      dispatch(setHotelData(json?.data[0]));
      setLoading(false);
    } catch (error) {
      console.log(error, "error fetching data");
    }
  };

  return (
    <div className="bg- black mt-8">
      <Categories />
    </div>
  );
};

export default Container;
