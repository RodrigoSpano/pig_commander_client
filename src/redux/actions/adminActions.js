import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const banUser = createAsyncThunk("Ban User", async ({ token, id }) => {
  const { data } = await axios.delete(`/admin/ban/${id}`, {
    headers: { Authorization: token },
  });
  return data;
});

const unbanUser = createAsyncThunk("unban User", async ({ token, id }) => {
  const { data } = await axios.get(`/admin/unban/${id}`, {
    headers: { Authorization: token },
  });
  return data;
});

const getAllUsersCount = createAsyncThunk("Total users", async (token) => {
  const { data } = await axios.get("/admin/allusers", {
    headers: { Authorization: token },
  });
  return data;
});

const getBasicUsers = createAsyncThunk("Basic users", async (token) => {
  const { data } = await axios.get("/admin/basicusers", {
    headers: { Authorization: token },
  });
  return data;
});

const getProUsers = createAsyncThunk("Pro users", async (token) => {
  const { data } = await axios.get("/admin/prousers", {
    headers: { Authorization: token },
  });
  return data;
});

const getBannedUsers = createAsyncThunk("Banned users", async (token) => {
  const { data } = await axios.get("/admin/bannedusers", {
    headers: { Authorization: token },
  });
  return data;
});

const getTableUsers = createAsyncThunk("Table users", async (token) => {
  const { data } = await axios.get("/admin/tableusers", {
    headers: { Authorization: token },
  });
  return data;
});

export {
  banUser,
  unbanUser,
  getAllUsersCount,
  getBasicUsers,
  getProUsers,
  getBannedUsers,
  getTableUsers,
};
