import * as types from "./signupactiontype"
import axios from "axios"





export const postDatasignup =(params)=> (dispatch)=>{
    dispatch({type:types.POSTDATAREQUEST})
    return axios.post("https://appletvusers.onrender.com/users",params)
    .then(r=>dispatch({type:types.POSTDATASUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:types.POSTDATAFAILURE}))
}


