"use client";

import React, { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: Math.random().toString(36).substring(2, 15), // Generate a random ID
      name,
      quantity,
      category,
    };

    onAddItem(item); // Call the onAddItem prop to pass the new item

    // Reset fields
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  const incrementQuantity = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4 text-center">Add New Item</h2>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="name">Item Name</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="border border-gray-300 p-2 rounded w-full" 
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Quantity</label>
        <div className="flex items-center justify-center mb-2">
          <button 
            type="button" 
            onClick={decrementQuantity} 
            disabled={quantity === 1} 
            className={`text-white px-4 py-2 rounded-l-md ${quantity === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500'}`}
          >
            -
          </button>
          <span className="mx-2 text-lg">{quantity}</span>
          <button 
            type="button" 
            onClick={incrementQuantity} 
            className="bg-green-500 text-white px-4 py-2 rounded-r-md"
          >
            +
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="category">Category</label>
        <select 
          id="category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
      >
        Add Item
      </button>
    </form>
  );
};

export default NewItem;