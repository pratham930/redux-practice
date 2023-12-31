import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: 100,
}
export const counterSlice = createSlice({
  name: 'counter',
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


export const { increment,multi } = counterSlice.actions

export default counterSlice.reducer