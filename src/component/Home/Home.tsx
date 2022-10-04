import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { ErrorFallback } from "../../ErrorFallback";
import { Cart } from "../Cart/Cart";
import "../../App.style";
import { Wrapper } from "../Cart/Cart.style";
import { Button, Grid } from "@mui/material";
//import { fetchProducts } from "../../store/productsaction";
import { useAppDispatch } from "../../hooks/react-hook";
import { productsActions } from "../../store/productslice";
import { getAllProducts } from "../Service/service";
import { useSelector } from "react-redux";
import { ProductsModel, ProductType } from "../../types";

export const Home: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: ProductsModel) => state);
  const cartProduct = useSelector((state: ProductsModel) => state.cartProducts);
  const wishProduct = useSelector((state: ProductsModel) => state.wishProducts);
  console.log("state", cartProduct);

  let navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/admin`);
  };
  useEffect(() => {
    getAllProducts().then((response) => {
      console.log("redux", response);
      dispatch(productsActions.setProducts(response));
      const localCartData = localStorage.getItem("CartProducts" );
      const localWishData = localStorage.getItem("WishProducts");
      if (localCartData) {
        const cartData = JSON.parse(localStorage.getItem("CartProducts") || "");

        dispatch(productsActions.setCartProduct(cartData));
      } else {
        localStorage.setItem("CartProducts", JSON.stringify(cartProduct) || "");
      }
      if (localWishData) {
        const wishData = JSON.parse(localStorage.getItem("WishProducts") || "");
        dispatch(productsActions.setWishProduct(wishData));
      } else {
        localStorage.setItem("WishProducts", JSON.stringify(wishProduct) || "");
      }
    });
  }, []);

  return (
    <Wrapper>
      <Button onClick={handleOnClick}>Add New Shop Data</Button>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 3, sm: 8, md: 12 }}
      >
        { 
          state.products.map((item) => {
            return (
              <Grid item key={item.id} xs={2} sm={4} md={4}>
                {" "}
                <Cart key={Math.random().toString()} product={item} />
              </Grid>
            );
          })}
      </Grid>
    </Wrapper>
  );
};
