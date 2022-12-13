
import { legacy_createStore,applyMiddleware,combineReducers } from "redux"

import { reducer } from "./signup/signupreducer"
import { Loginreducer } from "./Login/loginreducer"
import thunk from "redux-thunk"


const rootReducer = combineReducers(reducer,Loginreducer)
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
console.log(store)