import React from 'react'

export default function Example() {
    // console.log("Channa")
    const id= "ZPYUpfIoM9w"
  return (
    <div>

<div className="video-responsive" onClick={()=>console.log("channa")}>

    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded image"
    />
     {/* <video  src={`https://www.youtube.com/embed/${id}`} /> */}
  </div>
    </div>
  )
}


// {
//     id : 1 , 
//     data : "ZPYUpfIoM9w"
// }

