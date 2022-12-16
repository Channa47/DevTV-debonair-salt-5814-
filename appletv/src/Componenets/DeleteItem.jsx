import React, { useEffect } from 'react'
import { useState } from 'react'
import  axios  from 'axios';

import styled from "styled-components"
import { color, Select } from '@chakra-ui/react'
import SearcToDelete from './SearcToDelete';
import { useDispatch, useSelector } from 'react-redux';
import { DElelteItemAsAdmin, GetDataASAdmin } from '../redux/app/adminadditems/action';
import { background, useToast } from '@chakra-ui/react'

function DeleteItem() {
    const [id,setID] = useState("");
    const [option , setoption] = useState("");
    const [op1 , setop1] = useState(false);
    const [op2, setop2] = useState(false);
    const store = useSelector(s=>s.ItemManageReducer)
    const toast = useToast();

    useEffect(()=>{
      dispatch(GetDataASAdmin())
    },[dispatch,store.Data.length])

    console.log(store);
    const dispatch = useDispatch();
    const delet = () =>{
        // d
        dispatch(DElelteItemAsAdmin(id))
          toast({
            title: 'success',
            description: "Deleted",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        setID("");
      }
      
      const Wrapper =  styled.section`
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      width:"50%"
      `;
      const handleChange = (e) =>{
        setoption(e.target.value)
        if(option === "option1"){
          setop1(true);
          setop2(false);
        }else if (option == "option2"){
          setop2(true);
          setop1(false);
        }
      }
      console.log(option);
  return (
      <>
      <div>
         <Select style={{width:"20%",color:"white", backgroundColor:"black",}} onChange={(e)=>handleChange(e)} placeholder="Select">
          <option style={{color:"black"}} value="option1">Delete By Search</option>
          <option style={{color:"black"}} value="option2">Delete By ID</option>
         </Select>
      </div>   
      {/* {option === "option1" ?
     :
       <SearcToDelete/> } */}

       {op1 && <div style={{border:"2px solid black" ,width:"50%", margin:"auto",marginTop:"20px",borderRadius:"15px"  ,backgroundColor:"GrayText",}}>
         <p style={{fontSize:"50px", backgroundColor:"red",borderRadius:"15px"}}>DELETE ITEM</p>
         <br />
        <label htmlFor="" style={{fontSize:"20px",fontFamily:"sans-serif"}}>ID or Name</label>
        <br />
        <input style={{border: "2px solid black",width:"60%",height:"50px",borderRadius:"15px"}} value={id} onChange={(e)=>setID(e.target.value)} type="text" placeholder='Id or NAME'  />
        <br />
        <br />
        <button style={{border:"1px solid green", borderRadius:"10px", width:"30%",height:"30px", backgroundColor:"RED"}} onClick={()=>delet()}>SUBMIT</button>
        <br />
        <br />
      </div>   }
      { op2 &&  <SearcToDelete/>  }
    </>


  
  )
}

export default DeleteItem