import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "../Saga/rootsaga";
import productReducer from "./productslice";

const sagaMiddleware = createSagaMiddleware();

const store=configureStore(    {
        reducer: productReducer,
        middleware:[...getDefaultMiddleware(), sagaMiddleware]
    }
)

sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch
export default store;