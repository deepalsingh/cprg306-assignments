"use client";

import React, { useState, useEffect } from "react";

// Function to fetch meal ideas based on the ingredient
const fetchMealIdeas = async (ingredient) => {
  console.log("Fetching meals for ingredient:", ingredient); // Log the ingredient being fetched
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  
  console.log("API Response:", data); // Log the API response to inspect the structure
  return data.meals || [];  // Return empty array if no meals are found
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  // Load meal ideas whenever the ingredient changes
  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient).then((mealData) => {
        console.log("Fetched meals:", mealData); // Log the meals data
        setMeals(mealData);  // Update state with fetched meals
      });
    }
  }, [ingredient]);

  return (
    <div className="meal-ideas">
      <h2>Meal Ideas for {ingredient}</h2>
      {meals.length === 0 ? (
        <p>No meal ideas found. Try another ingredient!</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              <h3>{meal.strMeal}</h3>
              <img src={meal.strMealThumb} alt={meal.strMeal} width={100} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MealIdeas;
