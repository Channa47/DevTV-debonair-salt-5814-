import axios from "axios"

import * as types from "./loginactiontype"






  export const logindata = (data)=>(dispatch)=>{

          dispatch({type:types.GETLOGINDATAREQUEST})
       
    }
   


