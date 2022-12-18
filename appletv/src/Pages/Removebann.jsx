
import {
    FormControl,
    Input,
    Button
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import "./Signup.css"
import { useForm } from 'react-hook-form'
import { getbanuser, removebanuser } from '../redux/auth/admin/edituseraction'
import MainNavbar from '../Componenets/MainNavbar'



const Removebannannaccount = () => {
    const init = {
        email: "",
    }
    const [data, setData] = useState(init)
    
    const { handleSubmit, formState: { errors, isSubmitting }, } = useForm()
    const dispatch = useDispatch()
    const toast = useToast()
    const banneduserlist = useSelector(store=>store.getbannreducer.banneduserlist)
    console.log(banneduserlist)
   useEffect(()=>{
    dispatch(getbanuser(data))
   },[dispatch])

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const onSubmit = (data) => {
         const removeuser = banneduserlist.filter(ele=>ele.email===data.email)
     
        if(data.email===""){
            toast({
                title: 'Failed',
                status: 'warning',
                description:"input should not be empty",
                duration: 9000,
                isClosable: true,
              })
        }
        else{
            if(removeuser.length>0){
                dispatch(removebanuser(removeuser[0].id))
            }
           
            toast({
                title: 'Success',
                status: 'success',
                description:`${data.email} is unbanned `,
                duration: 9000,
                isClosable: true,
              })
              setData("")
        }
 
 
         
    }

    return (<>
         <MainNavbar/>
         <div className='form_div'>
        <form className='form' onSubmit={handleSubmit(() => onSubmit(data))}>
        <h1 style={{color:"black", fontSize:"200%",fontWeight:"bold"}}>Remove Bann</h1>
            <FormControl className='form' width="50%" height="90vh" paddingTop="3%" m="auto" marginTop="1%" paddingLeft="7%" paddingRight="7%">
                <Input name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="enter your email" />
            </FormControl>
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                Submit
            </Button>

        </form>
        </div>
    </>
    )

}
export { Removebannannaccount }