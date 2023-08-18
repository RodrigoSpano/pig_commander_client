import { createSlice } from "@reduxjs/toolkit";
import {
  createExpense,
  createIncome,
  deleteExpense,
  deleteIncome,
  getAllTransactions,
  updateExpense,
  updateIncome,
  getFilterTransaction,
} from "../actions/transactionsActions";

const initialState = {
  transactions: [],
  backup_transactions: [],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    clearFilters: (state) => {
      state.transactions = [...state.backup_transactions];
    },
    orderNameAlphabetically: (state, action) => {
      if (action.payload === "aZ") {
        state.transactions = state.transactions.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        state.currentOrder = "aZ";
      } else if (action.payload === "zA") {
        state.transactions = state.transactions.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        state.currentOrder = "zA";
      }
    },
    orderAmount: (state, action) => {
      if (action.payload === "asc") {
        state.transactions = state.transactions.sort(
          (a, b) => a.amount - b.amount
        );
        state.currentOrder = "asc";
      } else if (action.payload === "desc") {
        state.transactions = state.transactions.sort(
          (a, b) => b.amount - a.amount
        );
        state.currentOrder = "desc";
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload.transactions;
      state.backup_transactions = action.payload.transactions;
    });
    builder.addCase(createExpense.fulfilled, (state, action) => {
      state.transactions.push({ ...action.payload, type: "expense" });
      state.backup_transactions.push({ ...action.payload, type: "expense" });
    });
    builder.addCase(createIncome.fulfilled, (state, action) => {
      state.transactions.push({ ...action.payload, type: "income" });
      state.backup_transactions.push({ ...action.payload, type: "income" });
    });
    builder.addCase(deleteIncome.fulfilled, (state, action) => {
      const filtered = state.transactions.filter(
        (el) => el.id !== action.payload
      );
      state.backup_transactions = filtered
      state.transactions = filtered

    });
    builder.addCase(deleteExpense.fulfilled, (state, action) => {
      const filtered = state.transactions.filter(
        (el) => el.id !== action.payload
      );
      state.transactions = filtered
      state.backup_transactions = filtered
    });

    builder.addCase(updateExpense.fulfilled, (state, action) => {
      let updatedArr = state.transactions.filter(
        (el) => el.id !== action.payload.id
      );
      state.transactions = updatedArr.push(action.payload);
    });
    builder.addCase(updateIncome.fulfilled, (state, action) => {
      let updatedArr = state.transactions.filter(
        (el) => el.id !== action.payload.id
      );
      state.transactions = updatedArr.push(action.payload);
    });
    builder.addCase(getFilterTransaction.fulfilled, (state, action) => {
      const filteredTransactions = state.backup_transactions.filter(
        (transaction) =>
          action.payload.some(
            (payloadTransaction) => payloadTransaction.id === transaction.id
          )
      );
      if (state.currentOrder === "aZ") {
        filteredTransactions.sort((a, b) => a.name.localeCompare(b.name));
      } else if (state.currentOrder === "zA") {
        filteredTransactions.sort((a, b) => b.name.localeCompare(a.name));
      } else if (state.currentOrder === "asc") {
        filteredTransactions.sort((a, b) => a.amount - b.amount);
      } else if (state.currentOrder === "desc") {
        filteredTransactions.sort((a, b) => b.amount - a.amount);
      }

      state.transactions = filteredTransactions;
    });
  },
});

export const {
  clearFilters,
  orderAmount,
  orderNameAlphabetically,
} = transactionsSlice.actions;
export default transactionsSlice.reducer;
