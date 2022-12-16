import axios from "axios"
import * as types from "./edituseractiotype"





export const  getdeleteuser = (param)=>(dispatch)=>{
          dispatch({type:types.DELETEUSERREQUEST})
          return axios.delete("https://appletvusers.onrender.com/users",param)
          .then(r=>dispatch({type:types.DELETEUSERSUCCESS}))
          .catch(e=>dispatch({type:types.DELETEUSERFAILURE}))
}