import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cartslice";

const ProductTile = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id))
  }
  return (
    <div className="">
      <div className="flex flex-col items-center border-2 border-gray-500 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt="product"
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-800 font-bold text-lg">
            {product?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={cart.some(item => item.id === product.id) ? handleRemoveFromCart :handleAddToCart}
            className="bg-red-300 text-black border-2 rounded-lg font-bold p-4"
          >
            {
                cart.some(item => item.id === product.id) ? "Remove from Cart" : "Add to Cart"
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
