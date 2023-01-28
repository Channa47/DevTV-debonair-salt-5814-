import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Navigate } from "react-router"

export const PrivaterouteAdmin = ({children})=>{
  // const [token , settoken] = useState(null)
  let token = localStorage.getItem("appletvadmintoken");
    // let navigate = useNavigate()
    if(token){
        return children
    }
  else{
   return <Navigate to="/login"/>
  } 
}