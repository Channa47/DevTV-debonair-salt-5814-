
import {
    FormControl,
    Input,
    Button
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

import "./Signup.css"
import { useForm } from 'react-hook-form'
import { getbanuser } from '../redux/auth/admin/edituseraction'



const Edituseraccount = () => {
    const init = {
        email: "",
    }
    const [data, setData] = useState(init)

    const { handleSubmit, formState: { errors, isSubmitting }, } = useForm()
    const dispatch = useDispatch()
   

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const onSubmit = (data) => {
        dispatch(getbanuser(data))
         
    }

    return (<>
        <form onSubmit={handleSubmit(() => onSubmit(data))}>
            <h2>Delete account</h2>
            <FormControl className='form' width="50%" height="90vh" paddingTop="3%" m="auto" marginTop="1%" paddingLeft="7%" paddingRight="7%">

                <Input name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="enter your email" />

            </FormControl>
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                Submit
            </Button>

        </form>
    </>
    )

}
export { Edituseraccount }