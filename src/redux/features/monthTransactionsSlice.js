import { createSlice } from "@reduxjs/toolkit";
import { getAllTransactions } from "../actions/monthTransactionsActions";
import { ScatterChart } from "@tremor/react";

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
    },
    orderMount: (state, action) => {
      if (action.payload === 'asc') {
        state.transactions = state.backup_transactions.sort((a, b) => a.mount - b.mount)
      } else if (action.payload === 'desc') {
        state.transactions = state.backup_transactions.sort((a, b) => b.mount - a.mount)
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

export const { clearFilters, filterByType, orderNameAlphabetically, orderMount } = monthlyTransactionsSlice.actions;

export default monthlyTransactionsSlice.reducer;