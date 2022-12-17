import React from 'react'

import { useCallback, useEffect, useState } from 'react';

import SearchBox from './searchBox';
// import axios from 'axios';
import movies from '../../Componenets/SinglePageComponents/Movie';
const SearchBoxPage = () => {
  const [query, setQuery] = useState("");
  // const [data, setData] = useState("")
  const [sugestions, setSugestions] = useState([]);

  const queryHandler = useCallback((val)=>{
    setQuery(val)
  },[])
  


  useEffect(()=>{
    if(query===""){
           setSugestions([])
    }else{
       let textQuery = query.trim().toLowerCase();
      let newSugestion =movies.filter((item)=>{
         return item.name.toLowerCase().indexOf(textQuery)!== -1 ? true:
         false;

       })
       
       setSugestions(newSugestion)
    }
},[query]);


  return (
 <div >
      
     <SearchBox queryHandler={queryHandler} suggestions={sugestions}/>
    </div>
  )
}

export default SearchBoxPage