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
    <>
    <div className="bg-mediumPink w-full rounded-t-lg pb-1 text-mediumPink">
      h
    </div>
    <div className="bg-white dark:bg-mediumGrayDarkMode rounded-lg shadow-xl p-4">
      <div>

        <div className="">
          <h1 className="font-bold text-2xl dark:text-mediumPink my-2">
            Mi Balance
          </h1>
          <div className="">
            <div className="text-regularPink text-7xl font-semibold my-2">
              <BalancesCard backup_transactions={allTransactions} />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:justify-end md:mr-8">
            <ButtonCreateCategoryEs />
            <DeleteCreatedCategoryEs />
          </div>
        </div>
      </div>

      <hr className="mx-16 my-6" />

      <div className="">
        <div className="flex flex-col lg:flex-row justify-around">
          <h1 className="text-4xl font-bold text-boldPink dark:text-mediumPinkDark">
            Transacciones
          </h1>
          <SearchBarComponentEs handleSearch={handleSearch} />
        </div>
        <div>
          <FilterAllTransactionsEs setOrders={setOrders} />
        </div>
      </div>

      <hr className="mx-16 my-6" />

      <div className="">
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
    </div>
  </>
  );
}
