import React,{useState, useEffect} from 'react';
import "./Header.css";

function Header({position,setPosition}) {
  const date = new Date();
  const [time, setTime] = useState({
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  });

  useEffect(() => {
    const timer = setInterval(()=>{
      const currentDate = new Date();
      setTime({
        hour: currentDate.getHours(),
        minute: currentDate.getMinutes(),
        second: currentDate.getSeconds()
      })
    }, 1000)
  
    return () => clearInterval(time)
    
  }, [])
  

  return (
    <div className='header'>
      <div className="position">
      <h2>Position</h2>
      <div onChange={(e)=>{
        setPosition(e.target.value);
      }}>

      <input id="center" type="radio" name='position' value="center" checked={position === "center"}/>
      <label for="center">Center</label>
      <input id="right-bottom" type="radio"  name='position' value="right-bottom" checked={position === "right-bottom"}/>
      <label for="right-bottom">Bottom Right</label>
      </div>
      </div>
    <div className="esc_text">
    Press Esc key to hide or show the floting block.
    </div>
    <div className="clock">
    {time.hour}:{time.minute}:{time.second}
    </div>
    </div>
  )
}

export default Header