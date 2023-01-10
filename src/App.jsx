import { useState } from 'react';
import Translator from "./components/Translator"

import './App.css';


function App() {

  const [text, setText] = useState("");
  const [language, setLanguage] = useState("tam");

  return (
    <div className="App">
      <div className="appbar">Language - Translator PoC</div>
    
      <input type="text" placeholder='Enter Text' onChange={(e) => setText(e.target.value)} />
    <select name="" id="" defaultValue={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="es">Spanish</option>
      <option value="tam">Tamil</option>
      <option value="hi">Hindi</option>

    </select>

    <Translator text={text} language={language}></Translator>
     
    </div>
  );
}

export default App;
