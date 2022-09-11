import React, { useState, useEffect } from 'react';
import "./Home.css";
import useDraggable from './useDraggable';

function Home({borderHighlight, setBorderHighlight, position,setPosition}) {
  const [ref, x, y, isDragging] = useDraggable(setBorderHighlight, setPosition);
  const [toggle, setToggle] = useState(false);
  
  if(position === "center" && ref.current){
   ref.current.style.left = "50%";
   ref.current.style.top = "50%";
   ref.current.style.transform = "translate(-50%, -50%)";
  } else if(position ==="right-bottom" && ref.current){
    ref.current.style.left = "80%";
    ref.current.style.top = "70%";

  } else if(position === "middle" && ref.current){
    ref.current.style.left = "50%";
    ref.current.style.top = "200px";
  }

  useEffect(() => {
    document.addEventListener("keyup",(e)=>{

      if(e.code == "Escape"){
        setToggle((prev)=>!prev)
      }
  
    })

  }, [])
  
  return (
    <div className='home'>
    <div className="draggable_div" ref={ref}
      style={{
        display: toggle ? "none" : 'block',
        border:borderHighlight ? "2px solid blue": "0px",
        position: "absolute",
        left: x !== 0 ? x : "50%",
        top: y!==0 ? y : "50%",
        transform: x=== 0 ? "translate(-50%, -50%)" : "none"
      }}>
      <p style={{
        padding:"5px"
      }}>{isDragging ? "Floting" : "Fixed"}</p>
      <p style={{
        position:"absolute",
        bottom:"0",
        right:"10px"
      }}>Drag me around</p>
    </div>
    </div>
  )
}

export default Home