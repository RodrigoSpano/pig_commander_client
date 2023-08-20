import React, { useState, useEffect } from "react";
import SavingsTableComponent from "./subcomps_module/SavingsTableComponent.jsx";
import { LineChart, Card, Title } from "@tremor/react";
import { savingsUpToDate } from "@/utils/helper/savingsFuncs.js";


export default function Option_two_component({ savings }) {
  const [chartDisplayer, setChartDisplayer] = useState("");
  const [selectedSaving, setSelected] = useState(0);

 

  useEffect(() => {
    Charter();
  }, [selectedSaving, savings]);

  const Charter = async () => {
    await waitForDefinedParams(savings);

    const chartDisplayer = savingsUpToDate(
      savings[parseInt(selectedSaving)].goal,
      savings[parseInt(selectedSaving)].amount
    );
    setChartDisplayer(chartDisplayer);
  };

  const setSelectedSaving = (data) => {
    setSelected(data);
  };

  //elimina el error que si no llegaron las peticiones del back no te deje entrar a managment, sino que quede en bucle esperando
  const waitForDefinedParams = async (paramsObj) => {
    const keys = Object.keys(paramsObj);

    while (keys.some((key) => paramsObj[key] === undefined)) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Esperar 1 segundo
    }
  };

  return (
    <div>
      <div>
        {" "}
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
          savings={savings}
          setSelectedSaving={setSelectedSaving}
        />
      </div>
    </div>
  );
}
