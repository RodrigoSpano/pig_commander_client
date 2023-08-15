import { createSlice } from "@reduxjs/toolkit";
import {
  createExpense,
  createIncome,
  deleteExpense,
  deleteIncome,
  getAllTransactions,
  updateExpense,
  updateIncome,
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
    filterByType: (state, action) => {
      let filteredTransactions = state.backup_transactions;

      if (state.currentOrder === "aZ") {
        filteredTransactions = filteredTransactions.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (state.currentOrder === "zA") {
        filteredTransactions = filteredTransactions.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      } else if (state.currentOrder === "asc") {
        filteredTransactions = filteredTransactions.sort(
          (a, b) => a.amount - b.amount
        );
      } else if (state.currentOrder === "desc") {
        filteredTransactions = filteredTransactions.sort(
          (a, b) => b.amount - a.amount
        );
      }

      state.transactions = filteredTransactions.filter(
        (t) => t.type === action.payload
      );
    },
    filterByMethod: (state, action) => {
      let filteredTransactions = state.backup_transactions;

      if (state.currentOrder === "aZ") {
        filteredTransactions = filteredTransactions.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (state.currentOrder === "zA") {
        filteredTransactions = filteredTransactions.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      } else if (state.currentOrder === "asc") {
        filteredTransactions = filteredTransactions.sort(
          (a, b) => a.amount - b.amount
        );
      } else if (state.currentOrder === "desc") {
        filteredTransactions = filteredTransactions.sort(
          (a, b) => b.amount - a.amount
        );
      }

      state.transactions = filteredTransactions.filter(
        (t) => t.method_id === parseInt(action.payload)
      );
    },
    filterByCategory: (state, action) => {
      let filteredTransactions = state.backup_transactions;

      if (state.currentOrder === "aZ") {
        filteredTransactions = filteredTransactions.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (state.currentOrder === "zA") {
        filteredTransactions = filteredTransactions.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      } else if (state.currentOrder === "asc") {
        filteredTransactions = filteredTransactions.sort(
          (a, b) => a.amount - b.amount
        );
      } else if (state.currentOrder === "desc") {
        filteredTransactions = filteredTransactions.sort(
          (a, b) => b.amount - a.amount
        );
      }

      state.transactions = filteredTransactions.filter(
        (t) => t.category_id === parseInt(action.payload)
      );
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
      console.log(action.payload);
      state.transactions = action.payload.transactions;
      state.backup_transactions = action.payload.transactions;
    });
    builder.addCase(createExpense.fulfilled, (state, action) => {
      state.transactions.push({ ...action.payload, type: "expense" });
    });
    builder.addCase(createIncome.fulfilled, (state, action) => {
      state.transactions.push({ ...action.payload, type: "income" });
    });
    builder.addCase(deleteIncome.fulfilled, (state, action) => {
      console.log(action)
      state.transactions = state.transactions.filter(
        (el) => el.id !== action.payload
      );
    });
    builder.addCase(deleteExpense.fulfilled, (state, action) => {
      console.log(action.payload)
      state.transactions = state.transactions.filter(
        (el) => el.id !== action.payload
      );
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
  },
});

export const {
  clearFilters,
  filterByCategory,
  filterByMethod,
  filterByType,
  orderAmount,
  orderNameAlphabetically,
} = transactionsSlice.actions;
export default transactionsSlice.reducer;
