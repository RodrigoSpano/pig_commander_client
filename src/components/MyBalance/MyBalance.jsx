"use client";
import { useState } from "react";
import SearchBarComponent from "../SearchBar/SearchBarComponent";
import AllTransactionsComponent from "../Wallet/AllTransactionsComponent";
import FilterAllTransactions from "../Wallet/subcomps/FilterAllTransactions";
import { useDispatch, useSelector } from "react-redux";
import AllTransactionsPropsContainer from "../Wallet/subcomps/AllTransactionsPropsContainer";
import PaginationComponent from "../Pagination/PaginationComponent";
import usePagination from "@/customHooks/usePagination";
import BalancesCard from "./BalancesCard";
import ButtonCreateCategory from "./subComponent/ButtonCreateCategory";
import DeleteCreatedCategory from "./subComponent/DeleteCreatedCategory";

export default function WalletComponent() {
  const dispatch = useDispatch();
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
        <h1 className="font-bold ml-5 mt-2.5 text-xl dark:text-mediumPinkDark">My Balance</h1>
        <div className="flex flex-row">
          <div className="text-regularPink text-7xl font-semibold mt-5 ml-5 ">
            <BalancesCard backup_transactions={allTransactions} />
          </div>
        </div>
        <div className={"flex justify-end"}>
          <ButtonCreateCategory />
          <DeleteCreatedCategory />
        </div>
      </div>
      <hr className="my-2 mx-16 mt-6" />
      <div className="my-4">
        <div className="flex justify-around">
          <h1 className="text-4xl font-bold text-boldPink dark:text-mediumPinkDark">Transactions</h1>
          <SearchBarComponent handleSearch={handleSearch} />
        </div>
        <FilterAllTransactions setOrders={setOrders} />
      </div>

      <AllTransactionsPropsContainer
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
