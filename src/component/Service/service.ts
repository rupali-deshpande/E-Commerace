import axios from "axios";
import { ProdAddNew, ProductType } from "../../types";
import api from "./api"

export default {  
    
    async  getAllProducts  ()  {

     await axios.get('https://dummyjson.com/products');
    //return response.data.products;
    
},

async getCartProduct ()  {
   const response = await axios.patch('https://dummyjson.com/products');
   return response.data.product;
}
}

export const getAllProductS = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      return response.data.products;
    } catch (err) {
      throw err;
    }
  };

  export const createNewProduct = async (data:ProdAddNew) => {
   
            try{
                const response = await axios.post('https://dummyjson.com/products/add' , data)
                return data;
            }
            catch(err){
                throw err;
            }
          
    
  }