import { useState } from 'react'
import './App.css'

function App() {
  let counter = 5;

  const addValue = () => {
    console.log("clicked", Math.random(),"  ",counter);
    
    counter = counter + 1;
    
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button>Remove value</button>
    </>
  )
}

export default App
