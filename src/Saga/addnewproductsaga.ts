import { call, put, take, takeEvery } from "redux-saga/effects";
import { createNewProduct, getAllProductS } from "../component/Service/service";
import { productsActions } from "../store/productslice";
import { ProdAddNew } from "../types";
import { NEWLY_ADD_DATA, sagaAction } from "./sagaaction";

function* newProductSaga(action:any):any{
    console.log("Form Data" , action)
    try{
        const result= yield call(createNewProduct, action.payload);
        console.log("form data result" , result)
        const data = yield call(getAllProductS)
        const newarry=[...data, result]
        yield put(productsActions.setProducts(newarry))

    }catch(e){
        yield put({type:'NEW_PRODUCT_FAILED'})
    }
}

export  function* newProductrootSaga() {
    console.log("data in newProductrootSaga")
    yield takeEvery(NEWLY_ADD_DATA, newProductSaga );
  }
