import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  kart: [{name:"tomato",price:10,quantity:20}],
  total:null
}
export const kartSlice = createSlice({
  name: 'kart',
  initialState,
  reducers: {
    increment: (state,action) => {
      state.value += Number(action.payload)
    },
    multi: (state,action) => {
      state.value *= Number(action.payload)
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})


export const { increment,multi } = kartSlice.actions

export default kartSlice.reducer