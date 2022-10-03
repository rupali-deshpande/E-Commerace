import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { ErrorFallback } from "../../ErrorFallback";
import { Cart } from "../Cart/Cart";
import '../../App.style'
import { Wrapper } from "../Cart/Cart.style";
import { Button, Grid } from "@mui/material";
//import { fetchProducts } from "../../store/productsaction";
import { useAppDispatch } from "../../hooks/react-hook";
import { productsActions } from "../../store/productslice";
import {getAllProducts} from '../Service/service'
import { useSelector } from "react-redux";
import { ProductsModel, ProductType } from "../../types";

export const Home: React.FC<{}> = () => {
 
  const {products , isLoading} =useContext(DataContext);
  const dispatch=useAppDispatch();
  const state = useSelector((state: ProductsModel ) => state)
  console.log("state" , state)
    //const allProducts=useAppSelector(state=>state.Products.products)
    //console.log("redux" ,allProducts)

  let navigate = useNavigate();
    const handleOnClick = () => {
      navigate(`/admin`);
      //console.log('data')
    
   };
   useEffect(() => {
    getAllProducts().then((response) => {
      console.log("redux" ,response)
      dispatch(productsActions.setProducts(response))
   })
   
    
   } , [])

    return(
        <Wrapper>
        <Button onClick={handleOnClick}>Add New Shop Data

        </Button>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
         { !isLoading  && state.products.map((item) => {
          console.log("data" , state)
           return  <Grid item key={item.id} xs={2} sm={4} md={4}> <Cart key={Math.random().toString()} product={item}  />
            </Grid> }
         )}
       </Grid>
        </Wrapper>
        
    )
}



