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

export const  App =() =>{
  // const [products, setProducts] = useState<ProductType[]>();
  
  // useEffect(() => {
  //  // setLoading(true);
  //   axios.get("https://fakestoreapi.com/products").then((res) => {
  //     setProducts(res.data)
  //     console.log('MOUNT');
  //     //setLoading(false)
  //     console.log(res.data)
  //   })
  //   .catch(
  //     (error) => {
  //       console.log(error);
  //    }
  //   )
  //   return () => {
  //     console.log('UNMOUNT');
  //   }

  // },[])
  // const newlyAddeddata = (data:ProductType) => {
  //   console.log(data)

  //   if(products){
  //   //const newArr= [...items , data]
  //   setProducts((prevalue:any) => {
  //     return([...prevalue , data])
  //   })}
    
  // }


  return (
    <>
   
    <Header />
    <DataProvider>
    <Routes>
      <Route path="/home" element={<Home />} />
      {/* <Route path="/home" element={<Home   />}/> */}
      {/* <Route path="/shop" element={products && <Product /> }/>
      <Route path="/admin"  element={products && <Admin  products={products} formFN={newlyAddeddata}/>}/> */}
      <Route  path="/Cart"  />
      <Route path="*" element={<PageNotFound />}/>
      {/* <Route path="" element={< />} /> */}
    </Routes>
    </DataProvider>
    </>

  );
}

export default App;
