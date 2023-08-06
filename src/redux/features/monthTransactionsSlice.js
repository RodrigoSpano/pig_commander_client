import { createSlice } from "@reduxjs/toolkit";
import { getAllTransactions } from "../actions/monthTransactionsActions";

const initialState = {
  transactions: [],
  backup_transactions: [],
};

const transactionsTypes = {
  expense: 'expense',
  income: 'income'
}

export const monthlyTransactionsSlice = createSlice({
  name: "monthTransactions",
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
    },
    orderNameAlphabetically: (state, action) => {
      if (action.payload === 'aZ') {
        state.transactions = state.backup_transactions.sort((a, b) => a.name.localeCompare(b.name))
      } else if (action.payload === 'zA') {
        state.transactions = state.backup_transactions.sort((a, b) => b.name.localeCompare(a.name))
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTransactions.fulfilled, (state, action) => {
      state.transactions = action?.payload;
      state.backup_transactions = action?.payload;
    })

  },
});

export const { clearFilters, filterByType, orderNameAlphabetically } = monthlyTransactionsSlice.actions;

export default monthlyTransactionsSlice.reducer;