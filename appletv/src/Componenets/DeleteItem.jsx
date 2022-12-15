import React from 'react'
import { useState } from 'react'
import  axios  from 'axios';

import styled from "styled-components"

function DeleteItem() {
    const [id,setID] = useState("");
    const delet = () =>{
        axios.delete("https://appllehomeserver.onrender.com/movies/").then((r)=>console.log(r))
      }
      const Wrapper =  styled.section`
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      width:"50%"
      `;
  return (

    <div style={{border:"2px solid black" ,width:"50%", margin:"auto",marginTop:"20px",borderRadius:"15px"  ,backgroundColor:"GrayText",}}>
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
    </div>
  
  )
}

export default DeleteItem