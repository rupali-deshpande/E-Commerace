
import { fork } from "redux-saga/effects"
import { newProductrootSaga } from "./addnewproductsaga"
import { rootSaga } from "./rootsaga"


export  function* mainrootSaga(){
    yield fork( newProductrootSaga)
} 