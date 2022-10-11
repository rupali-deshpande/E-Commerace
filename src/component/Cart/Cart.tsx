import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../UI/button";
import DeleteIcon from "@mui/icons-material/Delete";
import "../Cart/Cart.style";
import { Wrapper } from "../Cart/Cart.style";
import { ProductsModel, ProductType } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks/react-hook";
import { useSelector } from "react-redux";
import { productsActions } from "../../store/productslice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
      <Grid key={product.id}>
        <Card sx={{ maxWidth: 300 }}>
        <Box  onClick={() => {
            navigate(`/product/${product.id}`);
          }}  sx={{ cursor: "pointer" }}>
          <CardMedia component="img" src={product.images[0]} 
          sx={{ height: 200, objectFit: "contain" }}></CardMedia>
          <CardContent>
            <Typography variant="h6">
            {product.title.length > 20
                ? product.title.substring(0, 20)
                : product.title}{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {product.description.length > 100
                        ? product.description.substring(0, 100)
                        
                        :product.description}
              </Typography>
              <Typography mt={2} variant="h6" color="secondary">
                ${product.price}
              </Typography>
          </CardContent>
        </Box>
        <CardActions>
         
            <Button
            startIcon={
              currentCart.includes(product) ?
                (
                  <FavoriteIcon />
               ) : (
                  <FavoriteBorderIcon />
               )
            }
            size="small"
            color="secondary"
            onClick={() => {
                const obj = [...currentCart, product];
                dispatch(productsActions.setCartProduct(obj));
                localStorage.setItem("CartProducts", JSON.stringify(obj));
                console.log("Data in Cart", obj);
              }}
         />

         <Button />
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
{/* <Wrapper>
        <div
          onClick={() => {
            navigate(`/product/${product.id}`);
          }}
        >
          <CardMedia
            component="img"
            src={product.images[0]}
            sx={{ height: 200, objectFit: "contain" }}
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
      </Wrapper> */}