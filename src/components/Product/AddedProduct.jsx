import React from 'react';
import { CiCircleRemove } from "react-icons/ci";

const AddedProduct = ({ cart, quantities, handleQuantityChange, removeProductFromCart }) => {
  return (
    <>
      {cart.map((item, index) => (
        <div key={item._id} className="flex py-2 items-center mt-2 shadow-lg rounded-xl">
          <img className="w-20 h-16 rounded-lg shadow-md" src={item.img} alt={item.name} />
          <div className="m-2">
            <div className='flex justify-between'>
              <p className="text-md text-center ms-2">{item.name}</p>
              <button
                className="ml-4 text-red-500 text-xl"
                onClick={() => removeProductFromCart(item._id)}
              >
                <CiCircleRemove />
              </button>
            </div>
            <div className="flex justify-between items-center mt-4 gap-3">
              <p className="text-md text-left py-1 text-lime-500">
                Tk{(item.price * quantities[index])}
              </p>
              <div className="shadow-lg rounded-2xl px-8">
                <button
                  className="text-xl bg-lime-500 h-7 w-7 rounded-full"
                  onClick={() => handleQuantityChange(index, -1)}
                >
                  {" "} - {" "}
                </button>
                <span className="text-lg mx-1">{quantities[index]}</span>
                <button
                  className="text-xl h-7 w-7 bg-lime-500 rounded-full"
                  onClick={() => handleQuantityChange(index, 1)}
                >
                  {" "} + {" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddedProduct;
