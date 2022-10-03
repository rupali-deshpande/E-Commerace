import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { Wrapper } from "../component/Cart/Cart.style";
import { Grid } from "@mui/material";
import WishItem from "./wishItem";

const Wish: React.FC<{}> = () => {
  const {wishProducts ,wishProductHandler} = useContext(DataContext)

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {wishProducts?.map((el) => (
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