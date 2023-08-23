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
        <Doughnut
          data={{
            datasets: [{ data: [1], backgroundColor: ["#d3d3d3"] }],
            labels: ["No Expenses"],
          }}
          options={chartOptions}
        />
  );
};

export default EmptyDonut;
