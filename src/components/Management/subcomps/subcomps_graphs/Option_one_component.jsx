import React, { useEffect, useState } from "react";
//modulos
import { LineChart, Card, Title } from "@tremor/react";
import Signs from "./subcomps_module/Signs";
import TableComponent from "./subcomps_module/TableComponent";
//funcs
import {
  earnedUpToDate,
  getDate,
  getEarnings,
} from "@/utils/helper/inversionsFuncs";

export default function Option_one_component({ inversions }) {
  const [selectedInversion, setSelected] = useState(1);
  const [chartDisplayer, setChartDisplayer] = useState("");
  const [earningShowUp, setEarningShowUp] = useState("Loading");
  const [amountShowUp, setAmountShowUp] = useState("Loading")

  const setSelectedInversion = (data) => {
    setSelected(data);
  };

  useEffect(() => {
    Charter();
  }, [selectedInversion, inversions]);

  const Charter = async () => {
    await waitForDefinedParams(inversions);

    let data = {
      date1: getDate(inversions[parseInt(selectedInversion)].started_on),
      date2: getDate(inversions[parseInt(selectedInversion)].finish_at),
      interest: inversions[parseInt(selectedInversion)].earning,
      amount: inversions[parseInt(selectedInversion)].amount,
    };

    const chartDisplayer = earnedUpToDate(
      data.date2,
      data.date1,
      data.interest,
      data.amount
    );
    setChartDisplayer(chartDisplayer);
  };

  //elimina el error que si no llegaron las peticiones del back no te deje entrar a managment, sino que quede en bucle esperando
  const waitForDefinedParams = async (paramsObj) => {
    const keys = Object.keys(paramsObj);

    while (keys.some((key) => paramsObj[key] === undefined)) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Esperar 1 segundo
    }
    setEarningShowUp(
      getEarnings(
        getDate(inversions[parseInt(selectedInversion)].started_on),
        getDate(inversions[parseInt(selectedInversion)].finish_at),
        inversions[parseInt(selectedInversion)].earning,
        inversions[parseInt(selectedInversion)].amount,
        0
      )
    );
    setAmountShowUp(inversions[parseInt(selectedInversion)].amount)
  };

  return (
    <div>
      <div>
        {/* <Buttons_nav /> */}
        <Card>
          <Title className="justify-center flex text-lg font-semibold text-boldPink">
            Money vs Dates
          </Title>
          <LineChart
            className="mt-6 stroke-pink-400 "
            data={chartDisplayer}
            index="day"
            startEndOnly={false}
            autoMinValue={true}
            height="h-60"
            categories={["total", "amount"]}
            colors={["blue", "gray"]}
            valueFormatter={undefined}
            showXAxis={true}
            yAxisWidth={50}
          />
        </Card>
      </div>
      <div className="flex flex-row w-full max-h-20">
        <div className="w-1/3 flex justify-center content-center text-center">
          <Signs
            title={"Investment amount"}
            amount={amountShowUp}
          />
        </div>
        <div className="w-1/3 flex justify-center content-center text-center">
          <Signs title={"Total Taxes"} amount={"Not found"} />
        </div>
        <div className="w-1/3 flex justify-center content-center text-center">
          <Signs title={"Total Profit"} amount={earningShowUp} />
        </div>
      </div>

      <TableComponent
        setSelectedInversion={setSelectedInversion}
        inversions={inversions}
      />
    </div>
  );
}
