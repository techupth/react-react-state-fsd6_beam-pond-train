import "./App.css";
import { useState } from "react";

function App() {
  const [sayHi, setSayHi] = useState('Greeting Message');

  const greetingChange = (message) => {
    setSayHi(message)
  }
 

  
  return (
    <div className="App">
      <div className="greeting-container" >{sayHi}</div>
      <div className="buttons">
        <button onClick={() => greetingChange('สวัสดี!')}>สวัสดี!</button>
        <button onClick={() => greetingChange('Hi!')} >Hi!</button>
        <button onClick={() => greetingChange('你好!')} >你好!</button>
      </div>
    </div>
  );
}

export default App;
