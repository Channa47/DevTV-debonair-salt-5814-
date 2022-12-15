import React from 'react'
import { useParams } from 'react-router-dom'
import styled  from 'styled-components';
const SinglePage = () => {
   const {id} = useParams();
   
  return (
    <Wrapper >
{
       
      <iframe style={{width:"550px", height:"400px" , border:"1px solid red", marginTop:"150px"}} 
      src={`https://www.youtube.com/embed/${id}`} title="DIV TIV+" allowFullScreen></iframe>
 


}

    </Wrapper>
  )
}

export default SinglePage;

const Wrapper = styled.div`
marginTop:150px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
width:50%;
 margin:auto;

 @media screen and (max-width: 910px){ 
    marginTop:150px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
width:50%;
 margin:auto;
}
@media screen and (max-width: 810px){
        marginTop:150px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
width:50%;
 margin:auto;
    }
`