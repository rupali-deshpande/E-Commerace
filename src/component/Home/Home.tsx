import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../Product/Product";

interface Iprops {
    products: ProductType[];
    //wishDataHandler:ProductType[]
  }
export function Home({products}:Iprops) {
  let navigate = useNavigate();
    const [items, setitems] = useState<ProductType[]>(products);
    const [product, setProduct] = useState<ProductType>();
    const [wishlist, setWishlist] = useState<ProductType[]>();
    const [cart, setCart] = useState<ProductType[]>([]);
    
    const handleOnClick = () => {
      navigate(`/admin`);
      
   };

    return(
        <>
        <button onClick={handleOnClick}>Add New Shop Data</button>
        {items && items.map((item) => {
        return <Product key={Math.random().toString()}  allproducts={items}   />
      })}
        </>
    )
}