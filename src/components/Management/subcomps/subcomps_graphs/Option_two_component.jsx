import React, { useState, useEffect } from "react";
import SavingsTableComponent from "./subcomps_module/SavingsTableComponent.jsx";
import { LineChart, Card, Title } from "@tremor/react";
import { savingsUpToDate } from "@/utils/helper/savingsFuncs.js";
import { useSelector } from "react-redux";


export default function Option_two_component() {
  const savings = useSelector((state) => state.savings.allSavings);
  const [chartDisplayer, setChartDisplayer] = useState("");
  const [selectedSaving, setSelected] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const calculateChartDataAsync = async () => {
    const chartData = await savingsUpToDate(
      savings[parseInt(selectedSaving)].goal,
      savings[parseInt(selectedSaving)].amount
    );
    return chartData;
  };

  const Charter = async () => {
    setLoading(true);
    console.log(isLoading)
    try {
      const chartData = await calculateChartDataAsync();
      setChartDisplayer(chartData);
    } catch (error) {
      console.error("Error calculating chart data:", error);
    } finally {
      setLoading(false);
    }
  };

  const setSelectedSaving = (data) => {
    setSelected(data);
  };

  useEffect(() => {
    Charter();
  }, [selectedSaving, savings]);

  return (
    <div>
      <div>
        <Card>
          <Title>Savings</Title>
          <LineChart
            className="mt-6 stroke-pink-400"
            data={chartDisplayer}
            index="day"
            startEndOnly={false}
            autoMinValue={true}
            showXAxis={true}
            height="h-80"
            categories={["total", "amount"]}
            colors={["blue", "gray"]}
            valueFormatter={undefined}
            yAxisWidth={50}
          />
        </Card>
      </div>
      <div>
        <SavingsTableComponent
          setSelectedSaving={setSelectedSaving}
        />
      </div>
    </div>
  );
}
