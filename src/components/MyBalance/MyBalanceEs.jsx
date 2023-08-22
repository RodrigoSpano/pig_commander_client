"use client";
import { useState } from "react";
import AllTransactionsComponent from "../Wallet/AllTransactionsComponent";
import { useSelector } from "react-redux";
import PaginationComponent from "../Pagination/PaginationComponent";
import usePagination from "@/customHooks/usePagination";
import BalancesCard from "./BalancesCard";
import ButtonCreateCategoryEs from "./subComponentEs/ButtonCreateCategoryEs";
import SearchBarComponentEs from "../SearchBar/SearchBarComponentEs";
import DeleteCreatedCategoryEs from "./subComponentEs/DeleteCreatedCategoryEs";
import FilterAllTransactionsEs from "../Wallet/subcompsEs/FilterAllTransactionsEs";
import AllTransactionsPropsContainerEs from "../Wallet/subcompsEs/AllTransactionsPropsContainerEs";

export default function WalletComponentEs() {
  const allTransactions = useSelector(
    (state) => state.transactions.transactions
  );

  const {
    nextHandler,
    prevHandler,
    transactions,
    count,
    firstPageHandler,
    lastPageHandler,
    totalPages,
    handleSearch,
    handleAlphabeticallyOrderAllTransactions,
    handleAmountOrderAllTransactions,
  } = usePagination(allTransactions, 5);

  const [orders, setOrders] = useState({
    alphabetically: false,
    byAmount: false,
  }); //estado con el cual modifico los ordenamientos por nombre o monto

  const handleAlphabetically = () => {
    setOrders({ ...orders, alphabetically: !orders.alphabetically });
    handleAlphabeticallyOrderAllTransactions(orders.alphabetically);
  };

  const handleOrderByAmount = () => {
    setOrders({ ...orders, byAmount: !orders.byAmount });
    handleAmountOrderAllTransactions(orders.byAmount);
  };

  return (
    <div>
      <div>
        <div className="bg-mediumPink h-7 rounded-t-lg "></div>
        <h1 className="font-bold ml-5 mt-2.5 text-xl dark:text-mediumPinkDark">Mi Balance</h1>
        <div className="flex flex-row">
          <div className="text-regularPink text-7xl font-semibold mt-5 ml-5 ">
            <BalancesCard backup_transactions={allTransactions} />
          </div>
        </div>
        <div className={"flex justify-end"}>
          <ButtonCreateCategoryEs />
          <DeleteCreatedCategoryEs />
        </div>
      </div>
      <hr className="my-2 mx-16 mt-6" />
      <div className="my-4">
        <div className="flex justify-around">
          <h1 className="text-4xl font-bold text-boldPink dark:text-mediumPinkDark">Transacciones</h1>
          <SearchBarComponentEs handleSearch={handleSearch} />
        </div>
        <FilterAllTransactionsEs setOrders={setOrders} />
      </div>

      <AllTransactionsPropsContainerEs
        handleAlphabetically={handleAlphabetically}
        handleOrderByAmount={handleOrderByAmount}
      />
      <AllTransactionsComponent allTransactions={transactions} />
      {transactions?.length ? (
        <div>
          <PaginationComponent
            count={count}
            totalPages={totalPages}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            lastPageHandler={lastPageHandler}
            firstPageHandler={firstPageHandler}
          />
        </div>
      ) : null}
    </div>
  );
}
