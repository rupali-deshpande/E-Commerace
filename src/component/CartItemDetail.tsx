import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

export const CartItem: React.FC = () => { 
        const [product, setProduct] = useState<ProductType>()
        const [itemInWishlist, setItemInWishlist] = useState(false);
        const [itemInAddToCart, setItemInCart] = useState(false);
        const location = useLocation()
        const id = location.pathname.split('/')[2]
        useEffect(() =>{
          axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
            console.log(res.data)
            setProduct(res.data)
          })
        },[])
      return (
          <>
          
          <div className='column' >
            <AiFillDelete id={product?.id}  onClick={() => {
                // CartContext.addtoCart(item);
                console.log(product)
              }}className="icon" size="2em" /> 
  
            <div className="card" key={product?.id}  >
              <img className='cat' src={product?.images} alt="Avatar" />
              {/* <h3>{product?.title.length > 20
                          ? product.title.substring(0, 20)
                          : product.title} </h3>
              <p>{product.description.length > 100
                          ? product.description.substring(0, 100)
                          
                          : product.description}</p> */}
              <p><b>{product?.price}</b></p>
             
              {/* //conditional rendering */}
              {itemInWishlist ? (
              <button >Added to wishlist</button>
            ) : (
              <button className="button3"  value={product?.id} name={product?.id} onClick={() => {
                setItemInWishlist(true);
                //addtoWishlist(product)
                
                  console.log(itemInWishlist)
                }}
              > Add to wishlist
              </button>
            )}              
           {itemInAddToCart ? (
              <button >Added to Cart</button>
            ) : (
              <button className="button3"  value={product?.id} name={product?.id} onClick={() => {
                setItemInCart(true);
               // addtoCart(product);
                
                
                  console.log(itemInAddToCart)
                }}
              > Add to Cart
              </button>
            )}              
            </div>
          </div>
        
          </>
      )
  }