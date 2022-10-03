import { CardMedia } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { ProductType } from "../../types";
import CustomButton from "../../UI/button";
import { Wrapper } from "../Cart/Cart.style";


const AddtoCart: React.FC<{
    product: ProductType;
    
  }> = ({ product }) => {
const{addtocartProductHandler}=useContext(DataContext)


return (
    <>
    { product && <Wrapper>
    <CardMedia
          component="img"
          sx={{
            height: 200,
            width: 400,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          src={product?.images[0]}
        />
      <div>
      <h3>{product?.title.length > 20
                        ? product?.title.substring(0, 20)
                        : product?.title} </h3>
        <p>{product?.description.length > 50
                        ? product?.description.substring(0, 50)
                        
                        : product?.description}</p>
        <h3>${product?.price}</h3>
      </div>
      <div className="buttons">
          <CustomButton
            onClick={() => {
             
                addtocartProductHandler(product);
            }}
          >
            Remove From Cart
          </CustomButton>
          </div>
      </Wrapper>}
    </>
  );
};

export default AddtoCart;