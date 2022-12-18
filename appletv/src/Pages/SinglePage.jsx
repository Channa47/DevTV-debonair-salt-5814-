import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CopyrightSection from "../Componenets/SinglePageComponents/CopyrightSection";
import About from "../Componenets/SinglePageComponents/About";
import BonusContent from "../Componenets/SinglePageComponents/BonusContent";
import CrewAndCast from "../Componenets/SinglePageComponents/CrewAndCast";
import HowToWatch from "../Componenets/SinglePageComponents/HowToWatch";
import Information from "../Componenets/SinglePageComponents/Information";
import PosterDetails from "../Componenets/SinglePageComponents/PosterDetails";
import PosterVideo from "../Componenets/SinglePageComponents/PosterVideo";
import Related from "../Componenets/SinglePageComponents/Related";
import Trailers from "../Componenets/SinglePageComponents/Trailers";
import styles from "./SinglePage.module.css"


export default function SinglePage(){
    const {id} = useParams();
    const [singleMovie,SetSingleMovie] = useState({});
    const [starring,setStarring] = useState([]);
    const [info,setInfo] = useState([]);
    const [languages,setLanguages] = useState([]);

    const getSinlgeMovie =()=>{
        axios.get(`https://movies-appletv.onrender.com/movies/${id}`)
        .then(res=>{
            SetSingleMovie(res.data);
            setStarring(res.data.cast.map((ele)=>ele.name));
            setInfo(res.data.info);
            setLanguages(res.data.languages || res.data.launguages)
        }).catch(err=>console.log("ERROR IS:",err)); 
    }

    useEffect(()=>{
         getSinlgeMovie()
    },[])

    return(
        <div className={styles.SinglePage_main_div}>

     <PosterVideo
     singleMovie={singleMovie}
     />

     <PosterDetails
     genre={info[0]}
     starring={starring}
     releaseYear={info[1]}
     />

     <Box marginLeft='30px'>     
     <Trailers
     movieCode={singleMovie.emdeddata}
     />

<hr style={{background:"grey",height:"0.8px",width:"98%",margin:"auto",marginTop:"30px",marginBottom:"20px"}}/>
     
     <BonusContent
     movieCode={singleMovie.emdeddata}
     />

<hr style={{background:"grey",height:"0.8px",width:"98%",margin:"auto",marginTop:"30px",marginBottom:"20px"}}/>
     
     <Related/>

<hr style={{background:"grey",height:"0.8px",width:"98%",margin:"auto",marginBottom:"20px"}}/>
     
     <CrewAndCast/>

<hr style={{background:"grey",height:"0.8px",width:"98%",margin:"auto",marginBottom:"20px"}}/>   

     <HowToWatch/>

<hr style={{background:"grey",margin:"auto",marginTop:"20px",marginBottom:"10px",marginLeft:"-30px"}}/>

     <About
     movieName={singleMovie.name}
     genre={info[0]}
     />

     <hr style={{background:"grey",height:"0.8px",width:"98%",margin:"auto",marginTop:"30px",marginBottom:"20px"}}/>

     <Information
     regionOfOrigin={info[3] || "United States"}
     genre={info[0]}
     releaseYear={info[1]}
     rated={info[2]}
     originalAudio = {languages[0]}
     />

<hr style={{background:"grey",margin:"auto",marginTop:"20px",marginBottom:"10px",marginLeft:"-30px"}}/>

     <CopyrightSection/>

     </Box>
        </div>
    )
}