import { useNavigate } from "react-router"


export const PrivaterouteAdmin = ({children})=>{
    let token = JSON.parse(localStorage.getItem("token"))
    // let navigate = useNavigate()
    if(token){
        return<>
           {children}
        </>
    }
  else{
    alert("you are not authorised")
      
  }
       
}