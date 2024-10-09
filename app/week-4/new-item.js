"use client";

import React, { useState } from 'react';

const NewItem = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-slate-300 border border-blue-800 p-5 m-5 mb-2 ml-10 ">
      
      <div className="flex items-center mb-4">
        <button 
          onClick={decrement} 
          disabled={quantity === 1} 
          className="bg-red-500 text-white px-3 py-1 rounded-l-md disabled:opacity-50">-</button>
        <span className="mx-2 text-lg">{quantity}</span>
        <button 
          onClick={increment} 
          className="bg-green-500 text-white px-3 py-1 rounded-r-md">+</button>
      </div>
    </div>
  );
};

export default NewItem;
