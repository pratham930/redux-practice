import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './features/CounterSlice'
import KartReducer from './features/KartSlice'
import newKartSlice from './features/newKartSlice'
export const store = configureStore({
  reducer: {
    count:CounterReducer,
    kart:KartReducer,
    cart:newKartSlice
  },
})