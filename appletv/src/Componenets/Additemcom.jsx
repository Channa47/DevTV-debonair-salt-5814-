
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddItemsAsAdmin, GetDataASAdmin } from '../redux/app/adminadditems/action';
import { background, useToast } from '@chakra-ui/react'

import styled from "styled-components"

  
const init = {
    name: "",
    emdeddata: "",
    img: "",
    genre:"",
    description:"Featuring an all-star cast, this genre-bending anthology series weaves together."
}
// const rootReducer = combineReducers({getSignupreducer,Loginreducer,Signupreducer,ItemManageReducer})

export const AddMovie = ()=>{
    const [Data , SetData] = useState(init);
    const store = useSelector((s)=>s.ItemManageReducer)
    const dispatch = useDispatch();
    const toast = useToast()

    // useEffect(()=>{
    //     dispatch(GetDataASAdmin());
    // },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(Data.name ==="" || Data.emdeddata ==="" || Data.img === ""){
            toast({
                title: 'Missing ',
                description: "Please Fill All the Details To Add Item.",
                status: 'warning',
                duration: 9000,
                isClosable: true,
              })
        }else{
            dispatch(AddItemsAsAdmin(Data))
            toast({
                title: 'success',
                description: "Item Added Successfully.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            SetData(init)
           
        }
       
    }
    const Wrapper =  styled.section`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    `;
    return (
        <div style={{border:"2px solid black" ,borderRadius:"15px"  ,backgroundColor:"GrayText",   width:"50%", margin:"auto"}}>
            <div style={{borderColor:"black"}}>
            <p style={{fontSize:"50px",backgroundColor:"#4681f4",borderRadius:"15px"}}>ADD ITEM</p>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
            <br />
            <br />
            <label htmlFor="" style={{fontSize:"20px",fontFamily:"sans-serif"}}>Name</label>
            <br />
            <input style={{border: "2px solid black",width:"60%",height:"50px",borderRadius:"15px"}} type="text" placeholder="Name" value={Data.name} onChange={(e)=>SetData({...Data,name:e.target.value})} />
            <br />
            <br />
            <label htmlFor="" style={{fontSize:"20px",fontFamily:"sans-serif"}}>Video Id</label>
            <br />
            <input style={{border: "2px solid black",width:"60%",height:"50px",borderRadius:"15px"}} type="text" placeholder='Videoid' value={Data.emdeddata} onChange={(e)=>SetData({...Data,emdeddata:e.target.value})}/>
            <br />
            <br />
            <label htmlFor="" style={{fontSize:"20px",fontFamily:"sans-serif",}}>PosterURL</label>
            <br />
            <input style={{border: "2px solid black",width:"60%",height:"50px",borderRadius:"15px"}} type="text" placeholder='PosterURL' value={Data.img} onChange={(e)=>SetData({...Data,img:e.target.value})} />
            <br />
            <br />
            <label htmlFor="" style={{fontSize:"20px",fontFamily:"sans-serif"}}>GENRES</label>
            <br />
            <input style={{border: "2px solid black",width:"60%",height:"50px",borderRadius:"15px"}} type="text" placeholder='PosterURL' value={Data.genre} onChange={(e)=>SetData({...Data,genre:e.target.value})} />
            <br />
            <br />
            <input style={{border:"1px solid green", borderRadius:"10px", width:"30%",height:"30px", backgroundColor:"#4681f4"}} type="submit" placeholder={store.isLoading?"Loading...":"Submit"} />
            <br />
            <br />
        </form>
        </div>
    </div>
    )
}
