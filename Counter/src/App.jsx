import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter, setCount] = useState(10);

  const addButton=()=>{
    setCount(counter+1);
    console.log("Added");
  }
  const removeButton=()=>{
    setCount(counter-1);
    console.log("Removed");

  }

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={addButton}>+1</button>
      <br></br>
      <button onClick={removeButton}>-1</button>
      
    </>
  )
}

export default App