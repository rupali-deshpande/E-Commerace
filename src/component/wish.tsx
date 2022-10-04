import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { Wrapper } from "../component/Cart/Cart.style";
import { Grid } from "@mui/material";
import WishItem from "./wishItem";
import { useSelector } from "react-redux";
import { ProductsModel } from "../types";

const Wish: React.FC<{}> = () => {
  //const {wishProducts ,wishProductHandler} = useContext(DataContext)
  const currentWishData= useSelector((state:ProductsModel) =>state.wishProducts)

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {currentWishData?.map((el) => (
          <Grid item key={el.id} xs={12} sm={4}>
            <WishItem
              item={el}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
export default Wish;