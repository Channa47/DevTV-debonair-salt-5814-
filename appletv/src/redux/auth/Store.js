
import { legacy_createStore,applyMiddleware,combineReducers } from "redux"

import { signupreducer } from "./signup/signupreducer"
import { Loginreducer } from "./Login/loginreducer"
import thunk from "redux-thunk"


const rootReducer = combineReducers({signupreducer,Loginreducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
console.log(store)