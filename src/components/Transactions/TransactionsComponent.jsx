"use client";
import usePagination from "@/customHooks/usePagination";
import { useEffect, useState } from "react";
import PaginationComponent from "../Pagination/PaginationComponent";
import SearchBarComponent from "../SearchBar/SearchBarComponent";
import useTransactionDetail from "../../customHooks/useTransactionDetail";
import { useDispatch, useSelector } from "react-redux";
import { getAllTransactions } from "@/redux/actions/monthTransactionsActions";
import TransactionCard from "./subcomps/TransactionCard";
import TransactionsPropsContainer from "./subcomps/TransactionsPropsContainer";
import PermanentFilter from "./subcomps/PermanentFilter";
import { useCookies } from "react-cookie";

const TransactionsComponent = () => {
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

  const { handleDetail } = useTransactionDetail();

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
        <section className='flex flex-col py-4 px-4'>
          <div className='flex flex-row items-center justify-between pb-2 mx-4'>
            <h1 className='font-bold text-boldPink text-xl md:text-xl lg:text-2xl xl:text-3xl dark:text-mediumPinkDark'>Last Transactions</h1>
            <PermanentFilter />
          </div>

          <hr className='mx-8 my-4 lg:mx-18' />

          <div className='mx-4'>
            <SearchBarComponent handleSearch={handleSearch} />
            <PermanentFilter />
          </div>
        </section>


        <section className="">
          <TransactionsPropsContainer
            handleAlphabetically={handleAlphabetically}
            handleOrderByAmount={handleOrderByAmount}
          />
          <div>
            {transactions?.length
              ? transactions?.map((t, i) => (
                <TransactionCard
                  handleDetail={handleDetail}
                  transaction={t}
                  key={i}
                />
              ))
              : null}
          </div>
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

export default TransactionsComponent;
