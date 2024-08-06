import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cartslice";

const CartTile = ({ item }) => {
    const dispatch = useDispatch();
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(item.id))
      }
  return (
    <>
      <div className="flex flex-col items-center p-5 justify-between bg-yellow-300 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img src={item?.image} alt="item" className="h-28 rounded-lg" />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{item.title}</h1>
            <p className="text-white font-extrabold">{item.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-300 text-black border-2 rounded-lg font-bold p-4"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTile;
