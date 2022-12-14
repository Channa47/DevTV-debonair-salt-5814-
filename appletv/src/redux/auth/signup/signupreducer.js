import * as types from "./signupactiontype"
const initstate = {
    isloading:false,
    isError:false,
    userdata:[],
    
}




export const signupreducer = (state = initstate,action)=>{
     
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
                todo:action.payload,
                
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