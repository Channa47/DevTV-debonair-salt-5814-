import React from 'react'
import {Routes, Route} from "react-router-dom"

import { HomePage } from '../Pages/HomePage'

// import { SignupPage } from '../Pages/Signup'
// import SinglePage from "../Pages/SP_pages/SinglePage";
// import SearchBoxPage from "../Pages/SP_pages/SearchBoxPage";
import { SignupPage } from '../Pages/Signup';

import { SignupPage } from '../Pages/Signup'

import {Bannuseraccount, Edituseraccount} from "../Pages/Bannuseraccount"
import { LoginPage } from '../Pages/Loginpage'
import { Removebannannaccount } from '../Pages/Removebann'
import ManageItems from "../Pages/ManageItemsPage"


function MainRoutes() {
  return (
        <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path='/signup' element={<Removebannannaccount/>}/>
            {/* <Route path='/signin' element={<Signin/>}/> */}
            {/* <Route path='singleitem/:id' element={<Singlepage/>}/> */}
            {/* <Route path='/searchboxpage' element={<SearchBoxPage/>}/>
        <Route path='/searchboxpage/:id' element={<SinglePage/>}/> */}
          <Route path="/manageitems" element={<ManageItems/>} />

        </Routes>
  )
}

export default MainRoutes