import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CategoriesCard from "./subcomps/CategoriesCard";
import {
  CreateYears,
  CreateCategories,
  multipleFilter,
  ObtainNameByCategory,
} from "../../utils/helper/spendingsFuncs";
//Scroll bar rosa
import "./CustomScrollBar.css";

export default function SpendingCategoriesComponent() {

  const [selectedCategory, setCategory] = useState("select-none"); //Estado local de actualizacion del select en las categorias
  const [selectedYear, setSelect] = useState("select-none"); // Estado local de la actualizacion del select en los a;os
  const [filterResult, setFilterResult] = useState([]);  //Filter result es el array resultado del filtrado multiple

  //manejo de selectores
  const categories = useSelector((state) => state.others.categories);
  const transactions = useSelector((state) => state.transactions.transactions);


  useEffect(() => {
    //logica de renderizacion del componente
    const filteredTransactions = multipleFilter(
      transactions,
      selectedCategory,
      selectedYear,
      categories
    );
    setFilterResult(filteredTransactions);
    console.log(selectedYear)
  }, [transactions, selectedCategory, selectedYear]);

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
          {CreateCategories(categories)}
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
      {/* si se selecciona la primera opcion de categorias se muestran los totales por categorias */}
      <div className="relative h-[90%]">
        {typeof filterResult === "object" && !Array.isArray(filterResult) ? (
          <div className="flex flex-wrap custom-scrollbar overflow-y-scroll max-h-[90%]">
            {/* Este código filtra por cada objeto */}
            {Object.keys(filterResult).map((category) => (
              <CategoriesCard
                key={category}
                name={category}
                category={category}
                amount={filterResult[category].total}s
                type={filterResult[category].type}
                validation={false}
              />
            ))}
          </div>
        ) : (
          /* si se selecciona cualquier otra se muestran las transacciones por categoria y por a;o seleccionado */
          <div className="flex flex-wrap custom-scrollbar overflow-y-scroll max-h-[90%]">
            {filterResult !== undefined &&
              filterResult.map((element) => (
                <CategoriesCard
                  key={element.id}
                  name={element.name}
                  category={ObtainNameByCategory(
                    element.category_id,
                    categories
                  )}
                  amount={element.amount}
                  type={element.type}
                  validation={true}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
