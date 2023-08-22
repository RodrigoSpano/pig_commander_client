import { createExpense, createIncome } from "@/redux/actions/transactionsActions";
import axios from "axios"

const { default: Swal } = require("sweetalert2")

export const createAutomateTransaction = async (info, token) => {
  try {
    const { data } = await axios.post('/auto/transaction', info, {
      headers: { Authorization: token },
    });
    return data;
  } catch (error) {
    console.log({ error });
    if (error.response.status === 302) {
      Swal.fire({
        icon: 'info',
        title: error.response.data.message
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: error.message
      })
    }
  }
}

export const getAllAutomateTransactions = async (token) => {
  try {
    const { data } = await axios('/auto/transactions', { headers: { Authorization: token } })
    return data.automated;
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: error.message
    })
  }
}

export const deleteAutomatedTransaction = async (name, token) => {
  try {
    const { data } = await axios.delete(`/auto/stop/${name}`, { headers: { Authorization: token } })
    return data
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: error.message
    })
  }
}