import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CategoriesCard from "./subcomps/CategoriesCard";
import {
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
import "./CustomScrollBar.css"; // Estilo de la barra de desplazamiento

export default function SpendingCategoriesComponent() {
  const [selectedCategory, setCategory] = useState("select-none");
  const [filterResult, setFilterResult] = useState([]); //array filtrado

  const categories = useSelector((state) => state.others.categories);
  const transactions = useSelector(
    (state) => state.transactions.backup_transactions
  );

  useEffect(() => {
    const filteredTransactions = multipleFilter(
      transactions,
      selectedCategory,
      categories
    );
    setFilterResult(filteredTransactions);
  }, [transactions, selectedCategory]);

  return (
    <div className="h-full">
      {/* Barra rosa */}
      <div className="bg-mediumPink w-full rounded-t-lg pb-1 text-mediumPink">
        h
      </div>

      {/* Selector de categorías */}
      <div className="flex flex-row h-[10%] justify-center gap-4 mt-2 p-4">
        <Tooltip
          content="Click to filter by categories!"
          placement={"right"}
          closeDelay={0}
        >
          <Dropdown>
            <DropdownTrigger>
              <Button
                className={"border-[#de78aebf] text-md"}
                variant="bordered"
              >
                Spending by Category
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
        </Tooltip>
      </div>

      {/* Si se selecciona "All Categories", muestra totales por categorías */}
      <div className="p-4">
        {typeof filterResult === "object" && !Array.isArray(filterResult) ? (
          <div className="flex flex-wrap custom-scrollbar overflow-y-auto max-h-[90%]">
            {Object.keys(filterResult).map((category) => (
              <CategoriesCard
                key={category}
                name={category}
                category={category}
                amount={filterResult[category].expense}
              />
            ))}
          </div>
        ) : (
          /* Si se selecciona cualquier otra categoría, muestra las transacciones por categoría y año seleccionado */
          <div className="flex flex-wrap custom-scrollbar overflow-y-scroll max-h-[90%]">
            {filterResult !== undefined &&
              filterResult.map((element) => (
                <CategoriesCard
                  key={element.id}
                  name={element.name}
                  category={ObtainNameByCategory(
                    //relaciona el id de la categoria con la transaccion (que incluye el id correspondiente a su categoria)
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
