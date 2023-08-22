import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CategoriesCard from "./subcomps/CategoriesCard";
import {
  CreateYears,
  CreateCategories,
  multipleFilter,
  ObtainNameByCategory,
} from "../../utils/helper/spendingsFuncs";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Tooltip,
} from "@nextui-org/react";
//Scroll bar rosa
import "./CustomScrollBar.css";

export default function SpendingCategoriesComponent() {
  const [selectedCategory, setCategory] = useState("select-none"); //Estado local de actualizacion del select en las categorias
  const [selectedYear, setSelect] = useState("select-none"); // Estado local de la actualizacion del select en los a;os
  const [filterResult, setFilterResult] = useState([]); //Filter result es el array resultado del filtrado multiple

  //manejo de selectores
  const categories = useSelector((state) => state.others.categories);
  const transactions = useSelector(
    (state) => state.transactions.backup_transactions
  );

  useEffect(() => {
    //logica de renderizacion del componente
    const filteredTransactions = multipleFilter(
      transactions,
      selectedCategory,
      selectedYear,
      categories
    );
    setFilterResult(filteredTransactions);
  }, [transactions, selectedCategory, selectedYear]);

  return (
    <div className="h-[100%]">
      {/* barra rosa */}
      <div className="bg-mediumPink w-full rounded-t-lg pb-1 text-mediumPink">
        h
      </div>

      {/* select de las categorias */}
      <div className="flex flex-row h-[10%] justify-center gap-20 mt-2">
        <Tooltip
          content="Click and filter for categories!"
          placement={"right"}
          closeDelay={0}
        >
          <div>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className={"border-[#de78aebf] text-md"}
                  variant="bordered"
                >
                  Spending by category
                </Button>
              </DropdownTrigger>

              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  onClick={() => setCategory("select-none")}
                  className={"bg-[#de78ae] text-[white]"}
                  variant="solid"
                >
                  All Categories
                </DropdownItem>
                {categories.map((category) => (
                  <DropdownItem
                    variant="bordered"
                    onClick={() => setCategory(category.name)}
                    key={category.name}
                    value={category.name}
                    className={"capitalize"}
                  >
                    {category.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </Tooltip>
      </div>

      {/* si se selecciona la primera opcion de categorias se muestran los totales por categorias */}
      <div>
        {typeof filterResult === "object" && !Array.isArray(filterResult) ? (
          <div className="flex flex-wrap custom-scrollbar overflow-y-auto max-h-[90%]">
            {/* Este código filtra por cada objeto */}
            {Object.keys(filterResult).map((category) => (
              <CategoriesCard
                key={category}
                name={category}
                category={category}
                amount={filterResult[category].total}
                s
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
