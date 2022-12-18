
import {
    FormControl,
    Input,
    Button,
    Spinner
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import "./Signup.css"
import { useForm } from 'react-hook-form'

import { getAdmindata } from '../redux/auth/admin/adminaction'

const AdminPage = () => {
    const init = {
        email: "",
        password: "",
    }
    const [data, setData] = useState(init)
    const navigate = useNavigate()
    const { handleSubmit, formState: { errors, isSubmitting }, } = useForm()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAdmindata())
    }, [])
    const admin = useSelector(store=>store.adminreducer.admindata)
    const isloading = useSelector(store=>store.adminreducer.isloading)
            console.log(admin)

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const onSubmit = (data) => {
        let adminuserdata = admin.filter(ele => ele.email === data.email && ele.password === data.password)
      
        if (adminuserdata.length > 0) {
            alert(`Very Welcome sir ${adminuserdata[0].name}`)
            localStorage.setItem("admintoken", JSON.stringify(adminuserdata[0].token))
            navigate()
        }
        else {
            alert("you are not an admin")
        }

    }
    
  if(isloading){
    return <>
    
    <form className='form'>
        <Spinner className='spinner' thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
        </form>
    </>
  }


    return (<>
        <form className='form' onSubmit={handleSubmit(() => onSubmit(data))}>
            <h2>Admin's Login</h2>
            <FormControl className='form-controll'>

                <Input name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="enter your email" />

                <Input name="password" value={data.password} onChange={handleChange} className='input' type='password' placeholder="Enter your password" />

            </FormControl>
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                Submit
            </Button>

        </form>
    </>
    )

}
export { AdminPage }