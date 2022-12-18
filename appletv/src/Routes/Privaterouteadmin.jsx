import { useNavigate } from "react-router"
import { Navigate } from "react-router"

export const PrivaterouteAdmin = ({children})=>{
  const navigate = useNavigate()
    let admintoken = JSON.parse(localStorage.getItem("admintoken"))
    // let navigate = useNavigate()
    if(admintoken!==null){
        return<>
           {children}
        </>
    }
  else{
   return <Navigate to="/login"/>
      
  }
       
}