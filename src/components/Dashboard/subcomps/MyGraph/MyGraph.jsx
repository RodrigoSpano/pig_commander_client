import React from "react";
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import EmptyDonut from "./EmptyDonutComponent";

const DonutChartComponent = () => {
  const lastTransactions = useSelector(
    (state) => state.monthTransactions.backup_transactions
  );
  const categories = useSelector((state) => state.others.categories);

  Chart.register(ArcElement);

  const lastExpenses = lastTransactions.filter((t) => t.type === "expense");

  const categoryExpenses = categories?.map((category) => ({
    id: category.id,
    name: category.name.replace(/^\w/, (c) => c.toUpperCase()),
    totalExpense: lastExpenses
      .filter((transaction) => transaction.category_id === category.id)
      .reduce((total, transaction) => total + transaction.amount, 0),
  }));

  const assignColorToCategory = (categoryId) => {
    const categoryColors = [
      "#cdb4db",
      "#ff758f",
      "#ffafcc",
      "#bde0fe",
      "#5aa9e6",
    ];
    return categoryColors[
      categoryExpenses.findIndex((category) => category.id === categoryId) %
        categoryColors.length
    ];
  };

  const chartData = categoryExpenses?.map((categoryExpense) => ({
    name: categoryExpense.name,
    value: categoryExpense.totalExpense,
    color: assignColorToCategory(categoryExpense.id),
  })) || [];

  const COLORS = chartData?.map((data) => data.color);

  const totalExpenses = chartData?.reduce(
    (total, category) => total + category.value,
    0
  ) || 0;  

  const formattedTotalExpenses = totalExpenses.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedTotalExpensesWithoutDecimals =
    formattedTotalExpenses.split(".")[0];

  const chartDataSets = [
    {
      data: chartData.map((data) => data.value),
      backgroundColor: COLORS,
    },
  ];

  const chartOptions = {
    legend: {
      display: true,
      position: "bottom",
    },
    cutoutPercentage: 70,
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 shadow-lg rounded-lg bg-white select-none">
      <h2 className="text-xl font-bold mb-8 text-boldPink">Spent This Month</h2>
      {lastExpenses.length > 0 ? (
        <>
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-[#374151]">
              Total Expenses
            </p>
            <p className="text-2xl font-bold text-[#374151]">
              {formattedTotalExpensesWithoutDecimals}
            </p>
          </div>
          <div className="flex justify-center">
            <div>
              <Doughnut
                data={{
                  datasets: chartDataSets,
                  labels: chartData.map((data) => data.name),
                }}
                options={chartOptions}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-14">
            {chartData.map((data) => (
              <div
                key={data.name}
                className={`flex items-center mb-2 mr-4 color[${data.color}]`}
              >
                <div
                  className={`w-4 h-4 rounded-full mr-1`}
                  style={{ backgroundColor: data.color }}
                />
                <span>{data.name}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <EmptyDonut />
      )}
    </div>
  );
};

export default DonutChartComponent;