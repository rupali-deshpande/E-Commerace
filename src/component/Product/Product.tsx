import { useContext, useState } from "react";
import { Cart } from "../Cart/Cart";
import { AiFillDelete } from 'react-icons/ai'
import '../Product/Product.css'
import { DataContext } from "../../context/DataProvider";

interface Iprops {
    allproducts: ProductType[];
   
  }


export function Product() {
   // const [items, setitems] = useState<ProductType[]>(allproducts);
    const [addtoCart, setProducttoCart] = useState<ProductType[]>([]);
    const [wishlist, setWishlist] = useState<ProductType[]>([]);
    const [removecart, setRemoveCart] = useState<ProductType[]>([]);
    const CartContext =useContext(DataContext);
    
    // const changeItems = (id: string) => {
    //     //id.preventDefault();
    //     setitems((prevItems) => {
    //       console.log("id" , id)
    //       return prevItems.filter((el) => el.id != id);
    //     });
    //     console.log(id)
    //   };

    // const wishListHandle = (data: ProductType) => {
    //     setWishlist((prevData) => {
    //       const arr = prevData?.map((event) => event);
    //       const obj = [...arr, data];
    //       localStorage.setItem("WishList", JSON.stringify(obj));
    //       return obj;
         
    //     }
       
    //     );
    //     console.log(data)
    //   };
    //   const addToCartHandle = (data: ProductType) => {
    //     setProducttoCart((prevData) => {
    //       const arr = prevData?.map((event) => event);
    //       const obj = [...arr, data];
    //       localStorage.setItem("AddToCart", JSON.stringify(obj));
    //       return obj;
         
    //     }
       
    //     );
    //     console.log(data)
    //   };
      

    return(
        <>
       {/* {CartContext.product && CartContext.product.map((item) => {
        return <Cart key={Math.random().toString()}  products={CartContext.product}  />
      })} */}
       
        </>
    )
}

