import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const SectionDetail = ({ totalIncomes, totalExpenses, user }) => {
  return (
    <div className={"flex gap-4 justify-center "}>
      <div className="flex flex-col">
        <Tabs aria-label="Options">
          <Tab key="Balance" title="Balance">
            <Card>
              <CardBody className={"flex items-center  gap-2"}>
                <h2 className="text-xl font-semibold">Total</h2>
                <p>
                  ${" "}
                  {totalIncomes - totalExpenses <= 0
                    ? 0
                    : totalIncomes - totalExpenses}
                </p>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="incomes" title="Incomes">
            <Card>
              <CardBody className={"flex items-center  gap-2"}>
                <h2 className="text-xl font-semibold">Total</h2>
                <p>$ {totalIncomes}</p>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="expenses" title="Expenses">
            <Card>
              <CardBody className={"flex items-center  gap-2"}>
                <h2 className="text-xl font-semibold">Total</h2>
                <p>$ {totalExpenses}</p>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      <div
        className={
          "flex flex-col items-center shadow-lg p-4 rounded-xl shadow-2xl h-[152px]"
        }
      >
        <div className={"flex flex-col items-center"}>
          <p className="text-lg text-[#12A150] ">Account created at</p>
          <p className={"text-lg font-semibold"}>
            {new Date(user.createdAt).toLocaleString()} HS
          </p>
        </div>
        {user.deletedAt !== null ? (
          <div className={"flex flex-col items-center"}>
            <p className="text-lg text-[#f31260]">Account banned at</p>
            <p className={"text-lg font-semibold"}>
              {new Date(user.deletedAt).toLocaleString()} HS
            </p>
          </div>
        ) : (
          <p className="mt-4 font-semibold text-lowGray">
            This account has not been banned
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionDetail;
