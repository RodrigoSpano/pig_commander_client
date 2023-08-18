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

const DashboardComponent = () => {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies();

  const user = useSelector(
    (state) => state.user.logged
  );

  return (
    <div className="m-6">
        <>
          <StatsContainer />
{/* 
          <div className="flex flex-col">
            <div className="mt-3 mb-4">
              <MyJournalCard />
            </div>

            <div className="flex">
              <div className="w-2/3 mr-4">
                <TransactionsComponent />
              </div>
              <div className="w-1/3">
                <MyGraph />
              </div>
            </div>
          </div> */}
        </>
    </div>
  );
}

export default DashboardComponent