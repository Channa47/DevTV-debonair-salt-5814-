import * as types from "./getsignupactiontype"
const initstate = {
    isloading:false,
    isError:false,
    userdata:[],
    
}




export const getSignupreducer = (state = initstate,action)=>{
     
    switch(action.type){
         case types.GETUSERDATAREQUEST:{
            return{
                ...state,
                isError:false,
                isloading:true,
            }
         }
         case types.GETUSERDATASUCCESS:{
            return{
                ...state,
                isError:false,
                isloading:false,
                userdata:action.payload,
                
            }
         }
         case types.GETUSERDATAFAILURE:{
            return{
                ...state,
                isError:true,
                isloading:false,      
            }
         }
          default: return state
    }
   
}