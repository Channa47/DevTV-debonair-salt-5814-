import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled  from 'styled-components'
const getData=()=>{
  return axios
        //  .get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=avengers&key=AIzaSyAVqqVq-hs1_knVD2RlhKR34oc7n17D90M`)
        .get("https://appllehomeserver.onrender.com/movies")
}
const ShowallData = ({data}) => {
    
    // let video = JSON.parse(localStorage.getItem("video"));
    const [singleValue, setSingleValue] = useState([])
    // console.log(singleValue)
    // const handleVideo =(el)=>{
    //     setSingleValue(el)
    //     // localStorage.setItem("video", JSON.stringify(el))
    // }
// useEffect(()=>{
//  getData().then((res)=>{
//      setSingleValue(res.data.items)
//  }).catch((e)=>{
//     console.log(e)
//  })
// },[])

useEffect(()=>{
    getData().then((res)=>{
        setSingleValue(res.data)
    }).catch((e)=>{
       console.log(e)
    })
   },[])
   
  return (
    <div>
        <h3 style={{float:"left", marginLeft:"30px"}}>Explore popular Series, Films, and More</h3>
 <Wrapper>
        {data?.map((el)=>{
            return(
                <div  style={{ overflow:"hidden", borderRadius:"8px", height:"150px"}} key={el.id}>
                    {/* <Link to={`/searchboxpage/${el.id.videoId}`}> */}
                    <Link to={`/singlepage/${el.id}`}>
                     {/* <img src={el.snippet.thumbnails.medium.url} alt="avtar" /> */}
                     <img src={el.img} alt="avtar" />
                     {/* <h4 >{el.snippet.title}</h4> */}
                    </Link>
                </div>
            )
        })}

        {data.length===0 && 
        singleValue?.map((el)=>{
          return(
                <div  style={{overflow:"hidden", borderRadius:"8px", height:"150px",width:"100%"}} key={el.id}>
                    {/* <Link to={`/searchboxpage/${el.id.videoId}`}> */}
                    <Link to={`/singlepage/${el.id}`}>
                     {/* <img src={el.snippet.thumbnails.medium.url} alt="avtar" /> */}
                     <img src={el.img} alt="avtar" />
                     {/* <h4 >{el.snippet.title}</h4> */}
                    </Link>
                </div>
            )
        })
        }
    </Wrapper>
   
    </div>
   
  )
}
// onClick={()=>handleVideo(el)}
// singleValue={singleValue}
export default ShowallData;
const Wrapper = styled.div`
width: 96%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

margin-top:120px;
 display: grid;
 grid-template-columns: repeat(4,1fr);
 gap: 15px;
margin: auto;


@media screen and (max-width: 910px){ 
    width: 96%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

margin-top:120px;
 display: grid;
 grid-template-columns: repeat(3,1fr);
 gap: 5px;
margin: auto;
}

@media screen and (max-width: 375px){
            width: 96%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

margin-top:120px;
 display: grid;
 grid-template-columns: repeat(2,1fr);
 gap: 5px;
margin: auto;
    }
    
    @media screen and (max-width: 315px){
            width: 96%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

margin-top:120px;
 display: grid;
 grid-template-columns: repeat(1,1fr);
 gap: 5px;
margin: auto;
    }
`

