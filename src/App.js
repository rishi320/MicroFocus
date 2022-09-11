import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import SecondPage from './components/SecondPage';

function App() {
  const [secPag, setSecPage] = useState(false);
  const [borderHighlight, setBorderHighlight] = useState(false);
  const [position, setPosition]= useState("");
  
  
  return (
    <div className="App">
    {!secPag ? <>
      <Header position={position} setPosition={setPosition}/>
      <Home borderHighlight={borderHighlight} setBorderHighlight={setBorderHighlight} position={position} setPosition={setPosition}/>
      <Footer setSecPage={setSecPage}/>
    </> : <SecondPage setSecPage={setSecPage} setBorderHighlight={setBorderHighlight}/>}
      
    </div>
  );
}

export default App;
