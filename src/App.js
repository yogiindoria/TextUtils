import './App.css'
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [btntxt, setbtntxt] = useState('Light Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      setbtntxt('Light Mode')
      showAlert('Dark mode has been enabled', 'dark');
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      setbtntxt('Dark Mode')
      showAlert('Light mode has been enabled', 'success');
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode={Mode} togglemode={toggleMode} btntxt={btntxt} />
      <Alert alert={alert} />
      <div className='container my-3' >
      <Routes>
        <Route exact path='/' element={<TextForm headings="Enter the text to Analyze" mode={Mode} showAlert={showAlert}/>}/>
        <Route exact path='/about' element={<About />} />  
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}
export default App;
