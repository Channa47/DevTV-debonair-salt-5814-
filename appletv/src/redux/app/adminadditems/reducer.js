import {
  ADMIN_ADD_ITEMS_REQ,
  ADMIN_ADD_ITEMS_SUC,
  ADMIN_ADD_ITEMS_ERR,
  ADMIN_GET_ITEMS_REQ,
  ADMIN_GET_ITEMS_SUC,
  ADMIN_GET_ITEMS_ERR,
} from "./types";

const init = {
  isLoading: false,
  isErr: false,
  Data: [],
};

export const AdminAddReducer = (state = init, { type, payload }) => {
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
    default:
      return state;
  }
};
