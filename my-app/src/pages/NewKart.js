import React,{useState} from 'react'
import { increase } from '../features/KartSlice'

const NewKart = () => {
    const backData = [
    {name:"pomato",price:50,quantity:0},
    {name:"tomato",price:450,quantity:0},
    {name:"toto",price:500,quantity:0},
    {name:"mato",price:150,quantity:0}
]


const [Data, setData] = useState(backData)

const increase =(index)=>{
    console.log("incr",'14',index,Data[index])
let newdata = Data.map((o,i)=>i===index?{...o,quantity:o.quantity+1}:o)
console.log(newdata,'16')
setData(newdata)
}

const decrease =(index)=>{
console.log(index)
let newdata = Data.map((o,i)=>i===index?{...o,quantity:o.quantity-1}:o)
setData(newdata)
}
const remove =(index)=>{
console.log(index)
    let newdata = Data.filter((o,i)=>i!==index)
    console.log(newdata,'28')
    setData(newdata)
}

const clear = ()=>{
    setData([])
}
// let sum = 0
// let newsum =Data.map((e,i)=>{
//     sum +=e.price*e.quantity
// })
// console.log(sum,'39')

const sum = Data.reduce((acc,{price,quantity})=>{
    return acc=acc+price*quantity
},0)
console.log(sum,'39')

  return (
    <div>NewKart
        {sum}
{Data.map((e,i)=>{
    return(<div key={i}>
<h1>{e.name}  </h1>
price:{e.price}
quantity:{e.quantity}
<button onClick={()=>increase(i)} >incre</button>
<button onClick={()=>decrease(i)} >decre</button>
<button onClick={()=>remove(i)} >remove</button>
    </div>)
})}
{/* <button onClick={()=>remove(2)} >remove2</button> */}
<button onClick={()=>clear()} >clear</button>

    </div>
  )
}

export default NewKart