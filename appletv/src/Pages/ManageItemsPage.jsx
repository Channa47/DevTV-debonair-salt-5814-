import axios from 'axios';
import { AddMovie } from '../Componenets/Additemcom';
import DeleteItem from '../Componenets/DeleteItem';
import styled from 'styled-components';

// import Navbar from "../Componenets/Navbar"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DElelteItemAsAdmin, GetDataASAdmin, UpdateItemAsAdmin } from '../redux/app/adminadditems/action';
// import PathcItems from "../Componenets/PathcItems";
import { Select, Spinner, Toast, useToast } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import MainNavbar from '../Componenets/MainNavbar';
import { Link,useNavigate } from 'react-router-dom';


// importr {GetDataASAdmin}

function ManageItems() {
  const [addItem, setadditem] = useState(false);
  const [deletitem, setdeletitem] = useState(false);
  const store = useSelector(s=>s.ItemManageReducer);
  const [url,setUrl] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toast = useToast()
  // console.log(store);

  useEffect(()=>{
    dispatch(GetDataASAdmin())
  },[dispatch])

  console.log("store",store);

  const handleChange = (e) => {
    const val = e.target.value
    if(val === "option1"){
      setadditem(true)
      setdeletitem(false)
    }else if(val === "option2"){
      setdeletitem(true)
      setadditem(false)
    }
  }

  const handleDelete = (id) =>{
     dispatch(DElelteItemAsAdmin(id))
  }

  const handleUpdate = (e) =>{
    // UpdateItemAsAdmin
    if(url === ""){
      toast({
        title: 'Empty Input',
        description: "Add Currect URL",
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
    }else{
      let payload = {...e,img:url}
      dispatch(UpdateItemAsAdmin(payload))
      setUrl("");

    }
  }


  console.log(store.Data)
   if(store.isLoading){
    return  (
       <div style={{justifyContent:"center",marginTop:"10%"}}>
            <Spinner color='black.500' label="Loading..." size="xl" speed='0.3s' />
       </div>
    )
  }
  return (
    <>
      <MainNavbar/>
      <div >
      <div style={{marginTop:"20px"}}>
        <h1 style={{fontSize:"50px"}}>ITEM COUNT IS {store.Data.length}</h1>
      </div>
      <Select w={"50%"} h={"60px"} margin="auto" mt={10} bgColor="GrayText" placeholder='Select option' onChange={(e)=>handleChange(e)} >
      <option value='option1'>ADD NEW ITEM</option>
      <option value='option2'>DELETE or UPDATE ITEM</option>
      </Select>
      <br />
      </div>
      <br />
       {/* <AddMovie/> */}
      
      {addItem && <AddMovie/> }
      { deletitem && 
     <div style={{marginTop:"-50px",display:"hide",display:"grid", gridTemplateColumns: "300px 300px 300px 300px", gap:"20px",margin:"auto", justifyContent:"center",alignItems:'center',backgroundColor:"#171010"}}>
     { 
      store.Data.length>0 && store.Data.map((e)=>{
        return (
          <div key={e.id} style={{borderRadius:"10px",backgroundColor:"black",marginTop:"50px",}} >
          <img width={"100%"} height={"100px"} src={e.img} alt="" />
          <br />
          <h1 style={{color:"aliceblue"}}>{e.name}</h1>
          <br />
          <div style={{display:"flex",justifyContent:"space-around"}}>
              <ButtonWrapper1>  <button onClick={()=>handleDelete(e.id)} >Delete</button> </ButtonWrapper1>
              {/* <ButtonWrapper2> <button onClick={()=>handleUpdate(e)}>Update</button>    </ButtonWrapper2> */}


               {/*  */}
               <Popover closeOnBlur={true}>
                  <PopoverTrigger>
                  <ButtonWrapper2> <button >Update</button>    </ButtonWrapper2> 
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Change Poster</PopoverHeader>
                    <PopoverBody>
                      <input type="text" placeholder='URl'style={{border:"2px solid black"}} value={url} onChange={(e)=>setUrl(e.target.value)} />
                      <br />  
                      <button onClick={()=>handleUpdate(e)} >Change</button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
               {/*  */}
          </div>
          <br />
          </div>
        )
      })
     }

    </div>

      }
 <button onClick={localStorage.setItem("admintoken",JSON.stringify(null))}>Log out</button>
      <Link to="/banusers"><div>Bann user</div></Link>
      <Link to="/removeban"><div>Unbann user</div></Link>
    </>
  )
}

const ButtonWrapper1 = styled.button`
  color: white;
  background-color:red;
  width:25%;
  border-radius: 25px;

`;


const ButtonWrapper2 = styled.button`
  color: white;
  background-color:green;
  width:25%;
  border-radius: 25px;
`;



export default ManageItems


