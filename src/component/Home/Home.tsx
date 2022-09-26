import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { ErrorFallback } from "../../ErrorFallback";
import { Cart } from "../Cart/Cart";
import '../../App.style'
import { Wrapper } from "../Cart/Cart.style";
import { Button, Grid } from "@mui/material";



export const Home: React.FC<{}> = () => {
 
  const {products , isLoading} =useContext(DataContext);
  
  let navigate = useNavigate();
    const handleOnClick = () => {
      navigate(`/admin`);
      console.log('data')
      
   };

    return(
        <Wrapper>
        <Button onClick={handleOnClick}>Add New Shop Data</Button>
        <Grid container spacing={3}>
        { !isLoading &&  products?.map((item) => {
           return  <Grid item key={item.id} xs={12} sm={4}> <Cart key={Math.random().toString()} product={item}  />
           
         </Grid> }
        )}
       </Grid>
        </Wrapper>
        
    )
}

