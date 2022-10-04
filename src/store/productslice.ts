
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsModel, ProductType } from "../types";
import { productsAction } from "./productsaction";


const initailizeProductState:ProductsModel= {
    products:[],
    cartProducts:[],
    wishProducts:[]
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
            }
        }
    }
)

export const productsActions = productSlice.actions
export default productSlice.reducer