import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';

const Kart = () => {
    let { state } = useLocation();
    console.log(state,'state')
    const [count, setCount] = useState(state)
  return (
    <div>
        <h1>karts
{count}
<button onClick={()=>setCount(count+1)}> increase</button>


        </h1>
      </div>
  )
}

export default Kart