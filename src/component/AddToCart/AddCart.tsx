import { useContext } from "react";

import { Grid } from "@mui/material";
import { DataContext } from "../../context/DataProvider";
import { Wrapper } from "../Cart/Cart.style";
import AddtoCart from "./AddtoCart";
import { ProductsModel } from "../../types";
import { useSelector } from "react-redux";


const AddCart: React.FC<{}> = () => {
  //const {cartProducts} = useContext(DataContext);
  const cartProduct = useSelector((state: ProductsModel) => state.cartProducts);


  return (
    <Wrapper>
      <Grid container spacing={3}>
        {cartProduct?.map((el) => (
          <Grid item key={el.id} xs={12} sm={4}>
            <AddtoCart
              product={el}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
export default AddCart;