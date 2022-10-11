import axios from "axios";
import React, { Children } from "react";
import { useEffect, useState } from "react";
import "../http-common";
import { ProdAddNew, ProductType } from "../types";

interface AppState {
  products: ProductType[] | undefined;
  cartProducts: ProductType[];
  wishProducts: ProductType[];
  addtoCart: (data: ProductType) => void;
  addtoWishlist: (data: ProductType) => void;
  //formFN: (data: ProductType) => void;
  isLoading: boolean;
  wishProductHandler: (data: ProductType) => void;
  addtocartProductHandler: (data: ProductType) => void;
  removehandler: (e: React.MouseEvent) => void;
}

export const DataContext = React.createContext<AppState>({
  products: [],
  cartProducts: [],
  wishProducts: [],
  addtoCart: () => {},
  addtoWishlist: () => {},
  //formFN: () => {},
  isLoading: false,
  wishProductHandler: () => {},
  addtocartProductHandler: () => {},
  removehandler: () => {},
});

export const DataProvider: React.FC<{ children: JSX.Element }> = (props) => {
  const [items, setItems] = useState<ProductType[]>();
  const [isLoading, setLoading] = useState(false);
  const [cartData, setCartData] = useState<ProductType[]>([]);
  const [wishData, setWishdata] = useState<ProductType[]>([]);
  const [addedProducts, setAddedProducts] = useState<ProdAddNew[]>([]);
  const [error, setError] = useState(null);
  const {REACT_APP_BASEURL }= process.env;
  useEffect(() => {
    //console.log("env" ,process.env.REACT_APP_BASEURL);
    setLoading(true);
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        //console.log("product data", res);
        setItems(res.data.products);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://127.0.0.1:8000/api/v1/products/CartData")
      .then((response) => {
        console.log("AddtoCart Data", response.data);
        //setCartData(response.data)
      });

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

  const addToCartHandle = (data: ProductType) => {
    // axios
    //   .post("http://127.0.0.1:8000/api/v1/products/CartData", data)
    //   .then((response) => {
    //     setCartData((prevItems) => {
    //       const newCartArray = [...prevItems, response.data];
    //       return newCartArray;
    //     });
    //   });
    setCartData((prevData) => {
      const arr = prevData?.map((event) => event);
      const obj = [...arr, data];
      localStorage.setItem("products", JSON.stringify(obj));
      return obj;
    });
  };

  const removeitem = (e: React.MouseEvent) => {
    e.preventDefault();
    setItems((prevItems) => {
      console.log(e.currentTarget.id);
      const arr = prevItems?.filter((el) => el.id != e.currentTarget.id);
      console.log(arr);
      return arr;
    });
  };
  const wishListHandler = (data: ProductType) => {
    setWishdata((prevData) => {
      const arr = prevData?.map((event) => event);
      const obj = [...arr, data];
      localStorage.setItem("WishList", JSON.stringify(obj));
      return obj;
    });
  };

  const addtoProductHandle = (data: ProductType) => {
    setCartData((prevData) => {
      const arr = prevData?.filter((el) => el !== data);
      const obj = [...arr];
      localStorage.setItem("AddToCart", JSON.stringify(obj));
      return obj;
    });
  };

  const wishProductHandle = (data: ProductType) => {
    setWishdata((prevData) => {
      const arr = prevData?.filter((el) => el !== data);
      const obj = [...arr];
      localStorage.setItem("WishProducts", JSON.stringify(obj));
      return obj;
    });
  };

  const prodAdd = (data: ProdAddNew) => {
    setAddedProducts((prevProd) => {
      const arr = [...prevProd, data];
      return arr;
    });
    console.log("form", data);
  };

  //console.log(items);
  return (
    <DataContext.Provider
      value={{
        products: items,
        cartProducts: cartData,
        wishProducts: wishData,
        addtoCart: addToCartHandle,
        addtoWishlist: wishListHandler,
        isLoading: isLoading,
       // formFN: prodAdd,
        wishProductHandler: wishProductHandle,
        addtocartProductHandler: addtoProductHandle,
        removehandler: removeitem,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
