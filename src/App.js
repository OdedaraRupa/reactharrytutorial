// import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState('light')
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
  const toogleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#000"
      showAlert("Dark Mode has been Enabled.","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "#fff"
      showAlert("Light Mode has been Enabled.","success")
    }
  }
  
  return (
    
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode= {toogleMode} ></Navbar>
      <Alert alert={alert} ></Alert>
      <TextForm heading="Enter the text to analyze below " mode={mode} showalert = {showAlert}></TextForm>
      {/* <About /> */}
    </>

  );
}

export default App;
