
import { CardMedia } from '@mui/material';
import {useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from '../App.style';

import { DataContext } from "../context/DataProvider";
import { productsAction } from '../store/productsaction';
import { productsActions } from '../store/productslice';
import { ProductsModel, ProductType } from '../types';
import CustomButton from '../UI/button';

const WishItem: React.FC<{
  item: ProductType;
  
}> = ({ item }) => {
  const wishProduct = useSelector((state: ProductsModel) => state.wishProducts);
  const dispatch = useDispatch()
  //const {wishProductHandler} = useContext(DataContext)
  const removeHandler=(item:ProductType) => {
    const array = wishProduct.filter((element:ProductType) => {
      return element.id !== item.id
    }
    )
    dispatch(productsActions.setWishProduct(array))
  }
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
             removeHandler(item)
                //wishProductHandler(item);
            }}
          >
            Remove From WishList
          </CustomButton>
          </div>
          
    </Wrapper>
  );
};
export default WishItem;