import { useState } from "react";
import "./App.css"

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }

  const handleReset = () => {
    setCount(0);
  }

  const handleTheme = () => {
    setTheme(!theme);
  }

  


  return(
    <div className={theme ? "app dark" : "app light"}>
      <div className="container">
      <h1 className="title">Counter App</h1>

      <h2 className="count">{count}</h2>

      <div className="btn-group"> 
        <button 
          className="btn" onClick={handleIncrement}>
            Increment
        </button>

        <button 
          className="btn" onClick={handleDecrement} disabled={count === 0}>
            Decrement
        </button>

        <button className="btn" onClick={handleReset}>Reset</button>
      </div>

      <button className="theme-btn" onClick={handleTheme}>
         {theme ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  </div> 
  );
}

export default App;