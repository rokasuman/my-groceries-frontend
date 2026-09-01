import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import { toast } from "react-hot-toast";

export const AppContext = createContext();

//creating a provider
export const AppContextProvder = ({ children }) => {
  const navigate = useNavigate();

  //creating a state for user and the admin
  const [user, setUser] = useState(null);
  const [seller, setIsSeller] = useState(false);
  const [showUserLogin,setShowUserLogin ] = useState(false);
  const [product, setProduct] = useState([]);
  const [cartItems, setCardItems] = useState({});
  const [searchQurey, setSearchQurey] = useState("")

  //function to fetch the product
  const fetchProduct = () => {
    setProduct(dummyProducts);
  };

  //function to add to the cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCardItems(cartData);
    toast.success("Item added to Cart");
  };

  //function to remove from cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
      setCardItems(cartData);
    toast.success("Remove from cart");
  };

  //function to update the cart
  const updateCart = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCardItems(cartData);
    toast.success("Cart updated Successfully");
  };

  //get the total cart item
  const getTotalItem = ()=>{
    let totalItem = 0;
    for(const item in cartItems){
      totalItem += cartItems[item]
    }
    return totalItem;
  }

  //get the total amount
  // Get the total cart amount
const getTotalCartAmount = () => {
  let totalAmount = 0;

  for (const item in cartItems) {
    const productInfo = product.find(
      (product) => product._id === item
    );

    if (productInfo) {
      totalAmount += productInfo.offerPrice * cartItems[item];
    }
  }

  return totalAmount;
};

  useEffect(() => {
    fetchProduct();
  }, []);

  const value = {
    user,
    setUser,
    seller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    navigate,
    product,
    setProduct,
    addToCart,
    updateCart,
    removeFromCart,
    cartItems,
    searchQurey,
    setSearchQurey,
    getTotalItem,
    getTotalCartAmount
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

//using the constext
export const UseAppContext = () => {
  return useContext(AppContext);
};
