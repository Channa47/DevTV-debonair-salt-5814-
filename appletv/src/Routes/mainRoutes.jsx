import React from 'react'
import {Routes, Route} from "react-router-dom"
import { SignupPage } from '../Pages/Signup'
import {Bannuseraccount, Edituseraccount} from "../Pages/Bannuseraccount"
import { LoginPage } from '../Pages/Loginpage'
import { Removebannannaccount } from '../Pages/Removebann'
function MainRoutes() {
  return (
        <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path='/signup' element={<Removebannannaccount/>}/>
            {/* <Route path='/signin' element={<Signin/>}/> */}
            {/* <Route path='singleitem/:id' element={<Singlepage/>}/> */}
            {/* <Route path='/searchboxpage' element={<SearchBoxPage/>}/>
        <Route path='/searchboxpage/:id' element={<SinglePage/>}/> */}
        </Routes>
  )
}

export default MainRoutes