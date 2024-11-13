"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation"; 

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth(); 
  const router = useRouter(); 

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

  if (user) {
    return (
      <div>
        <h1>Welcome, {user.displayName}!</h1>
        <p>Email: {user.email}</p>
        <button onClick={handleSignOut}>Log Out</button>
        <button onClick={() => router.push("/week-9/shopping-list")}>Go to Shopping List</button>
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
