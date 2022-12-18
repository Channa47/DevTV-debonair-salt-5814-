
import {
    FormControl,
    Input,
    Button,
    Spinner
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

import "./Signup.css"
import { useForm } from 'react-hook-form'
import { getbanuser, removebanuser } from '../redux/auth/admin/edituseraction'



const Removebannannaccount = () => {
    const init = {
        email: "",
    }
    const [data, setData] = useState(init)
    
    const { handleSubmit, formState: { errors, isSubmitting }, } = useForm()
    const dispatch = useDispatch()
   
  
   useEffect(()=>{
    dispatch(getbanuser(data))
   },[])

 

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const onSubmit = (data) => {
      dispatch(removebanuser(data))
         alert("bann has been removed")
         dispatch(getbanuser(data))
    }
    const banneduserlist = useSelector(store=>store.getbannreducer.banneduserlist)
    console.log(banneduserlist)
    const isloading = useSelector(store=>store.getbannreducer.isloading)
    
  if(isloading){
    return <>
    
    <form className='form'>
        <Spinner className='spinner' thickness='4px' speed='0.65s' emptyColor='gray.200' color='green.500' size='xl'/>
        </form>
    </>
  }

    return (<>
        <form className='form' onSubmit={handleSubmit(() => onSubmit(data))}>
            <h2>Remove bann </h2>
            <FormControl className='form-controll'>
                <Input name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="enter your email" />
            </FormControl>
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                Submit
            </Button>

        </form>
    </>
    )

}
export { Removebannannaccount }