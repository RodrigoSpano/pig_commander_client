import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import transactionsReducer from './features/transactionsSlice'
import monthTransactionsReducer from './features/monthTransactionsSlice'
import savingsReducer from './features/savingsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionsReducer,
    monthTransactions: monthTransactionsReducer,
    savings: savingsReducer
  },
})