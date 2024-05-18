import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {


  //Counter
  let [count, setCount] = useState(100);
  const addByOne = () => {
    setCount(count+1)
  }

  const subByOne = () => {
    setCount(count-1)
  }

  //Toggle button
  let [isOn, setOff] = useState('OFF');
  const switchButton = () => {
    if(isOn != 'ON') {
      setOff('ON')
      document.getElementById("root").style.backgroundColor="white"
    }else {
      setOff('OFF')
      document.getElementById("root").style.backgroundColor="black"
    }
  }

  
  //input update on change
  let [text, changeText] = useState('')
  let inputUpdate = (e) => {
    changeText(e.target.value)
  }

  return (
    <>
      <div>
        <button onClick={switchButton}>{isOn}</button> <br />
        <h1>Counter App</h1>
        <h3>The count is {count}</h3>
        <button onClick={addByOne}>Increase by +1</button>
        <button onClick={subByOne}>Decrease by -1</button>
        <h3>The count is {count}</h3>
        
        <input type="text" value={text} onChange={inputUpdate}/><p>{text}</p>
      </div>
      
    </>
  )
}

export default App
