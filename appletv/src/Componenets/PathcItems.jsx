import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetDataASAdmin } from '../redux/app/adminadditems/action'

function PathcItems() {
    const store = useSelector((s)=>s.ItemManageReducer)
    const dispatch = useDispatch()
    const [data, setData] = useState([]);

    useEffect(()=>{
      dispatch(GetDataASAdmin())
      setData(store.Data)
    },[])
  return (
      <>
    <div style={{display:"hide",display:"grid", gridTemplateColumns: "300px 300px 300px 300px", gap:"20px",margin:"auto", justifyContent:"center",alignItems:'center'}}>
     {
      data.length>0 && data.map((e)=>{
        return (
          <div style={{}} >
          
          <img width={"100%"} height={"100px"} src={e.img} alt="" />
          <br />
          <h1>{e.name}</h1>
          </div>
        )
      })
     }


    </div>
    </>
  )
}

export default PathcItems