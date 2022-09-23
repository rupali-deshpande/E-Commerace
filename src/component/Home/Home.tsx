import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { ErrorFallback } from "../../ErrorFallback";
import { Cart } from "../Cart/Cart";



export const Home: React.FC<{}> = () => {
 
  const {products} =useContext(DataContext);
  
  let navigate = useNavigate();
    const handleOnClick = () => {
      navigate(`/admin`);
      console.log('data')
      
   };

    return(
        <>
        <button onClick={handleOnClick}>Add New Shop Data</button>
        { products?.map((item) => {
           return <Cart key={Math.random().toString()} product={item}  /> }
        )}
        </>
    )
}

