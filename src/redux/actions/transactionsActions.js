import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllIncomes = async (data) => {
  try {
    const modifiedData = data.map(el => {
      return {
        id: el.id,
        name: el.name,
        amount: el.amount,
        automatized: el.automatized,
        auto_date: el.auto_date,
        method_id: el.method_id,
        category_id: el.category_id,
        createdAt: el.createdAt,
        type: "income",
      };
    });
    return modifiedData;
  } catch (error) {
    if (error.response) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}
export const getAllExpenses = async (data) => {
  try {
    const modifiedData = data.map(el => {
      return {
        id: el.id,
        name: el.name,
        amount: el.amount,
        automatized: el.automatized,
        auto_date: el.auto_date,
        method_id: el.method_id,
        category_id: el.category_id,
        createdAt: el.createdAt,
        type: "expense",
      };
    });
    return modifiedData;
  } catch (error) {
    if (error.response) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
};

export const getAllTransactions = createAsyncThunk('transactions/all', async (token) => {
  try {
    const { data: incomeData } = await axios('/incomes', { headers: { 'Authorization': token } })
    const { data: expenseData } = await axios('/expenses', { headers: { 'Authorization': token } })
    const incomes = await getAllIncomes(incomeData)
    const expenses = await getAllExpenses(expenseData)
    const transactions = [...incomes, ...expenses].sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
    console.log(transactions)
    return { transactions }
  } catch (error) {
    console.log(error)
  }
})

export const createExpense = createAsyncThunk('expense/create', async (payload) => {
  try {
    const { token, ...expenseInfo } = payload;
    const { data } = await axios.post('/expenses', expenseInfo, { headers: { 'Authorization': token } })
    return data
  } catch (error) {
    console.log(error)
  }
});

export const createIncome = createAsyncThunk('income/create', async (payload) => {
  try {
    const { token, ...incomeInfo } = payload;
    const { data } = await axios.post('/incomes', incomeInfo, { headers: { 'Authorization': token } })
    return data
  } catch (error) {
    console.log(error)
  }
});

export const deleteExpense = createAsyncThunk('expense/delete', async (id, token) => {
  await axios.delete(`/expenses/${id}`, { headers: { 'Authorization': token } })
  return id
})

export const deleteIncome = createAsyncThunk('income/delete', async (id, token) => {
  await axios.delete(`/incomes/${id}`, { headers: { 'Authorization': token } })
  return id
})

export const updateExpense = createAsyncThunk('expense/update', async (id, newData, token) => {
  const { data } = await axios.put(`/expenses/${id}`, newData, { headers: { 'Authorization': token } })
  return data
})

export const updateIncome = createAsyncThunk('income/update', async (id, newData, token) => {
  const { data } = await axios.put(`/incomes/${id}`, newData, { headers: { 'Authorization': token } })
  return data
})
