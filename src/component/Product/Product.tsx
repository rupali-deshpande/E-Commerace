import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { AiFillDelete } from 'react-icons/ai'
import '../Product/Product.css'

interface Iprops {
    allproducts: ProductType[];
   
  }

export function Product({allproducts }:Iprops) {
    const [items, setitems] = useState<ProductType[]>(allproducts);
    const [addtoCart, setProducttoCart] = useState<ProductType[]>([]);
    const [wishlist, setWishlist] = useState<ProductType[]>([]);
    const [removecart, setRemoveCart] = useState<ProductType[]>([]);


    const changeItems = (id: string) => {
        //id.preventDefault();
        setitems((prevItems) => {
          console.log("id" , id)
          return prevItems.filter((el) => el.id != id);
        });
        console.log(id)
      };

    const wishListHandle = (data: ProductType) => {
        setWishlist((prevData) => {
          const arr = prevData?.map((event) => event);
          const obj = [...arr, data];
          localStorage.setItem("WishList", JSON.stringify(obj));
          return obj;
         
        }
       
        );
        console.log(data)
      };
      const addToCartHandle = (data: ProductType) => {
        setProducttoCart((prevData) => {
          const arr = prevData?.map((event) => event);
          const obj = [...arr, data];
          localStorage.setItem("AddToCart", JSON.stringify(obj));
          return obj;
         
        }
       
        );
        console.log(data)
      };



    return(
        <>
       {items && items.map((item) => {
        return <Cart key={Math.random().toString()}  products={items} itemDeleteHandler={changeItems}
         handleAddToCart={addToCartHandle} handleWishList={wishListHandle}  />
      })}
       
        </>
    )
}


// {items.map((item: ProductType) => (
//     <div className='column'>
//       <AiFillDelete  values={item.id} className="icon" size="2em" /> 

//       <div className="card" key={item.id}  >
//         <img className='cat' src={item.images} alt="Avatar" />
//         <h3>{item.title.length > 20
//                     ? item.title.substring(0, 20)
//                     : item.title} </h3>
//         <p>{item.description.length > 100
//                     ? item.description.substring(0, 100)
                    
//                     : item.description}</p>
//         <p><b>{item.price}</b></p>
       
//         {/* //conditional rendering */}
//         <button className="button3" value={item.id} name={item.id}  > 'Add to Wishlist'</button>
//         <button className="button3" value={item.id} name={item.id} >'Add to Cart'</button>
//       </div>
//     </div>
//   ))}