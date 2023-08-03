import { createSlice } from '@reduxjs/toolkit'
import { getAllTransactions } from '../actions/monthTransactionsActions'


const initialState = {
  incomes: [],
  expenses: [],
  transactions: [],
  backup_transactions: []
}


export const monthlyTransactionsSlice = createSlice({
  name: 'monthTransactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTransactions.fulfilled, (state, action) => {
      state.incomes = action.payload.incomes
      state.expenses = action.payload.expenses
      state.transactions = action.payload.transactions
      state.backup_transactions = action.payload.transactions
    })
  }
})

export default monthlyTransactionsSlice.reducer