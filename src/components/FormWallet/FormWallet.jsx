import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import useFormWallet from "@/customHooks/useFormWallet";
import { useSelector } from "react-redux";

export default function FormWallet() {
  const categories = useSelector((state) => state.others.categories);
  const methods = useSelector((state) => state.others.methods);

  const {
    formWallet,
    inputInvalids,
    handleChange,
    someFieldEmpty,
    allowAmountErrorMessage,
    allowNameErrorMessage,
    focusedAmountInput,
    focusedNameInput,
    handleSubmitExpense,
    handleSubmitIncome,
  } = useFormWallet();

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-mediumPink w-full rounded-t-lg pb-1 text-mediumPink"
      >
        h
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 space-y-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Transaction Form
        </motion.h1>
        <div className="space-y-2">
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label className="text-gray-600">Name</label>
            <input
              className={`bg-gray-100 rounded-lg p-2 w-full focus:outline-none ${
                focusedNameInput ? "ring-2 ring-pink-500" : ""
              }`}
              autoComplete="off"
              type="text"
              name="name"
              value={formWallet.name}
              onChange={handleChange}
              onFocus={allowNameErrorMessage}
              placeholder="Enter name..."
            />
          </motion.div>
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="text-gray-600">Amount</label>
            <input
              className={`bg-gray-100 rounded-lg p-2 w-full focus:outline-none ${
                focusedAmountInput ? "ring-2 ring-pink-500" : ""
              }`}
              autoComplete="off"
              type="number"
              name="amount"
              value={formWallet.amount}
              onChange={handleChange}
              onFocus={allowAmountErrorMessage}
              placeholder="$"
            />
          </motion.div>
        </div>
        {inputInvalids && (focusedNameInput || focusedAmountInput) && (
          <motion.p
            className="text-red-400 text-xs"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            These fields are required
          </motion.p>
        )}
        <div className="space-y-2">
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label className="text-gray-600">Method:</label>
            <select
              className="bg-gray-100 rounded-lg p-2 w-full focus:outline-none"
              name="method_id"
              id="selects"
              onChange={handleChange}
              value={formWallet.method_id}
            >
              {methods.map((method) => (
                <option key={method.id} value={method.id}>
                  {method.name}
                </option>
              ))}
            </select>
          </motion.div>
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label className="text-gray-600">Categories:</label>
            <select
              className="bg-gray-100 rounded-lg p-2 w-full focus:outline-none"
              name="category_id"
              id="selects"
              value={formWallet.category_id}
              onChange={handleChange}
            >
              {categories.map((categorie) => (
                <option key={categorie.id} value={categorie.id}>
                  {categorie.name}
                </option>
              ))}
            </select>
          </motion.div>
        </div>
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FiAlertCircle className="text-red-500" />
          <span className="text-gray-600">Only premium members</span>
        </motion.div>
        <div className="space-x-2">
          <motion.button
            className="bg-gray-300 px-4 py-2 rounded-lg cursor-not-allowed"
            disabled
            whileHover={{ scale: 1.05 }}
          >
            Automatized
          </motion.button>
          <motion.button
            className="bg-gray-300 px-4 py-2 rounded-lg cursor-not-allowed"
            disabled
            whileHover={{ scale: 1.05 }}
          >
            AutoDate
          </motion.button>
        </div>
        <div className="space-x-2">
          <motion.button
            className={`bg-gradient-to-r from-pink-400 to-pink-600 text-white px-4 py-2 rounded-lg ${
              someFieldEmpty ? "cursor-not-allowed bg-gray-300" : ""
            }`}
            disabled={someFieldEmpty}
            onClick={handleSubmitIncome}
            whileHover={{ scale: 1.05 }}
          >
            Add Money
          </motion.button>
          <motion.button
            className={`bg-gradient-to-r from-pink-400 to-pink-600 text-white px-4 py-2 rounded-lg ${
              someFieldEmpty ? "cursor-not-allowed bg-gray-300" : ""
            }`}
            disabled={someFieldEmpty}
            onClick={handleSubmitExpense}
            whileHover={{ scale: 1.05 }}
          >
            Add Expense
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
