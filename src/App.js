import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,  
} from "react-router-dom";
function App() {
  const [background,setBackgound] = useState('');
  const changeBg = (color) => {
    setBackgound(color);
    
  }
  const [alert,setAlert] = useState("")
  const showAlert = (message,type) => {
    setAlert({
      msg:  message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  
  return (
    
    <>
      <div className={`${background}`}  >
      
     
        <BrowserRouter>
        <Alert alert={alert} ></Alert>
        <Navbar title="TextUtils"  changeBg={changeBg} background={background}></Navbar>
          <Routes>
          <Route path="/" element={ <TextForm heading="Enter the text to analyze below "  showalert = {showAlert}></TextForm>} />

          <Route path="/about" element={<About />} />

          
          </Routes>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
// #0a022c