import axios from './axios';
import React, { createContext, useEffect, useState } from 'react'

export const productContext = createContext();
const Context= (props)=>{
    const [products ,setProducts] = useState(null)
    const getProducts = async()=>{
        try{
          const {data}= await axios("./products")
          console.log(data)
        }catch(error){
          console.log(error);
        }
    }

    useEffect(()=>{
        getProducts();
    },[])
  return (
    <div>
     return <productContext.Provider value={[products ,setProducts]}>{props.children}</productContext.Provider> 
    </div>
  )
}

export default Context
