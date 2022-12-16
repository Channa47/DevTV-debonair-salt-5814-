import React from 'react'
import {Routes, Route} from "react-router-dom"
import { HomePage } from '../Pages/HomePage'

// import { SignupPage } from '../Pages/Signup'
// import SinglePage from "../Pages/SP_pages/SinglePage";
// import SearchBoxPage from "../Pages/SP_pages/SearchBoxPage";
import { SignupPage } from '../Pages/Signup';

function MainRoutes() {
  return (
        <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path='/signup' element={<SignupPage/>}/>
            {/* <Route path='/signin' element={<Signin/>}/> */}
            {/* <Route path='singleitem/:id' element={<Singlepage/>}/> */}
            {/* <Route path='/searchboxpage' element={<SearchBoxPage/>}/>
        <Route path='/searchboxpage/:id' element={<SinglePage/>}/> */}
        </Routes>
  )
}

export default MainRoutes