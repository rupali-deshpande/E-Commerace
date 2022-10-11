


import { call, takeEvery, put, takeLatest, spawn } from "redux-saga/effects";

import  {getAllProductS}  from '../component/Service/service';
import { productsActions } from "../store/productslice";
import { newProductrootSaga } from "./addnewproductsaga";
import { sagaAction } from "./sagaaction";



 function* fetchDataSaga():any {
  try {
    const result = yield call(getAllProductS);
    yield put(productsActions.setProducts(result));
  } catch (e) {
    yield put({ type: "PRODUCT_FETCH_FAILED" });
  }
}


//watcher
export  function* rootSaga() {
    yield spawn(newProductrootSaga)
  yield spawn( fetchDataSaga );
}


 
