
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'

interface Iprops {
    products: ProductType[];
    handleAddToCart: (clickedItem: ProductType) => void;
    itemDeleteHandler: (e: string) => void;
    handleWishList:(clickedItem: ProductType) => void;
   // wishDataHandler:  ProductType ;
    
  }
export function Cart({products , handleAddToCart , itemDeleteHandler ,handleWishList}:Iprops) {
    const [itemInWishlist, setItemInWishlist] = useState(false);
    const [itemInAddToCart, setItemAddToCart] = useState(false);

    return (
        <>
        {products.map((item: ProductType) => (
        <div className='column'>
          <AiFillDelete    id={item.id}  onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
              itemDeleteHandler(e.currentTarget.id);
              console.log(e.currentTarget.id)
            }}className="icon" size="2em" /> 

          <div className="card" key={item.id}  >
            <img className='cat' src={item.images} alt="Avatar" />
            <h3>{item.title.length > 20
                        ? item.title.substring(0, 20)
                        : item.title} </h3>
            <p>{item.description.length > 100
                        ? item.description.substring(0, 100)
                        
                        : item.description}</p>
            <p><b>{item.price}</b></p>
           
            {/* //conditional rendering */}
            {itemInWishlist ? (
            <button >Added to wishlist</button>
          ) : (
            <button className="button3"  value={item.id} name={item.id} onClick={() => {
              setItemInWishlist(true);
              handleWishList(item);
              
                console.log(itemInWishlist)
              }}
            > Add to wishlist
            </button>
          )}              
         {itemInAddToCart ? (
            <button >Add to Cart</button>
          ) : (
            <button className="button3"  value={item.id} name={item.id} onClick={() => {
              setItemAddToCart(true);
              handleAddToCart(item);
              
                console.log(itemInWishlist)
              }}
            > Add to Cart
            </button>
          )}              
          </div>
        </div>
      ))}
        </>
    )
}