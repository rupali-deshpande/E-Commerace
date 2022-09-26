import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './component/Home/Home';
import axios from 'axios';
import { Product } from './component/Product/Product';
import { Admin } from './component/Admin/Admin';
import { PageNotFound } from './Pages/PageNotFound';
import { DataProvider } from './context/DataProvider';
import CartDetail from './component/CartDetail';
import { CartItem } from './component/CartItemDetail';

export const  App =() =>{
  return (
    <>
   
    <Header />
    <DataProvider>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route  path="/Cart"  />
      <Route path="*" element={<PageNotFound />}/>
      <Route 
           path="/Shop/:id"
          element={<CartItem/>}
        />
    </Routes>

    </DataProvider>
    </>

  );
}

export default App;
