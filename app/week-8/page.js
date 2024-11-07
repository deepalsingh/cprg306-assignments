'use client';

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';  // Import the new component
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); // New state to hold selected ingredient

  // Event handler for adding a new item
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  // Event handler for selecting an item
  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF][\uDC00-\uDFFF])/g, '').trim();
    console.log("Cleaned Ingredient:", cleanedItemName); // Log cleaned item name
    setSelectedItemName(cleanedItemName); // Update the selected ingredient
  };

  console.log("Selected ingredient in Page:", selectedItemName); // Log selected item name in page

  return (
    <main className="p-5 flex">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      
      <div className="flex-1 ml-10">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}  {/* Render MealIdeas only if an ingredient is selected */}
      </div>
    </main>
  );
}
