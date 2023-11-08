import React, {useState} from "react";
import Alert from './Alert';
import Navbar from './components/Navbar';


export const PageLayout = ({children}) => {
    const [mode,setMode] = useState('light')  // whether darkmode enable or not
    const [alert, setalert] = useState(null);
  
    const showAlert = (message, type)=>{
      setalert({
        msg: message,
        type: type 
      })
      setTimeout(() => {
        setalert(null);
      }, 3000);
    }

    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = 'gray';
        showAlert("Dark mode has been enbled", "success");
        document.title = 'Deepak - Dark Mode';
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("light mode has been enbled", "success");
        document.title = 'Deepak - Light Mode';
      }
    }

    return(
        <>
            <Navbar title="Deepak" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            {children}
        </>
        
    )
}