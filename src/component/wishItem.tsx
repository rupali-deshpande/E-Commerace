
import { CardMedia } from '@mui/material';
import {useContext} from 'react'
import { Wrapper } from '../App.style';

import { DataContext } from "../context/DataProvider";
import { ProductType } from '../types';
import CustomButton from '../UI/button';

const WishItem: React.FC<{
  item: ProductType;
  
}> = ({ item }) => {
  const {wishProductHandler} = useContext(DataContext)
  return (
    <Wrapper>
      
     
    <CardMedia
          component="img"
          sx={{
            height: 200,
            width: 400,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          src={item?.images[0]}
        />
      <div>
      <h3>{item?.title.length > 20
                        ? item?.title.substring(0, 20)
                        : item?.title} </h3>
        <p>{item?.description.length > 50
                        ? item?.description.substring(0, 50)
                        
                        : item?.description}</p>
        <h3>${item?.price}</h3>
      </div>
     
        <div className="buttons">
          <CustomButton
            onClick={() => {
             
                wishProductHandler(item);
            }}
          >
            Remove From WishList
          </CustomButton>
          </div>
          
    </Wrapper>
  );
};
export default WishItem;