import { useContext } from "react";

import { Grid } from "@mui/material";
import { DataContext } from "../../context/DataProvider";
import { Wrapper } from "../Cart/Cart.style";
import AddtoCart from "./AddtoCart";


const AddCart: React.FC<{}> = () => {
  const {cartProducts} = useContext(DataContext);

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {cartProducts?.map((el) => (
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