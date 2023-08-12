import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CategoriesCard from "./subcomps/CategoriesCard";
//Scroll bar rosa
import "./CustomScrollBar.css";

export default function SpendingCategoriesComponent() {
  //falta seguir con esto de category y set category
  const [selectedCategory, setCategory] = useState("select-none");
  const [selectedYear, setSelect] = useState("select-none"); // Estado para el valor seleccionado
  const categories = useSelector((state) => state.others.categories);
  const transactions = useSelector((state) => state.transactions.transactions);

  /* Uso esto para debugear los estados de redux de transactions y categorias*/
  useEffect(() => {
    console.log("transactions:");
    console.log(transactions);
    console.log(" ");
    console.log("categories");
    console.log(categories);
    console.log("selected year:");
    console.log(selectedYear);
    console.log("selected category");
    console.log(selectedCategory);
  });

  /* crea los años en funcion del año actual +10 y -10 años */
  function CreateYears() {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 10;
    const endYear = currentYear;
    const years = [];

    for (let year = startYear; year <= endYear; year++) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    return years;
  }
  /* crea las categorias en funcion de las guardadas en la base de datos y las que se crean desde el form */
  function CreateCategories() {
    const showCategories = []; //solo para crear las opt

    for (let i = 0; i <= categories.length - 1; i++) {
      showCategories.push(
        <option key={categories[i].name} value={categories[i].name}>
          {categories[i].name}
        </option>
      );
    }
    return showCategories;
  }
  /* subrutina para no dejar tanto codigo en la card, busca el nombre de la categoria */
  function ObtenerNombreCategory(id) {
    let categoryName = categories[id-1].name;
    return categoryName;
  }
  //filtra las transacciones solo si estan en la fecha seleccionada
  function filterTransactions() {
    if (selectedYear === "select-none") {
      return transactions;
    }

    //REVISAR SEGUN COMO ESTE LA FECHA ACTUALIZADA EN LA TRANSACCION
    const filteredTransactions = transactions.filter((element) => {
      const transactionYear = new Date(element.auto_date).getFullYear();
      return transactionYear === parseInt(selectedYear);
    });

    return filteredTransactions;
  }
  //fusiona los dos filtros
  function multipleFilter(transactions) {
    const filteredByYear = filterTransactions(transactions);

    if (selectedCategory === "select-none") {
      const categorySums = {}; // Objeto para almacenar las sumas por categoría

      filteredByYear.forEach((element) => {
        const transactionCategory = ObtenerNombreCategory(element.category_id);

        if (!categorySums[transactionCategory]) {
          categorySums[transactionCategory] = {
            income: 0,
            entradas: 0,
            total: 0,
          };
        }

        if (element.type === "income") {
          categorySums[transactionCategory].income += element.amount;
          categorySums[transactionCategory].total += element.amount;
        } else if (element.type === "expense") {
          categorySums[transactionCategory].expense += element.amount;
          categorySums[transactionCategory].total -= element.amount;
        }
      });

      return categorySums;
    }

    const filteredByYearAndCategory = filteredByYear.filter((element) => {
      const transactionCategory = ObtenerNombreCategory(element.category_id);
      return transactionCategory === selectedCategory;
    });

    return filteredByYearAndCategory;
  }
  //renderizar las cards o renderizar los totales de cada category
  function renderFilteredResults(filterResult) {
    if (typeof filterResult === "object" && !Array.isArray(filterResult)) {
      return (
        <div className="flex flex-wrap custom-scrollbar overflow-y-scroll max-h-[90%]">
          {/* este codigo filtra por cada objeto */}
          {Object.keys(filterResult).map((category) => (
            <CategoriesCard
              key={category}
              name={category}
              category={category}
              amount={filterResult[category].total}
              type={filterResult[category].type}
              validation={false}
            />
          ))}
        </div>
      );
    } else {
      return (
        /* este codigo renderiza cada uno de los elementos filtrados por categoria o año */
        <div className="flex flex-wrap custom-scrollbar overflow-y-scroll max-h-[90%]">
          {filterResult.map((element) => (
            <CategoriesCard
              key={element.id}
              name={element.name}
              category={ObtenerNombreCategory(element.category_id)}
              amount={element.amount}
              type={element.type}
              validation={true}
            />
          ))}
        </div>
      );
    }
  }

  const filterResult = multipleFilter();

  return (
    <div className="h-[100%]">
      {/* barra rosa */}
      <div className="bg-mediumPink w-full rounded-t-lg pb-1 text-mediumPink">
        h
      </div>

      {/* select de las categorias */}
      <div className="flex flex-row h-[10%]">
        <select
          id="selectCategory"
          name="category"
          className="mt-1 border-gray-300 rounded-sm shadow-sm focus:ring black focus:ring-opacity-50 p-1 font-extrabold w-2/3"
          value={selectedCategory}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option className="text-black" value="select-none">
            Spending By Category
          </option>
          {CreateCategories()}
        </select>

        {/* select de los años */}
        <select
          id="selectYear"
          name="year"
          className="mt-1 ml-1 border-gray-300 rounded-sm shadow-sm focus:ring black  focus:ring-opacity-50 p-1 font-extrabold w-1/3 "
          value={selectedYear}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option className="text-black" value="select-none">
            Year
          </option>
          {CreateYears()}
        </select>
      </div>
      {/* arma las tarjetas en funcion de la cantidad de transacciones que haya */}
      <div className="relative h-[90%]">{renderFilteredResults(filterResult)}</div>
    </div>
  );
}
