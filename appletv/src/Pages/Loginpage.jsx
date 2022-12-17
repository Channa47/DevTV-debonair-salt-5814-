import {
    FormControl,
    Input,
    Button
  } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"

import "./Signup.css"
import { useForm } from 'react-hook-form'

import { getDataSignup } from '../redux/auth/getsignup/getsignupaction'
import { json } from 'react-router'

const LoginPage = ()=>{
    const init = {
        email:"",
        password:"",
    }
  
   const [data,setData] = useState(init)
   
   const { handleSubmit, formState: { errors, isSubmitting },} = useForm()
 
   const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(getDataSignup())
},[dispatch])
   const userdata = useSelector(store=>store.getSignupreducer.userdata)
   console.log(userdata)
      const handleChange = (e)=>{
            const {name,value} = e.target 
            setData({...data, [name]:value})
      }
    let tokendata = JSON.parse(localStorage.getItem("token"))||[]
    console.log(tokendata)
      const onSubmit = (data)=>{
       let loginuser = userdata.filter(ele=>ele.email===data.email && ele.password == data.password)
       if(loginuser.length>0){
            localStorage.setItem("token",JSON.stringify(loginuser[0].token))
       }
       else{
        alert("the email or password is incorrect")
       }
        
      }
   

   return (<>
      <form  className='form' onSubmit={handleSubmit(()=>onSubmit(data))}>
        <FormControl   width="80%" height="40%" paddingTop="3%" m="auto" marginTop="1%" paddingLeft="7%" paddingRight="7%">

            <Input name="email" value={data.email} onChange={handleChange} className='input'  type='email' placeholder="enter your email" />

            <Input name="password" value={data.password} onChange={handleChange} className='input'  type='password' placeholder="Enter your password"/>  

        </FormControl>
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    
     </form>
</>
   )      

}
export {LoginPage}