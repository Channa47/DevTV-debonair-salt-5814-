
import {
    FormControl,
    Input,
    Button
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import "./Admin.css"
import { useForm } from 'react-hook-form'

import { getAdmindata } from '../redux/auth/admin/adminaction'
import axios from 'axios'

const AdminPage = () => {
    const init = {
        email: "",
        password: "",
    }
    const [data, setData] = useState(init)
  const [buttonmsg , setbuttonmsg] = useState("Log In")
    const { handleSubmit, formState: { errors, isSubmitting }, } = useForm()
    const dispatch = useDispatch()
    const toast = useToast()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getAdmindata())
    }, [dispatch])
    const admin = useSelector(store=>store.adminreducer.admindata)
           

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const onSubmit = (data) => {
        let adminuserdata = admin.filter(ele => ele.email === data.email && ele.password === data.password)
      if(data.email===""||data.password==""){
        toast({
            title: 'Failed',
            status: 'warning',
            description:"input should not be empty",
            duration: 9000,
            isClosable: true,
          })
      }
      else{
        if (adminuserdata.length > 0) {
            toast({
                title: 'Success',
                status: 'success',
                description:`Welcome back ${adminuserdata[0].name}`,
                duration: 9000,
                isClosable: true,
              })
            localStorage.setItem("admintoken", JSON.stringify(adminuserdata[0].token))
            navigate("/")
        }
        else {
            toast({
                title: 'Failed',
                status: 'warning',
                description:"you are not an admin",
                duration: 9000,
                isClosable: true,
              })
        }
      }
        
    }

    const AdminLogin = (e) =>{
        e.preventDefault();
        setbuttonmsg("Loading....")
        axios.post('https://appletvplusmndbs.onrender.com/admin/login',data)
        .then((r)=>{;
        if(r.data.msg === 'Login SuccessFull'){
        localStorage.setItem('appletvadmintoken',r.data.token);
        localStorage.setItem('appletvloggedinuser',JSON.stringify(r.data.admin[0]));
        toast({
            title: `${r.data.msg}`,
            status: 'success',
            description:`Welcome back ${r.data.admin[0].name}`,
            duration: 9000,
            isClosable: true,
          })
        
        setbuttonmsg("Log In")
        navigate('/')
        }else{
            toast({
                title: 'Login Failed',
                status: 'warning',
                description:`${r.data.msg}`,
                duration: 9000,
                isClosable: true,
              })
              setbuttonmsg("Log In")
        }
        })
        .catch((e)=>{
            toast({
                title: 'Login Failed',
                status: 'warning',
                description:`${e.code}`,
                duration: 9000,
                isClosable: true,
              })
              setbuttonmsg("Log In")
        })
    };

    return (<div className='form_div2'>
        {/* onSubmit={handleSubmit(() => onSubmit(data))} */}
        <form className='form2' >
        <h1 style={{color:"black", fontSize:"200%",fontWeight:"bold"}}>Addmin login</h1>
            <FormControl>

                <Input _placeholder={{color:"black"}} name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="enter your email" />

                <Input _placeholder={{color:"black"}} name="password" value={data.password} onChange={handleChange} className='input' type='password' placeholder="Enter your password" />

            </FormControl>
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit' onClick={AdminLogin}>
               {buttonmsg}
            </Button>

        </form>
    </div>
    )
}
export { AdminPage }