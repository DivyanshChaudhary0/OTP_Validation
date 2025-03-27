import { useState } from 'react'
import './App.css'

function App() {
  const OTP_Length = 4;
  const [count, setCount] = useState(new Array(OTP_Length).fill(""));

  console.log(count);

  function handleOnChange(value,idx){
    let newCount = [...count];
    newCount[idx] = value;
    setCount(newCount)
  }

  return (
    <div>
      <h1>OTP Validation</h1>
      {
        count.map((input,idx) => (
          <input 
            key={idx}
            className='input-group'
            type="text" 
            value={count[idx]}
            onChange={(e)=> handleOnChange(e.target.value,idx)}
          />
        ))
      }
    </div>
  )
}

export default App
