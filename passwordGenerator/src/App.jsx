import { useCallback, useState, useEffect, useRef } from 'react';
import './App.css';

function App() {

  const [passLen, setPassLen] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  const passdRef = useRef(null);


  const passd = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&";

    for (let i = 0; i < passLen; i++) {

      let indx = Math.floor(Math.random() * str.length + 1);
      console.log(str.charAt(indx))
      password += str.charAt(indx);


    };
    setPass(password);
  }, [passLen, numAllowed, charAllowed]);


  const copyToClipBoard = useCallback(()=> {
    passdRef.current?.select();
    passdRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(pass);
  }, [])


  useEffect(()=> {
    passd();
  },[passLen, numAllowed, charAllowed, passd]);

  return (
    <>

      <div className=' bg-gray-700 text-white max-w-2xl mb-5 boarder-solid rounded-lg px-4 my-8 shadow-md mx-auto'>

        <h1 className=' text-3xl text-center text-white mb-5'>Password Generator</h1>

        <div className=' shadow rounded-lg overflow-hidden mb-5'>

          <div className='flex items-center'>
            <input type="text" value={pass} ref={passdRef} className=' text-orange-700 outline-none w-full pr-2 max-h-15' placeholder='Password' readOnly />
            <button className='outline-none text-sm bg-blue-600 text-white px-2 py-1 shrink-0' onClick={copyToClipBoard}>Copy</button>
          </div>
        </div>

        <div className='flex items-center gap-x-1 mt-5'>

          <div className='flex items-center text-sm gap-x-1 '>
            <input type="range" className=' cursor-pointer' min={8} max={16} value={passLen} onChange={(e) => setPassLen(e.target.value)} />
            <label className=' text-lg text-white' >Length:{passLen}</label>
          </div>

          <div className='flex items-center text-sm gap-x-1 '>
            <input type="checkbox" className=' cursor-pointer' min={8} max={16} value={passLen} onChange={() => {
              setNumAllowed((d) => !d);
            }} />
            <label className='' defaultChecked={setNumAllowed} >Number</label>
          </div>

          <div className='flex items-center text-sm gap-x-1 '>
            <input type="checkbox" className=' cursor-pointer' min={8} max={16} value={passLen} onChange={() => {
              setCharAllowed((d) => !d);
            }} />
            <label className=' text-lg text-white' defaultChecked={setCharAllowed} >Charecter</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
