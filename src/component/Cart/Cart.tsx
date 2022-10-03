import { Button, CardMedia, IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import CustomButton from "../../UI/button";
import DeleteIcon from "@mui/icons-material/Delete";
import "../Cart/Cart.style";
import { Wrapper } from "../Cart/Cart.style";
import { ProductType } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks/react-hook";

export const Cart: React.FC<{
  product: ProductType;
}> = ({ product }) => {
  const [itemInWishlist, setItemInWishlist] = useState(false);
  const [itemInAddToCart, setItemAddToCart] = useState(false);

  const {addtoWishlist, wishProducts , removehandler,cartProducts , addtoCart} =useContext(DataContext);
  const navigate = useNavigate();
  
  // const clickhandler =() =>  {
  //   navigate(`/CartDetail/${id}`)
  // }
 
  return (
    <>
      <Wrapper>
        <div
          onClick={() => {
            navigate(`/Shop/${product.id}`);
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: 200,
              width: 400,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            
            src={product.images[0]}
          />
          <IconButton
        aria-label="delete" 
        // id={`${product.id}`}
        // onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
        //   removehandler(e);
        // }}
      >
        <DeleteIcon/>
        </IconButton>
          <div>
            <h3>
              {product.title.length > 20
                ? product.title.substring(0, 20)
                : product.title}{" "}
            </h3>
            <p>
              {product.description.length > 50
                ? product.description.substring(0, 50)
                : product.description}
            </p>
            <h3>${product.price}</h3>
          </div>
        </div>
        <div>
       
        
          
        {cartProducts.includes(product) ? (
        <CustomButton>Added to Cart</CustomButton>
      ) : (
        <CustomButton
          // onClick={() => {
          //   console.log("data in wishlist" , cartProducts)
          //   addtoCart(product);
          // }}
        >
          Add to Cart
        </CustomButton>
      )}
        {/* <Button onClick={() => addtoWishlist(product)}>Add to wishlist</Button> */}
        {wishProducts.includes(product) ? (
        <CustomButton>Added to wishlist</CustomButton>
      ) : (
        <CustomButton
          // onClick={() => {
          //   console.log("data in wishlist" , wishProducts)
          //   addtoWishlist(product);
          // }}
        >
          Add to wishlist
        </CustomButton>
      )}
       
      </div>
      </Wrapper>
    </>
  );
};
