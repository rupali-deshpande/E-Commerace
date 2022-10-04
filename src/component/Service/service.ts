import axios from "axios";
import { ProductType } from "../../types";
import api from "./api"

export const getAllProducts =async () => {

    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
    
}

export const getCartProduct = async () => {
   const response = await axios.patch('https://dummyjson.com/products');
   return response.data.product;
}
