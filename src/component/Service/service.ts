import axios from "axios";
import { ProductType } from "../../types";
import api from "./api"

export const getAllProducts =async () => {

    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products
    
}
