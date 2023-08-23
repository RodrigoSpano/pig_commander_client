import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import EmptyDonut from "./EmptyDonutEs";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Donut({ index }) {
  const savings = useSelector((state) => state.savings.allSavings);
  const [empty, setEmpty] = useState(true);
  const [dinamicGoal, setDinamicGoal] = useState(0);

  Chart.register(ArcElement);

  useEffect(() => {
    if (index >= 0 && savings[index]) {
      setEmpty(false)
      setDinamicGoal(savings[index].goal - savings[index].amount);
    } else {
      setDinamicGoal(0);
      setEmpty(true)
    }
  }, [index, savings]);
  
  const chartOptions = {
    legend: {
      display: true,
      position: "bottom",
    },
    cutoutPercentage: 70,
  };

  return empty ? (
    <EmptyDonut />
  ) : (
    <Doughnut
      data={{
        datasets: [
          {
            data: [dinamicGoal, index >= 0 && savings[index] ? savings[index].amount : 0],
            backgroundColor: ["#cdb4db", "#ff758f"],
          },
        ],
        labels: ["", ""],
      }}
      options={chartOptions}
    />
  );
}
