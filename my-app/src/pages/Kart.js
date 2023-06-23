import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux'


const Kart = () => {
    let { state } = useLocation();
    console.log(state,'state')
    const kart = useSelector((state) => state.kart.kart)
console.log(kart)
    const [count, setCount] = useState(state)
  return (
    <div>
      {kart.map(({name,quantity,price})=>{
return(
<><h1>{name}</h1>
  <h1>{quantity}</h1>
  <h1>{price}</h1>
  </>)
})}
        <h1>karts
{count}
<button onClick={()=>setCount(count+1)}> increase</button>


        </h1>
      </div>
  )
}

export default Kart