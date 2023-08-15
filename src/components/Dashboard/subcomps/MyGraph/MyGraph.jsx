import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const DonutChartComponent = () => {
  const lastTransactions = useSelector(
    (state) => state.monthTransactions.transactions
  );
  const categories = useSelector((state) => state.others.categories);

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
      "#5A67D8",
      "#7F9CF5",
      "#93C5FD",
      "#A5E4FF",
      "#D1EEFF",
    ];
    return categoryColors[
      categoryExpenses.findIndex((category) => category.id === categoryId) %
        categoryColors.length
    ];
  };

  const chartData = categoryExpenses.map((categoryExpense) => ({
    x: categoryExpense.name,
    y: categoryExpense.totalExpense,
    color: assignColorToCategory(categoryExpense.id),
  }));

  const options = {
    chart: {
      type: "donut",
    },
    labels: chartData.map((data) => data.x),
    colors: chartData.map((data) => data.color),
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              fontSize: 30,
              fontWeight: "bold",
              color: "#000000",
            },
          },
        },
      },
    },
  };

  const series = chartData.map((data) => data.y);

  options.legend = {
    show: true,
    position: "bottom", // Puedes ajustar la posición según tu preferencia
    horizontalAlign: "center",
    fontSize: "20px", // Ajusta el tamaño de fuente aquí
    labels: {
      colors: "#7E7E7E", // Color de las etiquetas
    },
  };

  return (
    <div className="max-w-xl max-h-xl p-4 shadow-lg rounded-lg bg-white select-none">
      <h2 className="text-xl font-bold mb-8 text-boldPink">
        Spending This Month
      </h2>
      <div className="flex justify-center">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={535}
        />
      </div>
    </div>
  );
};

export default DonutChartComponent;
