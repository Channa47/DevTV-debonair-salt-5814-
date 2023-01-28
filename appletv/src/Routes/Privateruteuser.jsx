import { useNavigate } from "react-router"

import { Navigate } from "react-router"
export const PrivaterouteUser = ({children})=>{
  const navigate = useNavigate()
    let token = (localStorage.getItem("appletvtoken"))
  
    if(token){
        return<>
           {children}
        </>
    }
  else{
    return <Navigate to="/login"/>
    
  }
       
}