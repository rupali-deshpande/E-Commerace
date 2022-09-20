
import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import {MdAddShoppingCart} from 'react-icons/md'
import {AiFillHeart} from 'react-icons/ai'

// type Props = {
//   cartCount: number
// }
///function Header({cartCount}:Props)
interface productProp {
  wishlist: ProductType[];
  cart: ProductType[];
}
function Header() {
  

  return (
    <nav className="navbar">
      <div className="logo">Shopify</div>
      <ul className="nav-links">

        <div className="menu">
          <li><Link to="/home"  >Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
         
          <li><Link to="/Cart">Cart</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><button ><Link to="/CartItem"><MdAddShoppingCart /></Link>
            </button></li>
            <li><button><Link to="/wishList"><AiFillHeart /></Link>
            </button></li>
        </div>
      </ul>

      
    </nav>

  );
}
export default Header

