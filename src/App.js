// import About from './components/About';
import React,{ useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState('light')
  const toogleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#000"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "#fff"
    }
  }
  
  return (
    
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode= {toogleMode} ></Navbar>
      <TextForm heading="Enter the text to analyze below " mode={mode}></TextForm>
      {/* <About /> */}
    </>

  );
}

export default App;
