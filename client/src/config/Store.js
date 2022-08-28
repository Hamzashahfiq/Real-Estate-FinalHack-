import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../store/AuthSlice'
import ProductSlice from '../store/ProductSlice'

export const Store = configureStore({
  reducer: {
    AuthSlice,
    ProductSlice
  },
})