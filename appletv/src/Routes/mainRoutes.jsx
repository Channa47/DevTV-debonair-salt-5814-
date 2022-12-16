import React from 'react'
import {Routes, Route} from "react-router-dom"
import { SignupPage } from '../Pages/Signup'
import ManageItems from "../Pages/ManageItemsPage"

function MainRoutes() {
  return (
        <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path='/signup' element={<SignupPage/>}/>
            {/* <Route path='/signin' element={<Signin/>}/> */}
            {/* <Route path='singleitem/:id' element={<Singlepage/>}/> */}
            {/* <Route path='/searchboxpage' element={<SearchBoxPage/>}/>
        <Route path='/searchboxpage/:id' element={<SinglePage/>}/> */}
          <Route path="/manageitems" element={<ManageItems/>} />

        </Routes>
  )
}

export default MainRoutes