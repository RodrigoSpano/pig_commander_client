import { getFilterTransaction } from "@/redux/actions/transactionsActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { clearFilters } from "@/redux/features/transactionsSlice";

const FilterAllTransactionsEs = ({ setOrders }) => {
  const [cookies, setCookies] = useCookies();
  const methods = useSelector((state) => state.others.methods);
  const categories = useSelector((state) => state.others.categories);
  const [type, setType] = useState("all");
  const [method, setMethod] = useState("");
  const [category, setCategory] = useState("");
  const [selectBoolean, setSelectBoolean] = useState(false);
  const [values, setValues] = useState({
    types: "default",
    categories: "default",
    methods: "default",
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
      types: "default",
      categories: "default",
      methods: "default",
    });
    setType("all");
    setMethod("");
    setCategory("");
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
    <div className="flex justify-around py-4 items-center">
      <select
        className="block  py-2 px-4 border border-[#E6E9EE] dark:bg-mediumGrayDarkMode rounded-lg shadow-sm outline-none"
        onChange={handleFilterByType}
        value={values.types}
      >
        <option disabled selected value="default">
          Tipos
        </option>
        <option value="all">Todas las Transacciones</option>
        <option value="expenses">Gastos</option>
        <option value="incomes">Ingresos</option>
      </select>

      <select
        className="block py-2 px-4 border border-[#E6E9EE] dark:bg-mediumGrayDarkMode  rounded-lg shadow-sm outline-none"
        onChange={handleFilterByMethod}
        value={values.methods}
      >
        <option disabled selected value="default">
          Métodos
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
        className="block py-2 px-4 border border-[#E6E9EE] dark:bg-mediumGrayDarkMode  rounded-lg shadow-sm outline-none"
        onChange={handleFilterByCategory}
        value={values.categories}
      >
        <option disabled selected value="default">
          Categoría
        </option>

        {categories.length
          ? categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name.replace(/^\w/, (c) => c.toUpperCase())}
              </option>
            ))
          : null}
      </select>
      <button
        className={`text-white h-10 w-20 font-bold cursor-no-drop rounded-2xl text-base ${
          !selectBoolean
            ? "bg-regularGray"
            : " cursor-pointer bg-gradient-to-r from-regularPink  to-boldPink"
        } `}
        onClick={() => {
          filterTransactions(method, category, type);
        }}
      >
        Filtro
      </button>
      <button
        onClick={resetFilters}
        className={`text-white h-10 w-20 font-bold cursor-no-drop rounded-2xl  text-base ${
          !selectBoolean
            ? "bg-regularGray"
            : " cursor-pointer bg-gradient-to-r from-regularPink  to-boldPink"
        } `}
      >
        Restablecer
      </button>
    </div>
  );
};

export default FilterAllTransactionsEs;
