import React,{useState} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { increment } from '../features/CounterSlice'

const Contact = () => {
  const dispatch = useDispatch()
    const count = useSelector((state) => state.count.value)
    const [input, setinput] = useState()
  return (
    <div>Contact {count} 
<input type="text" onChange={(e)=>setinput(e.target.value)} />
    <button onClick={()=>dispatch(increment(input))}>increase</button>

    </div>
  )
}

export default Contact