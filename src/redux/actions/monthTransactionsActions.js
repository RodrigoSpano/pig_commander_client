import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//helper para traer incomes
export const getMonthlyIncomes = async () => {
  try {
    const { data } = await axios(`/incomes/monthly`)
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

//helper para traer expenses
export const getMonthlyExpenses = async () => {
  try {
    const { data } = await axios(`/expenses/monthly`)
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

export const getAllTransactions = createAsyncThunk('transactions/month', async () => {
  try {
    const expenses = await getMonthlyExpenses()
    const incomes = await getMonthlyIncomes()
    const transactions = [...expenses, ...incomes].sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
    return { transactions }
  } catch (error) {
    console.log(error)
  }
})
