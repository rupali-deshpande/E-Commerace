import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import { Route, Routes  } from "react-router-dom";
import { Home } from "./component/Home/Home";
import axios from "axios";
import { Product } from "./component/Product/Product";
import { Admin } from "./component/Admin/Admin";
import { PageNotFound } from "./Pages/PageNotFound";
import { DataProvider } from "./context/DataProvider";
import CartDetail from "./component/CartDetail";
import { CartItem } from "./component/CartItemDetail";
import { AddToCartForm } from "./component/AddToCartForm";
import Wish from "./component/wish";
import AddCart from "./component/AddToCart/AddCart";
import HeaderNav from "./component/Navbar";

// import { Switch } from "react-router-dom";


export const App = () => {
  return (
    <>
     <HeaderNav />
      <DataProvider>
      
        <Routes>
      
        
        <Route path="/home" element={<Home />} />
          
          <Route path="/product" >
          <Route path="/product/:id" element={<CartDetail />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/admin" element={<AddToCartForm />} />
          <Route  path="/admi" element={<Admin />} />
          <Route path="/WishList" element={<Wish />} />
          <Route path="/AddToCartList" element={<AddCart />} />
      
        </Routes>
        
      </DataProvider>
    </>
  );
};

export default App;
