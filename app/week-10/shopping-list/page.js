"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getItems } from "../_services/shopping-list-service";  

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [shoppingList, setShoppingList] = useState([]);

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
      router.push("/week-9/shopping-list");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push("/week-9");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const loadShoppingList = async () => {
    if (user?.uid) {
      try {
        const items = await getItems(user.uid);  
        setShoppingList(items);
      } catch (error) {
        console.error("Error fetching shopping list:", error);
      }
    }
  };

  
  useEffect(() => {
    if (user?.uid) {  
      loadShoppingList();
    }
  }, [user]);  

  if (user) {
    return (
      <div>
        <h1>Welcome, {user.displayName}!</h1>
        <p>Email: {user.email}</p>

        {/* Display the shopping list items */}
        {shoppingList.length > 0 ? (
          <div>
            <h2>Your Shopping List</h2>
            <ul>
              {shoppingList.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.quantity}
                </li>
              ))}
            </ul>
            <button onClick={() => router.push("/week-9/shopping-list")}>Go to Shopping List</button>
          </div>
        ) : (
          <p>Your shopping list is empty.</p>
        )}

        <button onClick={handleSignOut}>Log Out</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to the Shopping List App</h1>
      <p>Please log in to access your shopping list</p>
      <button onClick={handleSignIn}>Login with GitHub</button>
    </div>
  );
};

export default LandingPage;
