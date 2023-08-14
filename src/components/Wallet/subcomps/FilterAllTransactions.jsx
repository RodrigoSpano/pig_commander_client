import {
  clearFilters,
  filterByMethod,
  filterByType,
  filterByCategory
} from "@/redux/features/transactionsSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterAllTransactions = () => {
  const methods = useSelector((state) => state.others.methods);
  const categories = useSelector((state) => state.others.categories);

  const dispatch = useDispatch();

  const handleFiltrerByType = (e) => {
    if (e.target.value === "default") {
      dispatch(clearFilters());
    } else {
      dispatch(filterByType(e.target.value));
    }
  };

  const handleFiltrerByMethod = (e) => {
    if (e.target.value === "default") {
      dispatch(clearFilters());
    } else {
      dispatch(filterByMethod(e.target.value));
    }
  };

  const handleFiltrerByCategory = (e) => {
    if (e.target.value === "default") {
      dispatch(clearFilters());
    } else {
      dispatch(filterByCategory(e.target.value));
    }
  };
  return (
    <div className="flex justify-around py-4">
      <select
        className="block  py-2 px-4 border-2 border-[#E6E9EE] rounded-lg shadow-sm outline-none"
        onChange={handleFiltrerByType}
      >
        <option disabled selected value="">
          Types
        </option>
        <option value="default">All Transactions</option>
        <option value="expense">Expenses</option>
        <option value="income">Incomes</option>
      </select>

      <select
        className="block py-2 px-4 border-2 border-[#E6E9EE] rounded-lg shadow-sm outline-none"
        onChange={handleFiltrerByMethod}
      >
        <option disabeld selected value="">
          Methods
        </option>
        <option value="default">All Transactions</option>
        {methods.length
          ? methods.map((method) => (
              <option key={method.id} value={method.id}>
                {method.name}
              </option>
            ))
          : null}
      </select>

      <select
        className="block py-2 px-4 border-2 border-[#E6E9EE] rounded-lg shadow-sm outline-none"
        onChange={handleFiltrerByCategory}
      >
        <option disabeld selected value="">
          Categories
        </option>
        <option value="default">All Transactions</option>
        {categories.length
          ? categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name.replace(/^\w/, (c) => c.toUpperCase())}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default FilterAllTransactions;
