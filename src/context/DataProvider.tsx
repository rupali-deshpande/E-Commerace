import axios from "axios";
import React, { Children } from "react";
import { useEffect, useState } from "react";

interface AppState {
  products: ProductType[] | undefined;
  cartProducts: ProductType[];
  wishProducts: ProductType[];
  addtoCart:(data:ProductType) => void;
  addtoWishlist:(data:ProductType)=>void
  
  }
  interface Props {
    children: React.ReactNode;
  }
  export const DataContext = React.createContext<AppState>({
    products: [],
    cartProducts: [],
    wishProducts: [],
    addtoCart: () => {},
    addtoWishlist:() => {}
    
  })

export const DataProvider: React.FC<({children:JSX.Element})> = (props)=> {
  const [items, setProducts] = useState<ProductType[]>();
  const [cartData, setCartData] = useState<ProductType[]>([]);
  const [wishData, setWishdata] = useState<ProductType[]>([]);
  const [addedProducts, setAddedProducts] = useState<ProdAddNew[]>([]);
  useEffect(() => {
    // setLoading(true);
     axios.get("https://dummyjson.com/products").then((res) => {
       setProducts(res.data.products);
     })
     .catch(
       (error) => {
         console.log(error);
      }
     )
    
   
   const cartdata: string = localStorage.getItem("products")!;

   if (cartdata) {
     setCartData(JSON.parse(localStorage.getItem("products")!));
   } else {
     setCartData([]);
   }
   const wishdata: string = localStorage.getItem("WishProducts")!;

   if (wishdata) {
     setWishdata(JSON.parse(localStorage.getItem("WishProducts")!));
   } else {
     setWishdata([]);
   }
   

 }, []);
 

 const addToCartHandle = (data: ProductType) => {
  setCartData((prevData) => {
        const arr = prevData?.map((event) => event);
        const obj = [...arr, data];
        localStorage.setItem("AddToCart", JSON.stringify(obj));
        return obj;
       
      })
    }
    const wishListHandle = (data: ProductType) => {
      setWishdata((prevData) => {
            const arr = prevData?.map((event) => event);
            const obj = [...arr, data];
            localStorage.setItem("WishList", JSON.stringify(obj));
            return obj;
           
          })}
const prodAdd = (data: ProdAddNew) => {
  setAddedProducts((prevProd) => {
    const arr = [...prevProd, data];
    return arr;
  });
};
  
  console.log(items)
  return(
   <DataContext.Provider 
   value={{
    products: items,
    cartProducts: cartData,
    wishProducts: wishData,
    addtoCart:addToCartHandle,
    addtoWishlist:wishListHandle

    
  }} >{props.children}</DataContext.Provider>
  )

}


