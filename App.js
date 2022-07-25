import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/textForm';
import About from './component/About';

import Alert from './component/Alert';
import React,{useState} from 'react'
import {BrowserRouter as Router,Switch,Route ,Redirect,}from 'react-router-dom';




function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState('null');
 

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  
  const toggleMode=()=>{
    if(mode==='light'){

      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
    }
  }
 
  return(
 <>
      <Router>
    <Navbar title="TextUtils"  abouttext="About"  mode={mode}  toggleMode={toggleMode}/>  
      <Alert   alert={alert}/>
      <div className="container my-3">
      <Switch>
      
      <Route  exact path='/about'>
          <About mode={mode}/>
          <Redirect to="/about" />
        </Route>
        <Route exact path='/'>
        <TextForm showAlert={showAlert} heading=" Try TextUtils- word counter,character counter , remove extra spaces" mode={mode}/>
        <Redirect to="/" />
        </Route>
       </Switch>

      </div>
       
        
         </Router>
     
   </>
    );
}
  

export default App;
