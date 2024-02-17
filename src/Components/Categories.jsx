import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Categories = () => {
  const categoryInfo = useSelector((state) => state.category);
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (!selectedCategory && categoryInfo.length > 0) {
      setSelectedCategory(categoryInfo[0]);
    }
    if (categoryInfo) {
      setCategoryData(categoryInfo);
    }
  }, [categoryInfo, selectedCategory]);

  return (
    <div className="bg-black">
      <ul className="flex">
        {categoryData?.map((item) => (
          <li key={item?.menu_category_id} className="-mb-px mr-1">
            <a
              className={`inline-block py-2 px-4 font-bold ${
                selectedCategory?.menu_category_id === item.menu_category_id
                  ? "text-red-600"
                  : "text-white"
              }`}
              onClick={() => setSelectedCategory(item)}
              href="#"
            >
              {item.menu_category}
            </a>
            <hr
              className={
                selectedCategory?.menu_category_id === item.menu_category_id
                  ? "bg-red-600 h-1 w-full my-2"
                  : "bg-black"
              }
              style={{
                borderTop:
                  selectedCategory?.menu_category_id === item.menu_category_id
                    ? "2px solid red"
                    : "none",
              }}
            />
          </li>
        ))}
      </ul>
      <div
        className="bg-black mx-5 max-h-full sm:max-h-700px"
        style={{
          maxHeight: "583px",
          overflowY: "auto",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
        }}
      >
        <ProductCard category={selectedCategory} />
      </div>
    </div>
  );
};

export default Categories;
