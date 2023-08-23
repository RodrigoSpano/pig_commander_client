import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { getFilterTransaction } from '@/redux/actions/transactionsActions';
import { clearFilters } from '@/redux/features/transactionsSlice';

const FilterAllTransactions = ({ setOrders }) => {
  const [cookies, setCookies] = useCookies();
  const methods = useSelector((state) => state.others.methods);
  const categories = useSelector((state) => state.others.categories);
  const [type, setType] = useState('all');
  const [method, setMethod] = useState('');
  const [category, setCategory] = useState('');
  const [selectBoolean, setSelectBoolean] = useState(false);
  const [values, setValues] = useState({
    types: 'default',
    categories: 'default',
    methods: 'default',
  });

  const dispatch = useDispatch();

  const filterTransactions = (method, category, transaction) => {
    const { token } = cookies;
    dispatch(getFilterTransaction({ token, method, category, transaction }));
  };

  const resetFilters = () => {
    setOrders({
      alphabetically: false,
      byAmount: false,
    });
    setValues({
      types: 'default',
      categories: 'default',
      methods: 'default',
    });
    setType('all');
    setMethod('');
    setCategory('');
    setSelectBoolean(false);
    dispatch(clearFilters());
  };
  const handleFilterByType = (e) => {
    setType(e.target.value);
    setValues({ ...values, types: e.target.value });
    setSelectBoolean(true);
  };

  const handleFilterByMethod = (e) => {
    setMethod(e.target.value);
    setValues({ ...values, methods: e.target.value });
    setSelectBoolean(true);
  };

  const handleFilterByCategory = (e) => {
    setCategory(e.target.value);
    setValues({ ...values, categories: e.target.value });
    setSelectBoolean(true);
  };

  return (
    <div className="flex flex-col items-center space-y-4 mt-2">
      <section className="flex flex-col items-center space-y-2">
        <select
          className="w-64 p-2 border rounded-lg shadow-sm outline-none"
          onChange={handleFilterByType}
          value={values.types}
        >
          <option disabled value="default">
            Types
          </option>
          <option value="all">All Transactions</option>
          <option value="expenses">Expenses</option>
          <option value="incomes">Incomes</option>
        </select>

        <select
          className="w-64 p-2 border rounded-lg shadow-sm outline-none"
          onChange={handleFilterByMethod}
          value={values.methods}
        >
          <option disabled value="default">
            Methods
          </option>

          {methods.length
            ? methods.map((method) => (
                <option key={method.id} value={method.id}>
                  {method.name}
                </option>
              ))
            : null}
        </select>

        <select
          className="w-64 p-2 border rounded-lg shadow-sm outline-none"
          onChange={handleFilterByCategory}
          value={values.categories}
        >
          <option disabled value="default">
            Categories
          </option>

          {categories.length
            ? categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name.replace(/^\w/, (c) => c.toUpperCase())}
                </option>
              ))
            : null}
        </select>
      </section>

      <div className="space-x-4">
        <button
          className={`px-4 py-2 font-bold rounded-lg text-white text-base ${
            !selectBoolean
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-regularPink to-boldPink hover:from-pink-500 hover:to-pink-700'
          } `}
          onClick={() => {
            filterTransactions(method, category, type);
          }}
          disabled={!selectBoolean}
        >
          Filter
        </button>
        <button
          onClick={resetFilters}
          className={`px-4 py-2 font-bold rounded-lg text-white text-base ${
            !selectBoolean
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-regularPink to-boldPink hover:from-pink-500 hover:to-pink-700'
          } `}
          disabled={!selectBoolean}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterAllTransactions;
