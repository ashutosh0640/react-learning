import { useState } from 'react'
import './App.css'

function App() {

  let [color, setColor] = useState("#654321")
  
  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center top-12 inset-x-0'>
          
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl text-white'>
            
            <button className='outline-none px-4 rounded-lg' style={{background:"#ffbf00"}} onClick={()=>setColor("#ffbf00")}>Amber</button>

            <button className='outline-none px-4 rounded-lg' style={{background:"#e52b50"}} onClick={()=>setColor("#e52b50")}>Amaranth</button>

            <button className='outline-none px-4 rounded-lg' style={{background:"#a4c639"}} onClick={()=>setColor("#a4c639")}>Android Green</button>

            <button className='outline-none px-4 rounded-lg' style={{background:"#a52a2a"}} onClick={()=>setColor("#a52a2a")}>Auburn</button>

            <button className='outline-none px-4 rounded-lg' style={{background:"#fdee00"}} onClick={()=>setColor("#fdee00")}>Aureolin</button>

            <button className='outline-none px-4 rounded-lg' style={{background:"#4b5320"}} onClick={()=>setColor("#4b5320")}>Army Green</button>

            <button className='outline-none px-4 rounded-lg' style={{background:"#000000"}} onClick={()=>setColor("#000000")}>Black</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
