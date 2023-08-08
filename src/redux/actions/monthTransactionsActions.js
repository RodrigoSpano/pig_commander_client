import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//retorna la info q quiero
export const getMonthlyIncomes = async (data) => {
  const modifiedData = data.map((el) => {
    return {
      id: el.id,
      name: el.name,
      mount: el.mount,
      automatized: el.automatized,
      auto_date: el.auto_date,
      method_id: el.method_id,
      category_id: el.category_id,
      createdAt: el.createdAt,
      type: "income",
    };
  });
  return modifiedData;
};

//retorna la info q quiero
export const getMonthlyExpenses = async (data) => {
  const modifiedData = data.map((el) => {
    return {
      id: el.id,
      name: el.name,
      mount: el.mount,
      automatized: el.automatized,
      auto_date: el.auto_date,
      method_id: el.method_id,
      category_id: el.category_id,
      createdAt: el.createdAt,
      type: "expense",
    };
  });
  return modifiedData;
};

export const getAllTransactions = createAsyncThunk(
  "transactions/month",
  async (token) => {
    try {
      const { data: incomesData } = await axios(`/incomes/monthly`, {
        headers: { Authorization: token },
      });
      const { data: expensesData } = await axios(`/expenses/monthly`, {
        headers: { Authorization: token },
      });
      const incomes = await getMonthlyIncomes(incomesData);
      const expenses = await getMonthlyExpenses(expensesData);
      const transactions = [...expenses, ...incomes].sort(
        (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
      );
      return transactions;
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
);
