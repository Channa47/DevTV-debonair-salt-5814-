import axios from "axios"
import * as types from "./edituseractiotype"





export const  getbanuser = ()=>(dispatch)=>{
          dispatch({type:types.BANNUSERREQUEST})
          return axios.delete("https://appletvusers.onrender.com/banned")
          .then(r=>dispatch({type:types.BANNUSERSUCCESS,payload:r.data}))
          .catch(e=>dispatch({type:types.DBANNUSERFAILURE}))
}