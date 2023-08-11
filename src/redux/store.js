import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import transactionsReducer from './features/transactionsSlice'
import monthTransactionsReducer from './features/monthTransactionsSlice'
import savingsReducer from './features/savingsSlice'
import otherInfoReducer from './features/otherInfoSlice'
import journalAPIReducer from './features/journalSlice'
import inversionsReducer from './features/inversionsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    journalAPI: journalAPIReducer,
    transactions: transactionsReducer,
    monthTransactions: monthTransactionsReducer,
    savings: savingsReducer,
    inversions: inversionsReducer,
    others: otherInfoReducer
  },
});
