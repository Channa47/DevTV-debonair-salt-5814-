import React, {  useEffect, useState } from 'react'
import styled from "styled-components";
import ShowallData from './ShowallData';
// import axios from "axios";
const SearchBox = ({queryHandler, suggestions}) => {
  
    const [ input, setInput] = useState("");
    const [value, setValue] = useState([]);
    // console.log(value)
  const handleInputChange = (e) =>{
    setInput(e.target.value);
  };
// filter the video , after the user has typed the text in the input box.


const handledata = async(input)=>{


let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&key=AIzaSyAcmhi3DMauME8NmnElfH0nhzzwL7rdmRs`;

        let res = await fetch(url);
        let data = await res.json();
        setValue(data.items);
  

}


  useEffect(()=>{
    queryHandler(input);
  },[input,queryHandler])
    return (
      <div>
 <Wrapper>
        <SearchBarWrappr>
          <Input value={input} onChange={handleInputChange}/>
          <button onClick={()=>handledata(input)}><i class='bx bx-search' ></i></button>
        </SearchBarWrappr>
        <SugestionsBox>
        {
            suggestions.map((item, index)=>{
                return <div key={index}>{item.name}</div>
            })
        }
        </SugestionsBox>
       
    </Wrapper>
    
     <Showdata>
 <ShowallData data={value}/>
     </Showdata>
      </div>
   
  )
}

export default SearchBox;

const Showdata = styled.div`
margin-top:100px
`;
const SugestionsBox = styled.div`
border: 1px solid black
max-height: 200px;
overflow: auto;

& * {
    padding: 10px;
    text-align:left;
    padding-left: 20px;
}
`;

const SearchBarWrappr = styled.div`
display : flex;
border: 1px solid black

`;
const Input = styled.input`
border: 1 px solid red;
flex:1;
font-size:20px;
border:none;
outline:none;
`
const Wrapper= styled.div `
border : 1px solid red;
max-width:300px;
margin:auto;

`