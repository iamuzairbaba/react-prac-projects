import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-purple-400 font-bold text-transparent text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              Redux ShopCart
            </h1>
          </div>
        </Link>
        <div className="flex items-center space-x-6 text-gray-600 font-semibold">
          <Link to={"/"}>
            <p className="cursor-pointer">Home</p>
          </Link>
          <Link to={"/cart"}>
            <p className="cursor-pointer">Cart</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
