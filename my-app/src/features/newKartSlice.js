import { createSlice } from '@reduxjs/toolkit'
const initialState = {
     backData : [
        {name:"pomato",price:50,quantity:0},
        {name:"tomato",price:450,quantity:0},
        {name:"toto",price:500,quantity:0},
        {name:"mato",price:150,quantity:0}
    ],
    total:null,
    totalQuantity:null
}
export const newKartSlice = createSlice({
  name: 'newSlice',
  initialState,
  reducers: {
    increment: (state,action) => {
      let newdata = state.backData.map((e,i)=>i==action.payload?{...e,quantity:e.quantity+1}:e)
    //   const sum = state.backData.reduce((acc,{price,quantity})=>{
    //     return acc=acc+price*quantity
    // },0)

      return{
        ...state,backData:newdata
     }
    },
    derement: (state,action) => {
      let newdata = state.backData.map((e,i)=>i==action.payload?{...e,quantity:e.quantity-1}:e)
      return{
        ...state,backData:newdata
     }
    },
    remove: (state,action) => {
      let newdata = state.backData.filter((e,i)=>i!==action.payload)
      return{
        ...state,backData:newdata
     }
      
    },
    clear: (state,action) => {
     return{
        ...state,backData:[]
     }
    },

    getTotal: (state,action) => {
        const sum = state.backData.reduce((acc,{price,quantity})=>{
            return acc=acc+price*quantity
        },0)
        return {
            ...state,total:sum
        }
    },
    getTotalQuantity: (state,action) => {
        const sum = state.backData.reduce((acc,{price,quantity})=>{
            return acc=acc+quantity
        },0)
        return {
            ...state,totalQuantity:sum
        }
    },


    // addcart: (state,action) => {
    //   state.backData = action.payload
    // },

  },
})

export const { increment,derement,remove,clear,getTotal,getTotalQuantity} = newKartSlice.actions

export default newKartSlice.reducer