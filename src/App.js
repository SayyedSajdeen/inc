import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
let inc= () =>{
  setCount(count +1)
}
let dec= () =>{
  setCount(count -1)
}
let res= () =>{
  setCount(count =0)
}
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={res}>Reset</button>
    </div>
  );
}

export default App;
