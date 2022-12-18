import { useNavigate } from "react-router"

import { Navigate } from "react-router"
export const PrivaterouteUser = ({children})=>{
  const navigate = useNavigate()
    let token = JSON.parse(localStorage.getItem("token"))
    // let navigate = useNavigate()
    if(token){
        return<>
           {children}
        </>
    }
  else{
    return <Navigate to="/login"/>
    
  }
       
}