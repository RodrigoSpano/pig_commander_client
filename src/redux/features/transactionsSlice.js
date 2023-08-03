import { createSlice } from '@reduxjs/toolkit'
import { createExpense, createIncome, deleteExpense, deleteIncome, getAllTransactions, updateExpense, updateIncome } from '../actions/transactionsActions'


const initialState = {
  incomes: [],
  expenses: [],
  transactions: [],
  backup_transactions: []
}

const sortTransactions = () => {
  let updatedTransactions = [...state.expenses, state.incomes].sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
  state.transactions = updatedTransactions
  state.backup_transactions = updatedTransactions
}

export const monthlyTransactionsSlice = createSlice({
  name: 'monthTransactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTransactions.fulfilled, (state, action) => {
      state.expenses = action.payload.expenses
      state.incomes = action.payload.incomes
      state.transactions = action.payload.transactions
      state.backup_transactions = action.payload.transactions
    })
    builder.addCase(createExpense.fulfilled, (state, action) => {
      state.expenses.push(action.payload).sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
      sortTransactions()
    })
    builder.addCase(createIncome.fulfilled, (state, action) => {
      state.incomes.push(action.payload).sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
      sortTransactions()
    })
    builder.addCase(deleteIncome.fulfilled, (state, action) => {
      state.incomes = state.incomes.filter(el => el.id !== action.payload)
      sortTransactions()
    })
    builder.addCase(deleteExpense.fulfilled, (state, action) => {
      state.expenses = state.expenses.filter(el => el.id !== action.payload)
      sortTransactions()
    })
    builder.addCase(updateExpense.fulfilled, (state, action) => {
      let updatedArr = state.expenses.filter(el => el.id !== action.payload.id)
      state.expenses = updatedArr.push(action.payload).sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
      sortTransactions()
    })
    builder.addCase(updateIncome.fulfilled, (state, action) => {
      let updatedArr = state.incomes.filter(el => el.id !== action.payload.id)
      state.incomes = updatedArr.push(action.payload).sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
      sortTransactions()
    })
  }
})

export default monthlyTransactionsSlice.reducer