
import { useContext, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import '../Product/Product.css'

 export const Cart: React.FC<{
  product: ProductType; 
  }> = ({ product }) => { 
    const [itemInWishlist, setItemInWishlist] = useState(false);
    const [itemInAddToCart, setItemAddToCart] = useState(false);
    const {addtoCart , addtoWishlist} =useContext(DataContext);
    const navigate = useNavigate();
    return (
        <>
        
        <div className='column'  onClick={() => navigate(`/shop/${product.id}`)}>
          <AiFillDelete id={product.id}  onClick={ () => {
              // CartContext.addtoCart(item);
              console.log(product)
            }}className="icon" size="2em" /> 

          <div className="card" key={product.id}  >
            <img className='cat' src={product.images} alt="Avatar" />
            <h3>{product.title.length > 20
                        ? product.title.substring(0, 20)
                        : product.title} </h3>
            <p>{product.description.length > 100
                        ? product.description.substring(0, 100)
                        
                        : product.description}</p>
            <p><b>{product.price}</b></p>
           
            {/* //conditional rendering */}
            {itemInWishlist ? (
            <button >Added to wishlist</button>
          ) : (
            <button className="button3"  value={product.id} name={product.id} onClick={() => {
              setItemInWishlist(true);
              addtoWishlist(product)
              
                console.log(itemInWishlist)
              }}
            > Add to wishlist
            </button>
          )}              
         {itemInAddToCart ? (
            <button >Added to Cart</button>
          ) : (
            <button className="button3"  value={product.id} name={product.id} onClick={() => {
              setItemAddToCart(true);
              addtoCart(product);
              
              
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