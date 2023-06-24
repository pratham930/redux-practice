import React,{useState} from 'react'
const Cart = () => {
   const kart= [
        {name:"tomato",price:10,quantity:0},
        {name:"pomato",price:10,quantity:0},
        {name:"toto",price:10,quantity:0}]
     const [data, setdata] = useState(kart)
        const incr =(i)=>{
            // let newdata = data.map((e,index)=>index===i?{...e,quantity:e.quantity+1}:e)
            // let newdata =[...data, {...data[i],quantity:data[i].quantity+1}]
            data[i]={...data[i],quantity:data[i].quantity+1}
            setdata([...data])
             console.log(i,data)
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
  return (
    <div>Cart

  {data.map(({name,quantity,price},index)=>{
  return(
      <div key={index} style={{display:"flex"}}><h1>{name}</h1>
  <h3>quantity:{quantity}</h3>
  <h4>price:{price}</h4>
  <button style={{width:"50px",height:"30px",color:"green"}} onClick={()=>incr(index)}>incr</button>
  <button style={{width:"50px",height:"30px",color:"yellow"}} onClick={()=>decre(index)}>decre</button>
  <button style={{width:"50px",height:"30px",color:"red"}} onClick={()=>remove(index)}>remove</button>
  </div>)
     })}

    </div>
  )
}

export default Cart