import axios from 'axios';
import { AddMovie } from '../Componenets/Additemcom';
import DeleteItem from '../Componenets/DeleteItem';

// import Navbar from "../Componenets/Navbar"

import { Select } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetDataASAdmin } from '../redux/app/adminadditems/action';
import PathcItems from "../Componenets/PathcItems"
// importr {GetDataASAdmin}

function ManageItems() {
  const [addItem, setadditem] = useState(false);
  const [length , setlength] = useState(0)
  const [deletitem, setdeletitem] = useState(false);
  const [pathc , setpatch] = useState(false)
  const store = useSelector(s=>s.ItemManageReducer);
  const dispatch = useDispatch()
  console.log(store);

  useEffect(()=>{
    dispatch(GetDataASAdmin());
    setlength(store.Data.length)
  },[dispatch,store.Data.length])

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

    }else if(val === "option3"){
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
      <div>
        <h1>Number Of Items :{length}</h1>
      </div>
      <Select w={"50%"} h={"60px"} margin="auto" mt={10} bgColor="GrayText" placeholder='Select option' onChange={(e)=>handleChange(e)} >
      <option value='option1'>ADD NEW ITEM</option>
      <option value='option2'>DELETE ITEM</option>
      <option value='option3'>UPDATE ITEM</option>
      </Select>
      </div>
      <br />
       {/* <AddMovie/> */}
      
      {addItem &&   <AddMovie/>    }
      {deletitem &&  <DeleteItem/>   }
      {pathc && <PathcItems/>}
    
    </>
  )
}

export default ManageItems


