
import {
    FormControl,
    Input,
    Button
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import "./Signup.css"
import { useForm } from 'react-hook-form'

import { getAdmindata } from '../redux/auth/admin/adminaction'

const AdminPage = () => {
    const init = {
        email: "",
        password: "",
    }
    const [data, setData] = useState(init)

    const { handleSubmit, formState: { errors, isSubmitting }, } = useForm()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAdmindata())
    }, [])
    const admin = useSelector(store=>store.adminreducer.admindata)
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
        }
        else {
            alert("you are not an admin")
        }
    }

    return (<>
        <form onSubmit={handleSubmit(() => onSubmit(data))}>
            <h2>Admin's Login</h2>
            <FormControl className='form' width="50%" height="90vh" paddingTop="3%" m="auto" marginTop="1%" paddingLeft="7%" paddingRight="7%">

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