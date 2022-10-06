import { call, put, takeEvery } from "redux-saga/effects";
import { getAllProductS } from "../component/Service/service";
import { productsActions } from "../store/productslice";
import { newproductsagaAction, sagaAction } from "./sagaaction";

function* newProductSaga():any {
    try{
        const result= yield call(getAllProductS);
        yield put(productsActions.setCartProduct(result))
    }catch(e){
        yield put({type:'NEW_PRODUCT_FAILED'})
    }
}

export  function* newProductrootSaga() {
    yield takeEvery(newproductsagaAction.NEWLY_ADD_DATA, newProductSaga );
  }
