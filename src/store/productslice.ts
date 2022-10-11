
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsModel, ProductType } from "../types";
import { productsAction } from "./productsaction";


const initailizeProductState:ProductsModel= {
    products:[],
    cartProducts:[],
    wishProducts:[],
    newproduct: {
        Title:"",
        images:"",
        description:"",
        price: 0 
    }
}

const productSlice=createSlice(
    {
        name:'products',
        initialState:initailizeProductState,
        reducers: {
            setProducts(state, action){
                state.products=action.payload;
            },
            setCartProduct(state , action){
                state.cartProducts=action.payload
            },
            setWishProduct(state , action){
                state.wishProducts=action.payload
            },
            addproduct(state,action){
                state.newproduct=action.payload
            }
        }
    }
)

export const productsActions = productSlice.actions
export default productSlice.reducer