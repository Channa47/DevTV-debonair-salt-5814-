import styles from "./PosterVideo.module.css"

export default function PosterVideo({singleMovie}){
  
    return(
        <div className={styles.iframe_div} >
            <iframe className={styles.iframe}
            src={`https://www.youtube.com/embed/${singleMovie?.emdeddata}`}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>
            
        </div>
        )
}