import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllIncomes = async () => {
  try {
    const { data } = await axios('/incomes')
    const modifiedData = data.map(el => {
      return {
        id: el.id,
        name: el.name,
        mount: el.mount,
        automatized: el.automatized,
        auto_date: el.auto_date,
        method_id: el.method_id,
        category_id: el.category_id,
        createdAt: el.createdAt,
        type: 'income'
      }
    })
    return modifiedData
  } catch (error) {
    console.log(error)
  }
}
export const getAllExpenses = async () => {
  try {
    const { data } = await axios('/expenses')
    const modifiedData = data.map(el => {
      return {
        id: el.id,
        name: el.name,
        mount: el.mount,
        automatized: el.automatized,
        auto_date: el.auto_date,
        method_id: el.method_id,
        category_id: el.category_id,
        createdAt: el.createdAt,
        type: 'expense'
      }
    })
    return modifiedData
  } catch (error) {
    console.log(error)
  }
}

export const createExpense = createAsyncThunk('expense/create', async (expenseInfo) => {
  try {
    const { data } = await axios.post('/expenses', expenseInfo)
    return data
  } catch (error) {
    console.log(error)
  }
})

export const createIncome = createAsyncThunk('income/create', async (incomeInfo) => {
  try {
    const { data } = await axios.post('/incomes', incomeInfo)
    return data
  } catch (error) {
    console.log(error)
  }
})

export const getAllTransactions = createAsyncThunk('transactions/all', async () => {
  const incomes = await getAllIncomes()
  const expenses = await getAllExpenses()
  const transactions = [...incomes, ...expenses].sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
  return { incomes, expenses, transactions }
})

export const deleteExpense = createAsyncThunk('expense/delete', async (id) => {
  await axios.delete(`/expenses/${id}`)
  return id
})
export const deleteIncome = createAsyncThunk('income/delete', async (id) => {
  await axios.delete(`/incomes/${id}`)
  return id
})

export const updateExpense = createAsyncThunk('expense/update', async (id, newData) => {
  const { data } = await axios.put(`/expenses/${id}`, newData)
  return data
})
export const updateIncome = createAsyncThunk('income/update', async (id, newData) => {
  const { data } = await axios.put(`/incomes/${id}`, newData)
  return data
})