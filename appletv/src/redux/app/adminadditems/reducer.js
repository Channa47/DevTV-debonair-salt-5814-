import {
  ADMIN_ADD_ITEMS_REQ,
  ADMIN_ADD_ITEMS_SUC,
  ADMIN_ADD_ITEMS_ERR,
  ADMIN_GET_ITEMS_REQ,
  ADMIN_GET_ITEMS_SUC,
  ADMIN_GET_ITEMS_ERR,
  ADMIN_DEL_ITEMS_REQ,
  ADMIN_DEL_ITEMS_SUC,
  ADMIN_DEL_ITEMS_ERR,
  ADMIN_UPDATE_ERR,
  ADMIN_UPDATE_SUC,
} from "./types";

const init = {
  isLoading: false,
  isErr: false,
  Data: [],
};

export const ItemManageReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADMIN_ADD_ITEMS_ERR:
      return {
        ...state,
        isLoading: false,
        isErr: true,
      };
    case ADMIN_ADD_ITEMS_SUC:
      return {
        ...state,
        isLoading: false,
        isErr: false,
        Data: payload,
      };
    case ADMIN_ADD_ITEMS_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case ADMIN_GET_ITEMS_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case ADMIN_GET_ITEMS_SUC:
        // console.log("channa")
      return {
        ...state,
        isLoading: false,
        Data: payload,
      };
    case ADMIN_GET_ITEMS_ERR:
      return {
        ...state,
        isLoading: false,
        isErr: true,
      };
    case ADMIN_DEL_ITEMS_REQ:
      return {
        ...state,
        isLoading : true
      }
    case ADMIN_DEL_ITEMS_SUC :
      console.log("payload:",payload.id)
      // console.log(state.Data)
      const newItems = state.Data.filter((cI) => cI.id !== payload.id);
      return {
        ...state,
        isLoading:false,
        isErr : false,
        Data:newItems
      }
    case ADMIN_DEL_ITEMS_ERR :
      return {
        ...state,
        isLoading:false,
        isErr : true
      }
    case ADMIN_UPDATE_ERR :
       return {
        ...state,
        isLoading:true,
       }
    case ADMIN_UPDATE_SUC :
      let newitems = state.Data.map((e)=>{
        if(e.id === payload.id){
          return payload
        }else{
          return e
        }
      })
      return {
        ...state,
        isLoading:false,
        Data:newitems
      }
    case ADMIN_UPDATE_ERR:
      return {
        ...state,
        isLoading:false,
        isErr:true
      }
    default:
      return state;

  }
};
