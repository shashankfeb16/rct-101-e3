import React, { useState,useEffect, useContext } from "react";
import axios from "axios"
import { CartContext } from "../../context/CartContext";

const Products = () => {
  const [products,setProducts] = useState([]);
  const {addtoCart,removetoCart} = useContext(CartContext)
  useEffect(() => {
    axios.get("http://localhost:8080/products").then((res)=>{
      setProducts(res.data);
    })
  
    
  }, [])
  
  return <div>{/* Code here */}
  Products
  {products.map((pro)=>{
    return <div>
      <p>{pro.name}</p>
      <p>{pro.description}</p>
      {/* <p>{pro.id}</p> */}
      <button onClick={addtoCart}>Add to cart</button>
      <button onClick={removetoCart}>Remove Item</button>
    </div>
  })}
  
  </div>;
};

export default Products;
