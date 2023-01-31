import React, {  useEffect, useState } from 'react'
import styled from "styled-components";
import ShowallData from './ShowallData';
import img1 from "./Image/brand.png.png"; 
import { useNavigate } from 'react-router-dom';
// import axios from "axios";
const SearchBox = ({queryHandler, suggestions}) => {
  
    const [ input, setInput] = useState("");
    const [value, setValue] = useState([]);
    const navigate = useNavigate()
    // console.log(value)
  const handleInputChange = (e) =>{
    setInput(e.target.value);
  };
// filter the video , after the user has typed the text in the input box.


const handledata = async(input)=>{


let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&key=AIzaSyAVqqVq-hs1_knVD2RlhKR34oc7n17D90M`;

        let res = await fetch(url);
        let data = await res.json();
        setValue(data.items);
  

}


  useEffect(()=>{
    queryHandler(input);
  },[input,queryHandler])
    return (
      <div>
        <NavbarSection>
          <img src={img1} alt="avtar" width='100px' onClick={()=>navigate("/")} height='80px'/>
<Wrapper>
        <SearchBarWrappr>
          <Input bg="white" value={input} placeholder="Search..." onChange={handleInputChange}/>
          <button onClick={()=>handledata(input)}><i class='bx bx-search' ></i></button>
        </SearchBarWrappr>
        <SugestionsBox>
        {
            suggestions.map((item, index)=>{
                return <div key={index}>
                  <div  onClick={()=>navigate(`/singlepage/${item.id}`)} style={{width:"100%",cursor:"pointer",gap:"8%", display:"flex",alignItems:"center",borderBottom:"1px solid grey"}}>
                  <img style={{width:"40%"}} src={item.poster_img} alt="movie_poster" />
                  <p>{item.name}</p>
                  </div>
                  </div>
            })
        }
        </SugestionsBox>
       
    </Wrapper>
        </NavbarSection>
 
    
     <Showdata>
 <ShowallData data={value}/>
     </Showdata>
      </div>
   
  )
}

export default SearchBox;

const NavbarSection= styled.div`
border: 1px solid teal;
display:flex;
width:100%;
height: 80px;
background-color: black;

@media screen and (max-width: 375px){
           border: 1px solid teal;
display:flex;
width:100%;
height: 80px;
background-color: black;
 
    }
   @media screen and (max-width: 280px){
           border: 1px solid teal;
display:flex;
width:auto;
height:80px;
background-color: black;

 
    } 
`;

const Showdata = styled.div`
margin-top:100px;
`;
const SugestionsBox = styled.div`

max-height: 130px;
overflow: auto;
border-radius:0px 0px 10px 10px;
background-color: white;
& * {
    padding: 5px;
    text-align:left;
}
 @media screen and (max-width: 280px){
   
max-height: 90px;
overflow: auto;
background-color: white;
& * {
    padding: 10px;
    text-align:left;
}
}
`;

const SearchBarWrappr = styled.div`
display : flex;
border: 1px solid white;

`;
const Input = styled.input`

border: 1px solid white;
color:white;
flex:1;
font-size:20px;
border:none;
outline:none;
background-color: black;


`
const Wrapper= styled.div `

max-width:300px;
margin:auto;
    margin-right: 30px;
@media screen and (max-width: 375px){

max-width:200px;
margin:auto;
 
 
    }
    @media screen and (max-width: 280px){
    
max-width:80px;
margin:auto;
   
    }
`