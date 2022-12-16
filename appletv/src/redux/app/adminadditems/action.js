import axios from "axios";
import {
  ADMIN_ADD_ITEMS_REQ,
  ADMIN_ADD_ITEMS_SUC,
  ADMIN_ADD_ITEMS_ERR,
  ADMIN_GET_ITEMS_REQ,
  ADMIN_GET_ITEMS_SUC,
  ADMIN_GET_ITEMS_ERR,
  ADMIN_DEL_ITEMS_REQ,
  ADMIN_DEL_ITEMS_ERR,
  ADMIN_DEL_ITEMS_SUC,
} from "./types";

export const AddItemsAsAdmin = (payload) => (dispatch) => {
  dispatch({ type: ADMIN_ADD_ITEMS_REQ });
  return axios
    .post("https://appllehomeserver.onrender.com/movies", payload)
    .then((r) => dispatch({ type: ADMIN_ADD_ITEMS_SUC, payload: r.data }))
    .catch((e) => dispatch({type:ADMIN_ADD_ITEMS_ERR}));
};

export const GetDataASAdmin = () => (dispatch) => {
  dispatch({ type: ADMIN_GET_ITEMS_REQ });
  return axios
    .get("https://appllehomeserver.onrender.com/movies")
    .then((r) =>{dispatch({ type: ADMIN_GET_ITEMS_SUC,payload:r.data})})
    .catch((e) => dispatch({type:ADMIN_GET_ITEMS_ERR}));
};
export const DElelteItemAsAdmin = (ID) => (dispatch) =>{
  console.log(ID);
    dispatch({type:ADMIN_DEL_ITEMS_REQ});
    return axios
     .delete(`https://appllehomeserver.onrender.com/movies/${ID}`)
     .then((r)=>dispatch({type:ADMIN_DEL_ITEMS_SUC, payload:{id:ID}}))
     .catch((e)=>dispatch({type:ADMIN_DEL_ITEMS_ERR}))
}
