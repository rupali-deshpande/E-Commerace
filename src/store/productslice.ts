import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsModel, ProductType } from "../types";
import { productsAction } from "./productsaction";


const initailizeProductState:ProductsModel= {
    products:[]
}

const productSlice=createSlice(
    {
        name:'products',
        initialState:initailizeProductState,
        reducers: {
            setProducts(state, action){
                state.products=action.payload;
            }
        }
    }
)

export const productsActions = productSlice.actions
export default productSlice.reducer