import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/router";

const ShoppingListPage = () => {
  const { user } = useUserAuth();  
  const router = useRouter();  

  if (!user) {
    router.push("/week-9");
    return null;  
  }

  return (
    <div>
      <h1>Your Shopping List</h1>
      <p>Here you can add items to your shopping list.</p>
    </div>
  );
};

export default ShoppingListPage;
