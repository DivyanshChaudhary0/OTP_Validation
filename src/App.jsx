import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const OTP_Length = 4;
  const [count, setCount] = useState(new Array(OTP_Length).fill(""));
  const refArr = useRef(new Array(OTP_Length).fill(null));


  useEffect(() => {
    refArr.current[0]?.focus();
  },[])


  function handleOnChange(value,idx){
    if(isNaN(value)) return;
    let newCount = [...count];
    newCount[idx] = value;
    setCount(newCount)

    if(value && idx < OTP_Length-1){
      refArr.current[idx+1].focus();
    }
  }

  return (
    <div>
      <h1>OTP Validation</h1>
      {
        count.map((input,idx) => (
          <input
            key={idx}
            ref={(el)=> (refArr.current[idx] = el)}
            className='input-group'
            type="text"
            value={count[idx]}
            onChange={(e)=> handleOnChange(e.target.value,idx)}
            onKeyDown={(e) => handleOnKeyDown(e,idx)}
            maxLength={1}
          />
        ))
      }
    </div>
  )
}

export default App
