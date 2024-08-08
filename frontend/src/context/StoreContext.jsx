// Original og is here
/*import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const  StoreContext = createContext(null)

const StoreContextProvider = (props) => {
const [cartItems, setCartItems] = useState({});
const url ="http://localhost:4000";
const [token,setToken] = useState("");

const[food_list,setFoodList] = useState([])

 const addToCart=  async (itemId)=> {
      if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
      }
      else {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      }
      if(token) {
        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
      }
    }

    const removeFromCart = async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(token) {
          await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
        }
    }
 
   const  getTotalCartAmount = ()=> {
    let totalAmount = 0;
    for(const item in cartItems)
      {
        if(cartItems[item]>0){
          let itemInfo = food_list.find((product)=>product._id === item);
          totalAmount += itemInfo.price* cartItems[item];
        }
       
      }
      return totalAmount;
  }

  const fetchFoodList = async ()=> {
    const response = await axios.get(url+"/api/food/list");
    setFoodList(response.data.data)
  }

  const loadCartData = async (token)=> {
    const response =  await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCartItems(response.data.cartData);
  }

  useEffect(()=> {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    
    return (
       <StoreContext.Provider value={contextValue}>
        {props.children}
       </StoreContext.Provider>
    )
}

export default StoreContextProvider; */

// test one poora bann ne k baad errror aagaya tha run n all hone k baad jab cart se item remove kiya toh uske liey 
/*
import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const  StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");

  const [food_list, setFoodList] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({...prev, [itemId]: 1}));
    } else {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }
    if (token) {
      await axios.post(url + "/api/cart/add", {itemId}, {headers: {token}});
    }
  }

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    if (token) {
      await axios.post(url + "/api/cart/remove", {itemId}, {headers: {token}});
    }
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo && itemInfo.price !== undefined) {
          totalAmount += itemInfo.price * cartItems[item];
        } else {
          console.error("Item info not found or price is undefined for item:", item);
        }
      }
    }
    return totalAmount;
  }

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  }

  const loadCartData = async (token) => {
    const response = await axios.post(url + "/api/cart/get", {}, {headers: {token}});
    setCartItems(response.data.cartData);
  }

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
*/

// popup 

import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [food_list, setFoodList] = useState([]);
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Manage authentication status

  const url = "http://localhost:4000";

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo && itemInfo.price !== undefined) {
          totalAmount += itemInfo.price * cartItems[item];
        } else {
          console.error("Item info not found or price is undefined for item:", item);
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
    setCartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        setIsAuthenticated(true);  // Set authentication status
        await loadCartData(storedToken);
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    isAuthenticated,  // Provide authentication status
    setIsAuthenticated // Provide method to set authentication status
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
