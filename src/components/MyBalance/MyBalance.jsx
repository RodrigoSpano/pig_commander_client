"use client";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useVisibility from "@/customHooks/useVisibility";
import SearchBarComponent from "../SearchBar/SearchBarComponent";
import AllTransactionsComponent from "../Wallet/AllTransactionsComponent";
import FilterAllTransactions from "../Wallet/subcomps/FilterAllTransactions";
import { useSelector } from "react-redux";
import AllTransactionsPropsContainer from "../Wallet/subcomps/AllTransactionsPropsContainer";
import PaginationComponent from "../Pagination/PaginationComponent";
import usePagination from "@/customHooks/usePagination";
import BalancesCard from "./BalancesCard";

export default function WalletComponent() {
  const { showPassword, togglePasswordVisibility } = useVisibility();
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
        <div className="bg-mediumPink h-7 rounded-t-lg"></div>
        <h1 className="font-bold ml-5 mt-2.5 text-xl">My Balance</h1>
        <div className="flex flex-row">
          <div className="text-regularPink text-7xl font-semibold mt-5 ml-5 ">
            <BalancesCard backup_transactions={allTransactions}/>
          </div>
        </div>

        <div className="flex justify-end mr-5">
          <button className="bg-regularPink text-white font-bold h-7 w-36 rounded-xl">
            Create Category
          </button>
        </div>
      </div>
      <hr className="my-2 mx-16 mt-6" />
      <div className="flex items-center justify-around my-4">
        <h1 className="text-2xl font-bold text-boldPink">Transactions</h1>
        <SearchBarComponent handleSearch={handleSearch} />
        <FilterAllTransactions />
      </div>

      <AllTransactionsPropsContainer
        handleAlphabetically={handleAlphabetically}
        handleOrderByAmount={handleOrderByAmount}
      />
      <AllTransactionsComponent allTransactions={transactions} />
      {transactions?.length ? (
        <PaginationComponent
          count={count}
          totalPages={totalPages}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          lastPageHandler={lastPageHandler}
          firstPageHandler={firstPageHandler}
        />
      ) : null}
    </div>
  );
}
