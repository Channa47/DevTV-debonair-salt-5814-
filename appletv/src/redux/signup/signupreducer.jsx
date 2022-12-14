import * as types from "./signupactiontype"



const initstate = {
    isloading:false,
    isError:false,
    userdata:[],
    
}




export const Signupreducer = (state = initstate,action)=>{
     
    switch(action.type){
         case types.POSTDATAREQUEST:{
            return{
                ...state,
                isError:false,
                isloading:true,
            }
         }
         case types.POSTDATASUCCESS:{
            return{
                ...state,
                isError:false,
                isloading:false,
                userdata:action.payload,
                
            }
         }
         case types.POSTDATAFAILURE:{
            return{
                ...state,
                isError:true,
                isloading:false,      
            }
         }
          default: return state
    }
   
}