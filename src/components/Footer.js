import React from 'react'

function Footer({setSecPage}) {
  return (
    <div className='footer' style={{
      width:"100%",
      height:"70px",
      backgroundColor:"#22223b",
      position:"fixed",
      bottom:"0",
      color:"#F2E9E4",
      textAlign:"center"
    }}>
      <button style={{
        cursor:"pointer",
        border:"1px solid #F2E9E4",
        marginTop:"10px"
      }} onClick={()=>setSecPage(true)}>Go to page 2</button>
    </div>
  )
}

export default Footer