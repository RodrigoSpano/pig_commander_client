import { createSlice } from '@reduxjs/toolkit'
import { createExpense, createIncome, deleteExpense, deleteIncome, getAllTransactions, updateExpense, updateIncome } from '../actions/transactionsActions'


const initialState = {
  transactions: [],
  backup_transactions: []
}

const transactionsTypes = {
  expense: 'expense',
  income: 'income'
}



export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    clearFilters: (state) => {
      state.transactions = [...state.backup_transactions]
    },
    filterByType: (state, action) => {
      if (action.payload === transactionsTypes.expense) {
        state.transactions = state.backup_transactions.filter(t => t.type === transactionsTypes.expense)
      } else if (action.payload === transactionsTypes.income) {
        state.transactions = state.backup_transactions.filter(t => t.type === transactionsTypes.income)
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload.transactions
      state.backup_transactions = action.payload.transactions
    })
    builder.addCase(createExpense.fulfilled, (state, action) => {
      state.transactions.push(action.payload)
    })
    builder.addCase(createIncome.fulfilled, (state, action) => {
      state.transactions.push(action.payload)
    })
    builder.addCase(deleteIncome.fulfilled, (state, action) => {
      state.transactions = state.transactions.filter(el => el.id !== action.payload)
    })
    builder.addCase(deleteExpense.fulfilled, (state, action) => {
      state.transactions = state.transactions.filter(el => el.id !== action.payload)
    })
    builder.addCase(updateExpense.fulfilled, (state, action) => {
      let updatedArr = state.transactions.filter(el => el.id !== action.payload.id)
      state.transactions = updatedArr.push(action.payload)
    })
    builder.addCase(updateIncome.fulfilled, (state, action) => {
      let updatedArr = state.transactions.filter(el => el.id !== action.payload.id)
      state.transactions = updatedArr.push(action.payload)
    })
  }
})

export const { clearFilters, filterByType } = transactionsSlice.actions
export default transactionsSlice.reducer