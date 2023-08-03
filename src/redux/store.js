import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import transactionsReducer from './features/transactionsSlice'
import monthTransactionsReducer from './features/monthTransactionsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionsReducer,
    monthTransactions: monthTransactionsReducer
  },
})