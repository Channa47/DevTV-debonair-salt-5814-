
import * as types from "./edituseractiotype"
const init = {
    isLoading: false,
    isError: false
}


export const editreducer = (state = init, action) => {
    switch (action.type) {
        case types.DELETEUSERREQUEST: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            }
        }
        case types.DELETEUSERSUCCESS: {
            return {
                ...state,
                isError: false,
                isLoading: false,
            }
        }
        case types.DELETEUSERREQUEST: {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }
    }
}