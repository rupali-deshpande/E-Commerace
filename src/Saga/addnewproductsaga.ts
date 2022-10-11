import { call, put, take, takeEvery } from "redux-saga/effects";
import { createNewProduct, getAllProductS } from "../component/Service/service";
import { productsActions } from "../store/productslice";
import { ProdAddNew } from "../types";
import { newproductsagaAction, sagaAction } from "./sagaaction";

function* newProductSaga(payload:any):any {
    
    try{
        console.log("form data ",  payload)
        const fun = yield createNewProduct(payload)
        const result= yield call(fun);
        yield put(productsActions.setCartProduct(result.data))
    }catch(e){
        yield put({type:'NEW_PRODUCT_FAILED'})
    }
}

export  function* newProductrootSaga() {
    console.log("data in newProductrootSaga")
    yield takeEvery(newproductsagaAction.NEWLY_ADD_DATA, newProductSaga );
  }
