import React from "react";
import { Doughnut } from "react-chartjs-2";

const EmptyDonut = () => {
  const chartOptions = {
    legend: {
      display: true,
      position: "bottom",
    },
    cutoutPercentage: 70,
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-lg font-semibold">No hay gastos</p>
      <div className="flex items-center justify-center h-[410px]">
        <Doughnut
          data={{
            datasets: [{ data: [1], backgroundColor: ["#d3d3d3"] }],
            labels: ["No Expenses"],
          }}
          options={chartOptions}
        />
      </div>
    </div>
  );
};

export default EmptyDonut;
