import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './features/CounterSlice'
import KartReducer from './features/KartSlice'
export const store = configureStore({
  reducer: {
    count:CounterReducer,
    kart:KartReducer
  },
})