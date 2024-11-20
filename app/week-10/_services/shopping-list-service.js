import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    const itemsRef = collection(db, "users", userId, "items");
    
    const q = query(itemsRef);
    
    try {
      const querySnapshot = await getDocs(q);
      
      const items = [];
      
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      
      return items; 
    } catch (error) {
      console.error("Error getting documents: ", error);
      return [];  
    }
  };

export const addItem = async (userId, item) => {
    const itemsRef = collection(db, "users", userId, "items");
  
    try {
      const docRef = await addDoc(itemsRef, item);
      
      return docRef.id;
    } catch (error) {
      console.error("Error adding document: ", error);
      throw new Error("Failed to add item");
    }
  };
  