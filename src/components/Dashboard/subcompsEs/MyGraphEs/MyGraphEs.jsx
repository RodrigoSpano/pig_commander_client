import React from "react";
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import EmptyDonut from "./EmptyDonutComponentEs";

const DonutChartComponentEs = () => {
  const lastTransactions = useSelector(
    (state) => state.monthTransactions.backup_transactions
  );
  const categories = useSelector((state) => state.others.categories);

  Chart.register(ArcElement);

  const lastExpenses = lastTransactions?.filter((t) => t.type === "expense");

  const assignColorToCategory = (categoryId) => {
    const categoryColors = [
      "#cdb4db",
      "#ff758f",
      "#ffafcc",
      "#bde0fe",
      "#5aa9e6",
      '#023e8a'
    ];
    return categoryColors[
      categoryExpenses.findIndex((category) => category.id === categoryId) %
        categoryColors.length
    ];
  };

  const categoryExpenses = categories?.map((category) => ({
    id: category.id,
    name: category.name.replace(/^\w/, (c) => c.toUpperCase()),
    totalExpense: lastExpenses
      .filter((transaction) => transaction.category_id === category.id)
      .reduce((total, transaction) => total + transaction.amount, 0),
  }));

  const filteredCategories = [
    "entertainment",
    "health",
    "education",
    "transport",
    "food",
  ];

  const filteredCategoryExpenses = categoryExpenses.filter(
    (categoryExpense) =>
      filteredCategories.includes(categoryExpense.name.toLowerCase())
  );

  const otherCategories = categoryExpenses
    .filter((categoryExpense) =>
      !filteredCategories.includes(categoryExpense.name.toLowerCase())
    )
    .map((categoryExpense) => ({
      name: categoryExpense.name,
      value: categoryExpense.totalExpense,
      color: assignColorToCategory(categoryExpense.id),
    }));

  const chartData = filteredCategoryExpenses
    .map((categoryExpense) => ({
      name: categoryExpense.name,
      value: categoryExpense.totalExpense,
      color: assignColorToCategory(categoryExpense.id),
    }))
    .concat({
      name: "Others",
      value: otherCategories.reduce(
        (total, category) => total + category.value,
        0
      ),
      color:'#a663cc'
    });
    
const COLORS = chartData?.map((data) => data.color);

  const totalExpenses = chartData?.reduce(
    (total, category) => total + category.value,
    0
  );

  const formattedTotalExpenses = totalExpenses?.toLocaleString({
    style: "currency",
    currency: "USD",
  });

  const formattedTotalExpensesWithoutDecimals =
    formattedTotalExpenses?.split(".")[0];

  const chartDataSets = [
    {
      data: chartData?.map((data) => data.value),
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
    <div className="flex flex-col items-center justify-center w-full h-full p-4 shadow-lg rounded-lg bg-white dark:bg-mediumGrayDarkMode  select-none">
      <h2 className="text-xl font-bold mb-8 text-boldPink dark:text-mediumPinkDark">Gastado Este Mes</h2>
      {lastExpenses.length > 0 ? (
        <>
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-[#374151] dark:text-white">
              Gastos Totales 
            </p>
            <p className="text-2xl font-bold text-[#374151] dark:text-white">
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

export default DonutChartComponentEs;
