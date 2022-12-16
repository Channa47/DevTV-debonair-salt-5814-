import { Img, useStatStyles } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DElelteItemAsAdmin, GetDataASAdmin } from '../redux/app/adminadditems/action';
import { Card, CardHeader, CardBody, CardFooter,Button,ButtonGroup,Divider,Text,Heading,Stack,Image, } from '@chakra-ui/react'
import { Navigate, useNavigate } from 'react-router-dom';

function SearcToDelete() {
    const [data, setdata] = useState({});
    const [quary, setquary] = useState("");
    const [show , setShow] = useState(false);
    const store = useSelector((s)=>s.ItemManageReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(GetDataASAdmin());
    },[dispatch.store.Data.length])


    // const handledata = async(input)=>{
    //     console.log(input)
    //     let url = `https://appllehomeserver.onrender.com/movies?name=${input}`;
    //             let res = await fetch(url);
    //             let data = await res.json();
    //             console.log(data);
    //             // setdata(data);
    //     }

    const handleSearch = (e) =>{
        setquary(e.target.value)
        setdata(store.Data)
        quary.toLowerCase();
        // handledata(quary);
        let data = store.Data;
        for(let i=0 ; i<data.length ; i++){
            let name = data[i].name.toLowerCase();
            console.log(quary)
            if(name === quary){
                setdata(data[i]);
                setShow(true)
                console.log(data[i])
            }
        }
    }

    if(store.Data.length>0) {
        // console.log(store.Data);
    }
    const handleDelete = () =>{
        dispatch(DElelteItemAsAdmin(data.id))
        dispatch(GetDataASAdmin());
        // navigate("/home")
        setquary("");
        setdata({});
        // dispatch(GetDataASAdmin());
        setShow(false)
        window.location.reload();
    }

  return (
    <div>
        <br />
        <input style={{border:"2px solid black", borderRadius:"10px"}} type="text" placeholder='Search' onChange={(e)=>handleSearch(e)}/>
        <br />
        <br />
        {/*  */}  

        {show? 
         <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
        <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={data.img}
        alt='Movie Poster'
        />

  <Stack>
    <CardBody>
      <Heading size='md'>{data.name}</Heading>

      <Text py='2'>
        {data.description}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue' onClick={handleDelete}>
        delete
      </Button>
    </CardFooter>
     </Stack>
    </Card>
        : 
         <div>
            <h1 style={{fontSize:"50px"}}>Provide Name</h1> 
        </div>
     }

    </div>
  )
}

export default SearcToDelete