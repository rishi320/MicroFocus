import React from 'react';
import "./SecondPage.css";

function SecondPage({setSecPage,setBorderHighlight}) {
  return (
    <div className='main-content'>
    <p className='main-heading'>Heavy Rains in Bengaluru</p>
    <p className='body-content'>
    In the past week, weather news was dominated in the country by visuals of Bengaluru flooding. Intense rains, which started Sunday night and persisted till Monday morning, led to a deluge as high levels of water was dumped on a city starved of drains and emptied of natural water bodies.
    </p>
    <p className='body-content'>
    The flooding was immediate and intense, leading to people wading through waters within minutes. Large parts of the city were submerged.
    </p>
    <p className='body-content'>In just 12 hours, the city received 13.16 cm of rain according to the meteorological office. Many areas were under knee-deep waters, and even up to the waist level. Low-lying areas were completely inundated, with stranded residents needing to be evacuated by tractors and boats. The city came to a halt Monday.</p>
    <button className="back-button" onClick={()=>{
        setBorderHighlight(true)
    setSecPage(false)}}>Go to main page</button>
    </div>
  )
}

export default SecondPage