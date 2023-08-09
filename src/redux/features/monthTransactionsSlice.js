// import { createSlice } from "@reduxjs/toolkit";
// import { getAllTransactions } from "../actions/monthTransactionsActions";

// const initialState = {
//   transactions: [],
//   backup_transactions: [],
// };

// const transactionsTypes = {
//   expense: 'expense',
//   income: 'income'
// }

// export const monthlyTransactionsSlice = createSlice({
//   name: "monthTransactions",
//   initialState,
//   reducers: {
//     clearFilters: (state) => {
//       state.transactions = [...state.backup_transactions]
//     },
//     filterByType: (state, action) => {
//       if (action.payload === transactionsTypes.expense) {
//         state.transactions = state.backup_transactions.filter(t => t.type === transactionsTypes.expense)
//       } else if (action.payload === transactionsTypes.income) {
//         state.transactions = state.backup_transactions.filter(t => t.type === transactionsTypes.income)
//       } else {
//         state.transactions = state.backup_transactions
//       }
//     },
//     orderNameAlphabetically: (state, action) => {
//       if (action.payload === 'aZ') {
//         state.transactions = state.transactions.sort((a, b) => a.name.localeCompare(b.name))
//       } else if (action.payload === 'zA') {
//         state.transactions = state.transactions.sort((a, b) => b.name.localeCompare(a.name))
//       }
//     },
//     orderMount: (state, action) => {
//       if (action.payload === 'asc') {
//         state.transactions = state.transactions.sort((a, b) => a.mount - b.mount)
//       } else if (action.payload === 'desc') {
//         state.transactions = state.transactions.sort((a, b) => b.mount - a.mount)
//       }
//     }
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getAllTransactions.fulfilled, (state, action) => {
//       state.transactions = action?.payload;
//       state.backup_transactions = action?.payload;
//     })

//   },
// });

// export const { clearFilters, filterByType, orderNameAlphabetically, orderMount } = monthlyTransactionsSlice.actions;

// export default monthlyTransactionsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getAllTransactions } from "../actions/monthTransactionsActions";

const initialState = {
  transactions: [],
  backup_transactions: [],
  currentOrder: null,
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
        filteredTransactions = filteredTransactions.sort((a, b) => a.mount - b.mount);
      } else if (state.currentOrder === 'desc') {
        filteredTransactions = filteredTransactions.sort((a, b) => b.mount - a.mount);
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
    orderMount: (state, action) => {
      if (action.payload === 'asc') {
        state.transactions = state.transactions.sort((a, b) => a.mount - b.mount);
        state.currentOrder = 'asc';
      } else if (action.payload === 'desc') {
        state.transactions = state.transactions.sort((a, b) => b.mount - a.mount);
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
  },
});

export const { clearFilters, filterByType, orderNameAlphabetically, orderMount } = monthlyTransactionsSlice.actions;

export default monthlyTransactionsSlice.reducer;
