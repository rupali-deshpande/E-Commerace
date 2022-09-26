import axios from "axios";
import { useState } from "react";

export default axios.create({
  baseURL: "https://www.fakeshop-api.com/",
  headers: {
    "Content-type": "application/json"
  }
});

export function Service () {
    const[products , getProduct]=useState('')

    const getAllProduct = () => {
        axios.get("https://www.fakeshop-api.com/")
        .then((response) => {
            const gettheproducts = response.data.products.gettheproducts;
        }).catch((error) => {
            console.log(error)
        })

    }
    

}