import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Product } from "../Product/Product";


interface Iprops {
    products: ProductType[];
    
  }
export function Admin({products}:Iprops) {
    const [items, setitems] = useState<ProductType[]>(products);
    const location= useLocation()
    const urlvalue=  new URLSearchParams(location.search);
    const value=urlvalue.get('q' )||'React Test';

    return (
      
       
      <form action="/">
        <div className="title">
          <i className="fas fa-pencil-alt"></i> 
          <h2>Register here</h2>
        </div>
        <div className="info">
        <input className="fname" type="text" name="name" disabled placeholder="Full name" defaultValue={value} />
          <input className="fname" type="text" name="name" placeholder="Full name" />
          <input type="text" name="name" placeholder="Email"/>
          <input type="text" name="name" placeholder="Phone number" />
          <input type="password" name="name" placeholder="Password"/>
        </div>
        <div className="checkbox">
          <input type="checkbox" name="checkbox" />
          <span>I agree to the <a >
            Privacy Poalicy for W3Docs.</a></span>
        </div>
        <button type="submit" >Submit</button>
      
    </form>
    
       
    )
}