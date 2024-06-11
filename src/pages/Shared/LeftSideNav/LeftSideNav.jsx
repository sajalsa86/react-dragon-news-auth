import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="">
      <h2 className="text-2xl">All Categories</h2>
      {categories.map((category) => (
        <NavLink
          className="block p-4 my-3 rounded text-xl font-semibold hover:bg-gray-100 hover:text-blue-400 transition-colors"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;
