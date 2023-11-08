import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBarComponent from "../SearchBar/SearchBarComponent";
import AllTransactionsComponent from "../Wallet/AllTransactionsComponent";
import FilterAllTransactions from "../Wallet/subcomps/FilterAllTransactions";
import AllTransactionsPropsContainer from "../Wallet/subcomps/AllTransactionsPropsContainer";
import PaginationComponent from "../Pagination/PaginationComponent";
import usePagination from "@/customHooks/usePagination";
import BalancesCard from "./BalancesCard";
import ButtonCreateCategory from "./subComponent/ButtonCreateCategory";
import DeleteCreatedCategory from "./subComponent/DeleteCreatedCategory";
import { FaPiggyBank } from "react-icons/fa";


export default function WalletComponent() {
  const dispatch = useDispatch();
  const allTransactions = useSelector((state) => state.transactions.transactions);

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
  });

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
      <div className="bg-white dark:bg-mediumGrayDarkMode rounded-lg shadow-xl p-4 h-[59.563rem]">
        <div>

          <div className="">
            <h1 className="font-bold text-2xl dark:text-mediumPink my-2">
              My Balance
            </h1>
            <div className="">
              <div className="text-regularPink text-7xl font-semibold my-2">
                <BalancesCard backup_transactions={allTransactions} />
              </div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:justify-end md:mr-8">
              <ButtonCreateCategory />
              <DeleteCreatedCategory />
            </div>
          </div>
        </div>

        <hr className="mx-16 my-6" />

        <div className="">
          <div className="flex flex-col lg:flex-row justify-around mb-5">
            <h1 className="text-4xl font-bold text-boldPink dark:text-mediumPinkDark">
              Transactions
            </h1>
            <SearchBarComponent handleSearch={handleSearch} />
          </div>
          <div>
            <FilterAllTransactions setOrders={setOrders} />
          </div>
        </div>

        <hr className="mx-16 my-6" />

        <div className="">
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
          ) :  <div className="flex justify-center items-center h-[29rem] flex-col gap-4">
          <p className="text-4xl  text-gray-400">
            <FaPiggyBank />
          </p>
          <h2 className="text-lg text-gray-400">
            There are no income or expenses{" "}
          </h2>
        
        </div>}
        </div>
      </div>
    </>
  );
}
