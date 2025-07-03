
// import "./App.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home";



function App() {
  
 const [headerColor, setHeaderColor] = useState('')

  useEffect(() => {
     // Get the computed style of the body element
     const computedStyle = window.getComputedStyle(document.body);
     // Get the background-color property
     const currentBgColor = computedStyle.getPropertyValue('background-color');
     console.log(currentBgColor)
     if(currentBgColor =="white"){
 
     }
     setHeaderColor(currentBgColor);
   }, []);
  return (
    <>
      <Home/>
    </>
  );
}

export default App;
