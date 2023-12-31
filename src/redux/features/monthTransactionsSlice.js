import { createSlice } from "@reduxjs/toolkit";
import { deleteExpenseMonth, deleteIncomeMonth, getAllTransactions } from "../actions/monthTransactionsActions";

const initialState = {
  transactions: [],
  backup_transactions: [],
  currentOrder: null,
};

export const monthlyTransactionsSlice = createSlice({
  name: "monthTransactions",
  initialState,
  reducers: {
    clearFilters: (state) => {
      if (state.currentOrder) {
        state.transactions = [...state.backup_transactions];
      }
    },
    filterByType: (state, action) => {
      let filteredTransactions = state.backup_transactions;

      if (state.currentOrder === 'aZ') {
        filteredTransactions = filteredTransactions.sort((a, b) => a.name.localeCompare(b.name));
      } else if (state.currentOrder === 'zA') {
        filteredTransactions = filteredTransactions.sort((a, b) => b.name.localeCompare(a.name));
      } else if (state.currentOrder === 'asc') {
        filteredTransactions = filteredTransactions.sort((a, b) => a.amount - b.amount);
      } else if (state.currentOrder === 'desc') {
        filteredTransactions = filteredTransactions.sort((a, b) => b.amount - a.amount);
      }

      state.transactions = filteredTransactions.filter(t => t.type === action.payload);
    },
    orderNameAlphabetically: (state, action) => {
      if (action.payload === 'aZ') {
        state.transactions = state.transactions.sort((a, b) => a.name.localeCompare(b.name));
        state.currentOrder = 'aZ';
      } else if (action.payload === 'zA') {
        state.transactions = state.transactions.sort((a, b) => b.name.localeCompare(a.name));
        state.currentOrder = 'zA';
      }
    },
    orderAmount: (state, action) => {
      if (action.payload === 'asc') {
        state.transactions = state.transactions.sort((a, b) => a.amount - b.amount);
        state.currentOrder = 'asc';
      } else if (action.payload === 'desc') {
        state.transactions = state.transactions.sort((a, b) => b.amount - a.amount);
        state.currentOrder = 'desc';
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTransactions.fulfilled, (state, action) => {
      state.transactions = action?.payload;
      state.backup_transactions = action?.payload;
      state.currentOrder = null;
    });

    builder.addCase(deleteIncomeMonth.fulfilled, (state, action) => {
      const filteredArray = state.transactions.filter(
        (el) => el.id !== action.payload
      );
      state.backup_transactions = filteredArray
      state.transactions = filteredArray
    });

    builder.addCase(deleteExpenseMonth.fulfilled, (state, action) => {
      const filteredArray = state.transactions.filter(
        (el) => el.id !== action.payload
      );
      state.transactions = filteredArray
      state.backup_transactions = filteredArray
    });


  },
});

export const { clearFilters, filterByType, orderNameAlphabetically, orderAmount } = monthlyTransactionsSlice.actions;

export default monthlyTransactionsSlice.reducer;
