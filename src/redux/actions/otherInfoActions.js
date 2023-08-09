import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


export const getMethodsAction = createAsyncThunk('get methods', async (token) => {
  try {
    const { data } = await axios('/methods', { headers: { 'Authorization': token } })
    return data
  } catch (error) {
    console.log(error)
  }
})

//* categories
export const getCategoriesAction = createAsyncThunk('get categories', async (token) => {
  try {
    const { data } = await axios('/category', { headers: { 'Authorization': token } })
    return data
  } catch (error) {
    console.log(error)
  }
})

export const createCategoriesAction = createAsyncThunk('post categories', async (categorieData, token) => {
  try {
    const { data } = await axios.post('/category', categorieData, { headers: { 'Authorization': token } })
    return data
  } catch (error) {
    console.log(error)
  }
})

export const deleteCategoryAction = createAsyncThunk('delete categories', async (id, token) => {
  try {
    await axios.delete(`/category/${id}`, { headers: { 'Authorization': token } })
    return id
  } catch (error) {
    console.log(error)
  }
})



//* maxSpend
export const getMaxSpendAction = createAsyncThunk('get maxSpend', async (token) => {
  try {
    const { data } = await axios('/maxSpend', { headers: { 'Authorization': token } })
    return data.maxSpend
  } catch (error) {
    console.log(error)
  }
})

export const createMaxSpendAction = createAsyncThunk('create maxSpend', async (info, token) => {
  try {
    const { data } = await axios.post('/maxSpend', info, { headers: { 'Authorization': token } })
    return data
  } catch (error) {
    console.log(error)
  }
})

export const updateMaxSpendAction = createAsyncThunk('update maxSpend', async (mount, token) => {
  try {
    const { data } = await axios.put('/maxSpend', mount, { headers: { 'Authorization': token } })
    return data
  } catch (error) {
    console.log(error)
  }
})

export const deleteMaxSpendAction = createAsyncThunk('delete maxSpend', async (token) => {
  try {
    await axios.delete('/maxSpend', { headers: { 'Authorization': token } })
  } catch (error) {
    console.log(error)
  }
})