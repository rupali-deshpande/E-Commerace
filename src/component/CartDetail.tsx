import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Wrapper } from '../component/Cart/Cart.style';
import { Button, CardMedia, Grid, IconButton } from '@mui/material';
import CustomButton from "../UI/button";
import { DataContext } from "../context/DataProvider";
import { ProductType } from "../types";

const CartDetail: React.FC =() => {
  const [cartDetail , setcartDetail]=useState<ProductType>();
  const location = useLocation();
  const urlvalue = new URLSearchParams(location.search);
  console.log("params" , location)
  const id = location.pathname.split('/')[2]
  console.log("id" , id);
  const {addtoWishlist, wishProducts , cartProducts , addtoCart} =useContext(DataContext);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
        console.log("id data" , response);
        setcartDetail(response.data)
    })
    
  } , [id])

  return (
    <>
    { cartDetail && <Wrapper>
     
    <CardMedia
          component="img"
          sx={{
            height: 200,
            width: 400,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          src={cartDetail?.images[0]}
        />
      <div>
      <h3>{cartDetail?.title.length > 20
                        ? cartDetail?.title.substring(0, 20)
                        : cartDetail?.title} </h3>
        <p>{cartDetail?.description.length > 50
                        ? cartDetail?.description.substring(0, 50)
                        
                        : cartDetail?.description}</p>
        <h3>${cartDetail?.price}</h3>
      </div>
      {cartProducts.includes(cartDetail) ? (
        <CustomButton>Added to Cart</CustomButton>
      ) : (
        <CustomButton
          onClick={() => {
            console.log("data in wishlist" , cartProducts)
            addtoCart(cartDetail);
          }}
        >
          Add to Cart
        </CustomButton>
      )}
        {/* <Button onClick={() => addtoWishlist(product)}>Add to wishlist</Button> */}
        {wishProducts.includes(cartDetail) ? (
        <CustomButton>Added to wishlist</CustomButton>
      ) : (
        <CustomButton
          onClick={() => {
            console.log("data in wishlist" , wishProducts)
            addtoWishlist(cartDetail);
          }}
        >
          Add to wishlist
        </CustomButton>
      )}
      
      </Wrapper> 
      
      }
    </>
  );
};

export default CartDetail;