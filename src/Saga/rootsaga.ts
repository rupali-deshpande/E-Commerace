


import { call, takeEvery, put, takeLatest } from "redux-saga/effects";

import  {getAllProductS}  from '../component/Service/service';
import { productsActions } from "../store/productslice";
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
  yield takeEvery(sagaAction.FETCH_DATA, fetchDataSaga );
}


 
