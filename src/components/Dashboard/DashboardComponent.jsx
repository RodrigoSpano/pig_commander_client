"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import TransactionsComponent from "../Transactions/TransactionsComponent";
import StatsContainer from "./subcomps/StatsContainer";
import MyGraph from "./subcomps/MyGraph/MyGraph";
import { getAllTransactions } from "@/redux/actions/monthTransactionsActions";
import { getMethodsAction } from "@/redux/actions/otherInfoActions";
import MyJournalCard from "./subcomps/MyJournalCard";
import LoaderComponent from "../Loader/LoaderComponent";

const DashboardComponent = () => {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies();
  const [isLoading, setIsLoading] = useState(true);

  const userLogged = useSelector((state) => state.user.logged);

  useEffect(() => {
    if (cookies.token) {
      dispatch(getAllTransactions(cookies.token));
      dispatch(getMethodsAction(cookies.token));
    }

    if (userLogged) {
      setIsLoading(false);
    }
  }, [userLogged]);

  return (
    <div className="m-6">
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <>
          <StatsContainer />

          <div className="flex flex-col-reverse lg:flex-col">
            <section className="mt-3 mb-4 ">
              <MyJournalCard />
            </section>

            <section className="flex flex-col-reverse  lg:flex-row">
              <div className="mt-3 sm:w-full md:mt-0 lg:w-2/3 lg:mr-4">
                <TransactionsComponent />
              </div>
              <div className="mt-2 sm:w-full md:mt-0 lg:w-1/3">
                <MyGraph />
              </div>
            </section>

          </div>
        </>
      )}
    </div>
  );
};

export default DashboardComponent;