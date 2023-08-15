// import React from "react";
// import { useSelector } from "react-redux";
// import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

// const DonutChartComponent = () => {
//   const lastTransactions = useSelector(
//     (state) => state.monthTransactions.transactions
//   );
//   const categories = useSelector((state) => state.others.categories);

//   const lastExpenses = lastTransactions.filter((t) => t.type === "expense");

//   const categoryExpenses = categories.map((category) => ({
//     id: category.id,
//     name: category.name.replace(/^\w/, (c) => c.toUpperCase()),
//     totalExpense: lastExpenses
//       .filter((transaction) => transaction.category_id === category.id)
//       .reduce((total, transaction) => total + transaction.amount, 0),
//   }));

//   const assignColorToCategory = (categoryId) => {
//     const categoryColors = [
//       "#5A67D8",
//       "#7F9CF5",
//       "#93C5FD",
//       "#A5E4FF",
//       "#D1EEFF",
//     ];
//     return categoryColors[
//       categoryExpenses.findIndex((category) => category.id === categoryId) %
//         categoryColors.length
//     ];
//   };

//   const chartData = categoryExpenses.map((categoryExpense) => ({
//     name: categoryExpense.name,
//     value: categoryExpense.totalExpense,
//     color: assignColorToCategory(categoryExpense.id),
//   }));

//   const COLORS = chartData.map((data) => data.color);

//   return (
//     <div className="max-w-xl max-h-xl p-4 shadow-lg rounded-lg bg-white select-none">
//       <h2 className="text-xl font-bold mb-8 text-boldPink">
//         Spending This Month
//       </h2>
//       <div className="flex justify-center">
//         <PieChart width={535} height={500}>
//           <Pie
//             data={chartData}
//             dataKey="value"
//             nameKey="name"
//             cx="50%"
//             cy="50%"
//             outerRadius={150}
//             fill="#8884d8"
//             labelLine={false}
//           >
//             {chartData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index]} />
//             ))}
//           </Pie>
//           <Legend iconSize={10}/>
//           <Tooltip />
//         </PieChart>
//       </div>
//     </div>
//   );
// };

// export default DonutChartComponent;

// import React from "react";
// import { useSelector } from "react-redux";
// import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

// const DonutChartComponent = () => {
//   const lastTransactions = useSelector(
//     (state) => state.monthTransactions.transactions
//   );
//   const categories = useSelector((state) => state.others.categories);

//   const lastExpenses = lastTransactions.filter((t) => t.type === "expense");

//   const categoryExpenses = categories.map((category) => ({
//     id: category.id,
//     name: category.name.replace(/^\w/, (c) => c.toUpperCase()),
//     totalExpense: lastExpenses
//       .filter((transaction) => transaction.category_id === category.id)
//       .reduce((total, transaction) => total + transaction.amount, 0),
//   }));

//   const assignColorToCategory = (categoryId) => {
//     const categoryColors = [
//       "#5A67D8",
//       "#7F9CF5",
//       "#93C5FD",
//       "#A5E4FF",
//       "#D1EEFF",
//     ];
//     return categoryColors[
//       categoryExpenses.findIndex((category) => category.id === categoryId) %
//         categoryColors.length
//     ];
//   };

//   const chartData = categoryExpenses.map((categoryExpense) => ({
//     name: categoryExpense.name,
//     value: categoryExpense.totalExpense,
//     color: assignColorToCategory(categoryExpense.id),
//   }));

//   const COLORS = chartData.map((data) => data.color);

//   const totalExpenses = chartData.reduce((total, category) => total + category.value, 0);

//   const formattedTotalExpenses = totalExpenses.toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD",
//   });

//   const formattedTotalExpensesWithoutDecimals = formattedTotalExpenses.split(".")[0]; // Remove decimals

//   return (
//     <div className="flex flex-col items-center justify-center max-w-xl max-h-xl p-4 shadow-lg rounded-lg bg-white select-none">
//       <h2 className="text-xl font-bold mb-8 text-boldPink">
//         Spending This Month
//       </h2>
//       <div className="text-center mb-4">
//         <p className="text-lg font-semibold">Total Expenses</p>
//         <p className="text-2xl font-bold">{formattedTotalExpensesWithoutDecimals}</p>
//       </div>
//       <div className="flex justify-center">
//         <PieChart width={500} height={425}>
//           <Pie
//             data={chartData}
//             dataKey="value"
//             nameKey="name"
//             cx="50%"
//             cy="50%"
//             outerRadius={150}
//             fill="#8884d8"
//             labelLine={false}
//           >
//             {chartData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index]} />
//             ))}
//           </Pie>
//           <Legend iconSize={10} />
//           <Tooltip />
//         </PieChart>
//       </div>
//     </div>
//   );
// };

// export default DonutChartComponent;

import React from "react";
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

const DonutChartComponent = () => {
  const lastTransactions = useSelector(
    (state) => state.monthTransactions.transactions
  );
  const categories = useSelector((state) => state.others.categories);

  Chart.register(ArcElement);

  const lastExpenses = lastTransactions.filter((t) => t.type === "expense");

  const categoryExpenses = categories.map((category) => ({
    id: category.id,
    name: category.name.replace(/^\w/, (c) => c.toUpperCase()),
    totalExpense: lastExpenses
      .filter((transaction) => transaction.category_id === category.id)
      .reduce((total, transaction) => total + transaction.amount, 0),
  }));

  const assignColorToCategory = (categoryId) => {
    const categoryColors = [
      "red",
      "#7F9CF5",
      "green",
      "orange",
      "black",
    ];
    return categoryColors[
      categoryExpenses.findIndex((category) => category.id === categoryId) %
        categoryColors.length
    ];
  };

  const chartData = categoryExpenses.map((categoryExpense) => ({
    name: categoryExpense.name,
    value: categoryExpense.totalExpense,
    color: assignColorToCategory(categoryExpense.id),
  }));

  const COLORS = chartData.map((data) => data.color);

  const totalExpenses = chartData.reduce(
    (total, category) => total + category.value,
    0
  );

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
    <div className="flex flex-col items-center justify-center max-w-xl max-h-xl p-4 shadow-lg rounded-lg bg-white select-none">
      <h2 className="text-xl font-bold mb-8 text-boldPink">
        Gastos de Este Mes
      </h2>
      <div className="text-center mb-4">
        <p className="text-lg font-semibold">Gastos Totales</p>
        <p className="text-2xl font-bold">
          {formattedTotalExpensesWithoutDecimals}
        </p>
      </div>
      <div className="flex justify-center">
        <div >
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
            className="flex items-center mb-2 mr-4"
            style={{ color: data.color }}
          >
            <div
              className="w-4 h-4 rounded-full mr-1"
              style={{ backgroundColor: data.color }}
            />
            <span>{data.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChartComponent;
