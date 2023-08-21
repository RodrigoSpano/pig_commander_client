"use client";
import usePagination from "@/customHooks/usePagination";
import { useEffect, useState } from "react";
import PaginationComponent from "../Pagination/PaginationComponent";
import useTransactionDetail from "../../customHooks/useTransactionDetail";
import { useDispatch, useSelector } from "react-redux";
import { getAllTransactions } from "@/redux/actions/monthTransactionsActions";
import TransactionCard from "./subcomps/TransactionCard";
import TransactionsPropsContainer from "./subcomps/TransactionsPropsContainer";
import { useCookies } from "react-cookie";
import SearchBarComponentEs from "../SearchBar/SearchBarComponentEs";
import PermanentFilterEs from "./subcompsEs/PermanentFilterEs";
import TransactionsPropsContainerEs from "./subcompsEs/TransactionsPropsContainer";

const TransactionsComponentEs = () => {
  const dispatch = useDispatch();
  const transactionsState = useSelector(
    (state) => state.monthTransactions.transactions
  );
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    if (!transactionsState?.length) {
      dispatch(getAllTransactions(cookies.token));
    }
  }, []);

  const {
    nextHandler,
    prevHandler,
    transactions,
    count,
    firstPageHandler,
    lastPageHandler,
    totalPages,
    handleSearch,
    handleAlphabeticallyOrder,
    handleAmountOrder,
  } = usePagination(transactionsState, 4);

  const {handleDetailEs } = useTransactionDetail();

  const [orders, setOrders] = useState({
    alphabetically: false,
    byAmount: false,
  }); //estado con el cual modifico los ordenamientos por nombre o monto

  const handleAlphabetically = () => {
    setOrders({ ...orders, alphabetically: !orders.alphabetically });
    handleAlphabeticallyOrder(orders.alphabetically);
  };

  const handleOrderByAmount = () => {
    setOrders({ ...orders, byAmount: !orders.byAmount });
    handleAmountOrder(orders.byAmount);
  };

  return (
    <div className="bg-white dark:bg-mediumGrayDarkMode  rounded-md h-full flex flex-col justify-between box-border">
      <div>
        <section className="flex items-center justify-around py-4 ">
          <h1 className="font-bold text-boldPink text-2xl xl:text-4xl lg:text-2xl md:text-xl sm:text-lg ">
            Últimas Transacciones
          </h1>
          <SearchBarComponentEs handleSearch={handleSearch} />
          <PermanentFilterEs />
        </section>

        <hr className="mx-16" />

        <section className=" py-4">
          <TransactionsPropsContainerEs
            handleAlphabetically={handleAlphabetically}
            handleOrderByAmount={handleOrderByAmount}
          />
          <>
            {transactions?.length
              ? transactions?.map((t, i) => (
                  <TransactionCard
                    handleDetail={handleDetailEs}
                    transaction={t}
                    key={i}
                  />
                ))
              : null}
          </>
        </section>
      </div>

      <div>
        <section className=" py-4">
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
        </section>
      </div>
    </div>
  );
};

export default TransactionsComponentEs;
