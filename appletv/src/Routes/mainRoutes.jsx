import React from 'react'
import {Routes, Route} from "react-router-dom"
import { SignupPage } from '../Pages/Signup'

function MainRoutes() {
  return (
        <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path='/signup' element={<SignupPage/>}/>
            {/* <Route path='/signin' element={<Signin/>}/> */}
            {/* <Route path='singleitem/:id' element={<Singlepage/>}/> */}
        </Routes>
  )
}

export default MainRoutes