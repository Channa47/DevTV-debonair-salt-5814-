import { useNavigate } from "react-router"


export const PrivaterouteAdmin = ({children})=>{
    let admintoken = JSON.parse(localStorage.getItem("admintoken"))
    // let navigate = useNavigate()
    if(admintoken){
        return<>
           {children}
        </>
    }
  else{
    alert("you are not authorised")
      
  }
       
}