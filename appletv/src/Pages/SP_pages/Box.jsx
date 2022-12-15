import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
const Box = () => {
  return (
    <SearchBarWrappr> 
        <Link to='/searchboxpage'>
            <button><i class='bx bx-search' ></i></button>
      <Input 
      placeholder='Search here...' />
    </Link>
    </SearchBarWrappr>
  )
}

export default Box
const Input = styled.input`
border: 1 px solid red;
flex:1;
font-size:20px;
border:none;
outline:none;
`;
const SearchBarWrappr = styled.div`
display : flex;
border: 1px solid black;
width:300px;
margin:auto;
`;