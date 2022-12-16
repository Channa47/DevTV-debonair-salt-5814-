
import * as types from "./edituseractiotype"
const init = {
    isLoading: false,
    isError: false,
    banneduserlist:[]
}


export const editreducer = (state = init, action) => {
    switch (action.type) {
        case types.BANNUSERREQUEST: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            }
        }
        case types.BANNUSERSUCCESS: {
            return {
                ...state,
                isError: false,
                isLoading: false,
                banneduserlist:action.payload
            }
        }
        case types.DBANNUSERFAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }
    }
}