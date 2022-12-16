
import { legacy_createStore,applyMiddleware,combineReducers } from "redux"

import { getSignupreducer } from "./getsignup/getsignupreducer"
import { Loginreducer } from "./Login/loginreducer"
import { Signupreducer } from "../signup/signupreducer"
import {adminreducer} from "./admin/adminreducer"
import { editreducer } from "./admin/edituserreducer"
import thunk from "redux-thunk"


const rootReducer = combineReducers({getSignupreducer,Loginreducer,Signupreducer,adminreducer,editreducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
