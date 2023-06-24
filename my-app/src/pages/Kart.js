import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux'
import { increase,decrease,clearAll } from '../features/KartSlice';

const Kart = () => {
    let { state } = useLocation();
    let dispatch = useDispatch();
    const kart = useSelector((state) => state.kart.kart)
    const sum = useSelector((state) => state.kart.total)
    console.log(kart,"kart")
    console.log(sum,"sum")
    const [data, setdata] = useState(kart)
const incr =(i)=>{
 let newdata = data.map((e,index)=>index===i?{...e,quantity:e.quantity+1}:e)

 setdata(newdata)
  console.log(i)
}
const clear =()=>{
 setdata([])
}
const decre =(i)=>{
  let newdata = data.map((e,index)=>index===i?{...e,quantity:e.quantity-1}:e)
  setdata(newdata)
}
const remove =(i)=>{
  let newdata = data.filter((e,index)=>index !==i)
  setdata(newdata)
}
const total = data.reduce((acc,v,index,arr)=>{
   return(acc=acc+v.quantity*v.price)
},0)
console.log(total)
  return (
    <div>
      {total>0&&<h1>total:{total}</h1>}
      {kart.map(({name,quantity,price},index)=>{
return(
<div key={index} style={{display:"flex"}}><h1>{name}</h1>
  <h3>quantity:{quantity}</h3>
  <h4>price:{price}</h4>
  <button style={{width:"50px",height:"30px",color:"green"}} onClick={()=>dispatch(increase(index))}>increase</button>
  <button style={{width:"50px",height:"30px",color:"green"}} onClick={()=>dispatch(decrease(index))}>decrease</button>
  <button style={{width:"50px",height:"30px",color:"green"}} onClick={()=>incr(index)}>incr</button>
  <button style={{width:"50px",height:"30px",color:"yellow"}} onClick={()=>decre(index)}>decre</button>
  <button style={{width:"50px",height:"30px",color:"red"}} onClick={()=>remove(index)}>remove</button>
  </div>)
})}
       <button style={{width:"50px",height:"30px",color:"orange"}} onClick={()=>clear()}>clear</button>   
       <button style={{width:"50px",height:"30px",color:"orange"}} onClick={()=>dispatch(clearAll())}>clearAll</button>   
      </div>
  )
}

export default Kart