import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
  return (
    <div className='App' >
        <h1>
            home
        {count}
        </h1>
        <button onClick={()=>setCount(count+1)}> increase</button>
        <button onClick={()=>setCount(count-1)}> decr</button>
        <button onClick={()=>navigate("/Kart",{ state: count })}> kart</button>
    </div>
  )
}

export default Home