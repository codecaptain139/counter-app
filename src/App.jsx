import { useState } from "react";
import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return(
    <div className="app">
      <div className="container">
      <h1 className="title">Counter App</h1>

      <h2 className="count">{count}</h2>

      <div className="btn-group"> 
        <button 
          className="btn" onClick={handleIncrement}>
            Increment
        </button>

        <button 
          className="btn" onClick={handleDecrement}>
            Decrement
        </button>
      </div>
    </div>
  </div> 
  );
}

export default App;