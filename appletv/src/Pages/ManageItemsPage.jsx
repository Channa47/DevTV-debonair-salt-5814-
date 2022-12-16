import axios from 'axios';
import { AddMovie } from '../Componenets/Additemcom';
import DeleteItem from '../Componenets/DeleteItem';

// import Navbar from "../Componenets/Navbar"

import { Select } from '@chakra-ui/react'
import { useState } from 'react';
function ManageItems() {
  const [addItem, setadditem] = useState(false);
  const [deletitem, setdeletitem] = useState(false);
  const [pathc , setpatch] = useState(false)

  const handleChange = (e) => {
    const val = e.target.value
    if(val === "option1"){
      setadditem(true)
      setdeletitem(false)
      setpatch(false)
    }else if(val === "option2"){
      setdeletitem(true)
     setadditem(false)
     setpatch(false)

    }else if(val === "option1"){
      setpatch(true);
      setadditem(false)
      setdeletitem(false)
    }
  }
  return (
    <>
    
      {/* <AddMovie/>
      <DeleteItem/> */}
     
      <div >
      <Select w={"50%"} h={"60px"} margin="auto" mt={10} bgColor="GrayText" placeholder='Select option' onChange={(e)=>handleChange(e)} >
      <option value='option1'>ADD NEW ITEM</option>
      <option value='option2'>DELETE ITEM</option>
      <option value='option3'>UPDATE ITEM</option>
      </Select>
      </div>
      <br />
      
      {addItem &&   <AddMovie/>    }
      {deletitem &&  <DeleteItem/>   }
      {pathc && "Pathc"}
    
    </>
  )
}

export default ManageItems


