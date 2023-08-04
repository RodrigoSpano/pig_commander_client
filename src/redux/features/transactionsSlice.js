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

const sortTransactions = () => {
  const sortedArr = state.transactions.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
  state.transactions = sortedArr
  state.backup_transactions = sortedArr
}

export const monthlyTransactionsSlice = createSlice({
  name: 'monthTransactions',
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
      sortTransactions()
    })
    builder.addCase(createIncome.fulfilled, (state, action) => {
      state.transactions.push(action.payload)
      sortTransactions()
    })
    builder.addCase(deleteIncome.fulfilled, (state, action) => {
      state.transactions = state.transactions.filter(el => el.id !== action.payload)
      sortTransactions()
    })
    builder.addCase(deleteExpense.fulfilled, (state, action) => {
      state.transactions = state.transactions.filter(el => el.id !== action.payload)
      sortTransactions()
    })
    builder.addCase(updateExpense.fulfilled, (state, action) => {
      let updatedArr = state.transactions.filter(el => el.id !== action.payload.id)
      state.transactions = updatedArr.push(action.payload)
      sortTransactions()
    })
    builder.addCase(updateIncome.fulfilled, (state, action) => {
      let updatedArr = state.transactions.filter(el => el.id !== action.payload.id)
      state.transactions = updatedArr.push(action.payload)
      sortTransactions()
    })
  }
})

export const { clearFilters, filterByType } = monthlyTransactionsSlice.actions
export default monthlyTransactionsSlice.reducer