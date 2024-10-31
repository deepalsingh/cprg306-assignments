"use client";

import { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');

  // Create a copy of items and sort it
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <h2>Item List</h2>
      
      {/* Sort buttons */}
      <button
        onClick={() => setSortBy('name')}
        className={`p-2 m-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Sort by Name
      </button>
      <button
        onClick={() => setSortBy('category')}
        className={`p-2 m-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Sort by Category
      </button>

      {/* Render sorted items */}
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

