import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { RootState } from ".";

import service from "../component/Service/service";
import { ProductType } from "../types";
import productSlice, { productsActions } from "./productslice";


export const productsAction= productSlice;

export const fetchProducts=() : ThunkAction<void,RootState,unknown,AnyAction >=> {
    return async(dispatch,getAllProducts)=>{
        if(getAllProducts().products.length==0){
            const response = await service.getAllProducts()
            dispatch(productsActions.setProducts(response))
        }
    }
}
