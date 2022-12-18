
import {
    FormControl,
    Input,
    Button
} from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import "./Signup.css"
import { useForm } from 'react-hook-form'
import { addbanuser, getbanuser } from '../redux/auth/admin/edituseraction'
import MainNavbar from '../Componenets/MainNavbar'



const Bannuseraccount = () => {
    const init = {
        email: "",
    }
    const [data, setData] = useState(init)
    const toast = useToast()
    const navigate = useNavigate()
    const { handleSubmit, formState: { errors, isSubmitting }, } = useForm()
    const dispatch = useDispatch()
    const banneduserlist = useSelector(store=>store.getbannreducer.banneduserlist)
    console.log(banneduserlist)
    const handleChange = useCallback((e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    },[])
    useEffect(()=>{
        dispatch(getbanuser())
    },[dispatch])
    const onSubmit = (data) => {
        if(data.email===""){
            toast({
                title: 'Failed',
                status: 'failed',
                description:`input should not be empty`,
                duration: 9000,
                isClosable: true,
              })
        }
        else{
            dispatch(addbanuser(data))
            toast({
                title: 'Success',
                status: 'success',
                description:`${data.email} is banned`,
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
        <h1 style={{color:"black", fontSize:"200%",fontWeight:"bold"}}>Bann account</h1>
           
            <FormControl>
                <Input isRequired name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="enter your email" />
            </FormControl>
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                Submit
            </Button>

        </form>
        
</div>
    </>
    )

}
export { Bannuseraccount }