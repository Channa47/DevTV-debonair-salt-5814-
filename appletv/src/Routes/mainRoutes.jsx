import React from 'react'
import {Routes, Route} from "react-router-dom"
import { HomePage } from '../Pages/HomePage'
import { SignupPage } from '../Pages/Signup'
import {LoginPage} from "../Pages/Loginpage"
import ManageItems from "../Pages/ManageItemsPage"
// import SinglePage from '../Pages/SP_pages/SinglePage'
import SearchBoxPage from '../Pages/SP_pages/SearchBoxPage'
import { AdminPage } from '../Pages/Adminpage'
import NotFound from '../Componenets/NotFound'
import SinglePage from '../Pages/SinglePage'
import 


function MainRoutes() {
  return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            {/* <Route path='singleitem/:id' element={}/> */}
            <Route path='/searchboxpage' element={<SearchBoxPage/>}/>
            <Route path='/singlepage/:id' element={<SinglePage/>}/>
            <Route path="/manageitems" element={<ManageItems/>} />
            <Route path="/adminpage" element={<AdminPage/>} />  
            <Route path='*' element={<NotFound />}></Route>
            // <Route/>
            // <Route/>
            // <Route/>
        </Routes>
  )
}

export default MainRoutes