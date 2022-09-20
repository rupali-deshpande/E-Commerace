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

function App() {
  const [products, setProducts] = useState<ProductType[]>();
  
  useEffect(() => {
   // setLoading(true);
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data)
      console.log('MOUNT');
      //setLoading(false)
      console.log(res.data)
    })
    .catch(
      (error) => {
        console.log(error);
     }
    )
    return () => {
      console.log('UNMOUNT');
    }

  },[])

  return (
    <>
    <Header />
    <Routes>
      <Route path="/home" element={products && <Home  products={products} />}/>
      <Route path="/shop" element={products && <Product allproducts={products} /> }/>
      <Route path="/admin"  element={products && <Admin  products={products}/>}/>
      <Route  path="/Cart"  />
      <Route path="*" element={<PageNotFound />}/>
      {/* <Route path="" element={< />} /> */}
    </Routes>
    </>
  );
}

export default App;
