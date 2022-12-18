import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {BsFillPlayFill,BsPlus} from "react-icons/bs"
import styles from "./PosterDetails.module.css"

export default function PosterDetails({genre,releaseYear,starring}){

    return(
        <div className={styles.PosterDetails_Main_Div} >
            {/* Buttons */}
            <div className={styles.Buttons_div}>
            <p className={styles.AppleTV}>Apple TV+</p>
            <Button className={styles.PosterDetails_Buttons} style={{backgroundColor:"white", fontSize:"18px"}} > <BsFillPlayFill/> Play Free Episode</Button>
            <Button className={styles.PosterDetails_Buttons} style={{backgroundColor:"white",fontSize:"18px"}} >Start Free Trial</Button>
            <Button className={styles.PosterDetails_Buttons} style={{backgroundColor:"white",fontSize:"18px"}} > <span style={{fontSize:"30px"}}><BsPlus/></span> Add to Up Next</Button>
            </div>

           {/* Movie description */}
            <div className={styles.PosterDetails_Movie_desc_div}>
                <p className={styles.PosterDetails_Movie_desc} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste dolores nam soluta, nihil sunt porro ad ut cumque vero esse recusandae, laboriosam deserunt asperiores, obcaecati repudiandae rerum numquam eius consectetur!</p>
                <div className={styles.PosterDetails_genreRelease_div} >
                    <p className={styles.PosterDetails_genreRelease}  >{genre} . {releaseYear}</p>
                    <img className={styles.PosterDetails_tickmark_img} alt="tickmark" src="https://tv.apple.com/assets/badges/common-sense-onDark-small@2x-f3312938f6b7188fbf37701e3557e399.png"/>
                    <p>14+</p>
                    {/* <span role="img">TV-14</span>
                    <span role="img">4K</span>
                    <span role="img">CC</span>
                    <span role="img">AD</span>
                    <span role="img">SHD</span> */}
                </div>
            </div>

           {/* Starrings */}
            <div className={styles.PosterDetails_Starring_div} >
             <p className={styles.PosterDetails_Starring}><span style={{color:"rgba(255, 255, 255, 0.64)"}}>Starring </span>{starring.join(",")}</p>
            </div>
            
        </div>
    )
}