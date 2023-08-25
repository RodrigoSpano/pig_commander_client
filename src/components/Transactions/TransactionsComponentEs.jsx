"use client";
import usePagination from "@/customHooks/usePagination";
import { useEffect, useState } from "react";
import PaginationComponent from "../Pagination/PaginationComponent";
import useTransactionDetail from "../../customHooks/useTransactionDetail";
import { useDispatch, useSelector } from "react-redux";
import { getAllTransactions } from "@/redux/actions/monthTransactionsActions";
import TransactionCard from "./subcomps/TransactionCard";
import { useCookies } from "react-cookie";
import SearchBarComponentEs from "../SearchBar/SearchBarComponentEs";
import PermanentFilterEs from "./subcompsEs/PermanentFilterEs";
import TransactionsPropsContainerEs from "./subcompsEs/TransactionsPropsContainer";
import Link from 'next/link';
import { FaPiggyBank} from "react-icons/fa"

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

  const { handleDetailEs } = useTransactionDetail();

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
    <div className="bg-white dark:bg-mediumGrayDarkMode rounded-md h-full w-full flex flex-col justify-between box-border">
      <div>
        <section className="flex flex-col py-4 px-4">
          <div className="flex flex-row items-center justify-between pb-2 mx-4">
            <h1 className="font-bold text-boldPink text-xl md:text-xl lg:text-2xl xl:text-3xl">
              Últimas Transacciones
            </h1>
            <PermanentFilterEs />
          </div>

          <hr className="mx-8 my-4 lg:mx-18" />

          <div className="mx-4">
            <SearchBarComponentEs handleSearch={handleSearch} />
          </div>
        </section>

        <section className=" ">
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
          ) : (
            <div className="flex justify-center items-center h-64 flex-col gap-4">
              <p className="text-4xl  text-gray-400">
                <FaPiggyBank />
              </p>
              <h2 className="text-lg text-gray-400">
                No hay ingresos ni gastos{" "}
              </h2>
              <Link href="/home/wallet">
                <button className="bg-gradient-to-r from-pink-400 to-pink-600 text-white p-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300">
                  Ingresa uno
                </button>
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default TransactionsComponentEs;
