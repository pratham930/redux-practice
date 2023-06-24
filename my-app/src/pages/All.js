import React,{useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { increment ,derement,remove,clear,getTotal,getTotalQuantity} from '../features/newKartSlice'
const All = () => {
    const dispatch =useDispatch()
    const cart = useSelector((state) => state.cart.backData)
    const total = useSelector((state) => state.cart.total)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
    console.log(cart,'5')
useEffect(() => {
    dispatch(getTotal())
    dispatch(getTotalQuantity())
}, [cart])

    console.log(total,'5')
    console.log(totalQuantity,'5')

    const obj = {name:"pomato",price:50,quantity:0}
    let newobj ={...obj,price:100}
    console.log(newobj)
  return (
    <div>
       total: {total}
       totalQuantity: {totalQuantity}
        {cart.map((e,i)=>{return(<div key={i}>{e.name}
        {e.quantity}
        {e.price}
            <button onClick={()=>dispatch(increment(i))} >incr</button>
            <button onClick={()=>dispatch(derement(i))} >derement</button>
            <button onClick={()=>dispatch(remove(i))} >remove</button>
        </div>)})}
        <button onClick={()=>dispatch(clear())} >clear</button>

    </div>
  )
}

export default All