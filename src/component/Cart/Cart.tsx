import { Button, CardMedia, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../UI/button";
import DeleteIcon from "@mui/icons-material/Delete";
import "../Cart/Cart.style";
import { Wrapper } from "../Cart/Cart.style";
import { ProductsModel, ProductType } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks/react-hook";
import { useSelector } from "react-redux";
import { productsActions } from "../../store/productslice";

export const Cart: React.FC<{
  product: ProductType;
}> = ({ product }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentCart = useSelector((state: ProductsModel) => state.cartProducts);
  const currentWishData = useSelector(
    (state: ProductsModel) => state.wishProducts
  );
 // console.log("", currentCart);
  // const clickhandler =() =>  {
  //   navigate(`/CartDetail/${id}`)
  // }
  return (
    <>
      <Wrapper>
        <div
          onClick={() => {
            navigate(`/product/${product.id}`);
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
            <DeleteIcon />
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
          {currentCart.includes(product) ? (
            <CustomButton>Added to Cart</CustomButton>
          ) : (
            <CustomButton
              onClick={() => {
                const obj = [...currentCart, product];
                dispatch(productsActions.setCartProduct(obj));
                localStorage.setItem("CartProducts", JSON.stringify(obj));
                console.log("Data in Cart", obj);
              }}
            >
              Add to Cart
            </CustomButton>
          )}

          {currentWishData.includes(product) ? (
            <CustomButton>Added to wishlist</CustomButton>
          ) : (
            <CustomButton
              onClick={() => {
                const obj = [...currentWishData, product];
                dispatch(productsActions.setWishProduct(obj));
                localStorage.setItem("WishProducts", JSON.stringify(obj));
                console.log("Data in Cart", obj);
              }}
            >
              Add to wishlist
            </CustomButton>
          )}
        </div>
      </Wrapper>
    </>
  );
};
