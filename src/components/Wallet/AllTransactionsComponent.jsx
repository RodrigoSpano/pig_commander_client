import React from "react";
import { useSelector } from "react-redux";
import TransactionCard from "../Transactions/subcomps/TransactionCard";
import useTransactionDetail from "@/customHooks/useTransactionDetail";

const AllTransactionsComponent = ({allTransactions}) => {

  const { handleDetail } = useTransactionDetail();

  return (
    <div>
      {allTransactions?.length
        ? allTransactions?.map((t, i) => (
            <TransactionCard
              transaction={t}
              handleDetail={handleDetail}
              key={i}
            />
          ))
        : null}
    </div>
  );
};

export default AllTransactionsComponent;