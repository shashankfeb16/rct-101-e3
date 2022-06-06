import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count,setCount] = useState(0)
  const addtoCart = ()=>{
    setCount(count+1)
  }
  const removetoCart = ()=>{
    if(count>0){
      setCount(count-1)
    }
  }
  return <CartContext.Provider value={{count,addtoCart,removetoCart}}>{children}</CartContext.Provider>;
};
