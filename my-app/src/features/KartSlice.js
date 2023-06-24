import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  kart: [
  {name:"tomato",price:10,quantity:0},
  {name:"pomato",price:10,quantity:0},
  {name:"toto",price:10,quantity:0}],
  total:null
}
export const kartSlice = createSlice({
  name: 'kart',
  initialState,
  reducers: {
    increase: (state,action) => {
      const newstate = state.kart.map((e,index)=>index===action.payload?{...e,quantity:e.quantity+1}:e)
      return {
        ...state,
        kart:newstate
      }
      // state.kart[action.payload] = {...state.kart[action.payload],quantity:state.kart[action.payload].quantity+1}
      // state.total =state.kart.reduce((acc,{quantity,price})=>{return(acc=acc+quantity*price)},0)
      // [...state.kart,quantity:]
      // state.kart += Number(action.payload)
    },
    decrease: (state,action) => {
      const newstate = state.kart.map((e,index)=>index===action.payload?{...e,quantity:e.quantity-1}:e)
      state.kart =newstate
    },
    clearAll: (state,action) => {
      return {
        ...state,kart:[]
      }
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})


export const { increase,decrease,clearAll } = kartSlice.actions

export default kartSlice.reducer