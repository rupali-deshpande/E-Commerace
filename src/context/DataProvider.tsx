import axios from "axios";
import React, { Children } from "react";
import { useEffect, useState } from "react";
import '../http-common';

interface AppState {
  products: ProductType[] | undefined;
  cartProducts: ProductType[];
  wishProducts: ProductType[];
  addtoCart:(data:ProductType) => void;
  addtoWishlist:(data:ProductType)=>void;
  isLoading: boolean
  
  }
  interface Props {
    children: React.ReactNode;
  }
  export const DataContext = React.createContext<AppState>({
    products: [],
    cartProducts: [],
    wishProducts: [],
    addtoCart: () => {},
    addtoWishlist:() => {},
    isLoading:false
    
  })

export const DataProvider: React.FC<({children:JSX.Element})> = (props)=> {
  const [items, setItems] = useState<ProductType[]>();
  const[isLoading , setLoading]=useState(false)
  const [cartData, setCartData] = useState<ProductType[]>([]);
  const [wishData, setWishdata] = useState<ProductType[]>([]);
  const [addedProducts, setAddedProducts] = useState<ProdAddNew[]>([]);
  const [error, setError] = useState(null);
  const { REACT_APP_BASEURL } = process.env;
  useEffect(() => {

    setLoading(true)
    
    // axios({
    //     method: 'GET',
    //     baseURL: 'http://api.fakeshop-api.com',
    //     url: '/products/getAllProducts',
    //   })
    //     .then((data ) => {
    //       setItems(data.data.products) 
    //     })
    //     .catch(err => console.dir(err))
    //     .finally(() => setLoading(false))
    
     axios.get(REACT_APP_BASEURL).then((res) => {
      setItems(res.data.products);
       setLoading(false);
    
     })
    
     .catch(
       (error) => {
         console.log(error);
      }
     )
    getAllProduct();
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
   setLoading(false);
 }, []);
 const getAllProduct = () => {
  axios.get("https://www.fakeshop-api.com/products/getAllProducts")
  .then((response) => {
      const gettheproducts = response.data.items.gettheproducts;
  }).catch((error) => {
      console.log(error)
  })

}

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
    addtoWishlist:wishListHandle,
    isLoading:isLoading

    
  }} >{props.children}</DataContext.Provider>
  )

}


