import "./App.css";
import { useState } from "react";
function App() {
  const [word, setWord] = useState("Greeting Message");
  const handleThaiClick = () => {
    setWord("สวัสดี!");
  };
  const handleEnglishClick = () => {
    setWord("Hello!");
  };
  const handlePoohClick = () => {
    setWord("你好!");
  };
  return (
    <div className="App">
      <div className="greeting-container">{word}</div>
      <div className="buttons">
        <button onClick={handleThaiClick}>สวัสดี!</button>
        <button onClick={handleEnglishClick}>Hi!</button>
        <button onClick={handlePoohClick}>你好!</button>
      </div>
    </div>
  );
}

export default App;
