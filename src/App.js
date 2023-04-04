import { useState } from 'react';
import './App.css';
import Square from './Square';
import Input from './input';
function App() {
  const[colour,setColour]=useState("")
  const[hexValue,setHexValue]=useState("")
  const[isDark,setIsDark]=useState(true);
  return (
    <div className="App">
       <Square colour={colour}
         hexValue={hexValue}
         isDark={isDark}
      
       />
      <Input  
           colour={colour}
           setColour={setColour}
           setHexValue={setHexValue}
           isDark={isDark}
           setIsDark={setIsDark}
           />
     
    </div>
  );
}

export default App;
