import React, { useEffect } from "react";

//modulos
import { LineChart, Card, Title } from "@tremor/react";
import Buttons_nav from "./subcomps_module/Buttons_nav";
import Signs from "./subcomps_module/signs";

//funcs
import { earnedUpToDate } from "@/utils/helper/inversionsFuncs";

/* const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`; */

export default function Option_one_component({ inversions, savings }) {
  useEffect(() => {
    console.log('inversions aca')
    console.log(inversions)
    const date1 = new Date("2023-02-01");
    const date2 = new Date("2023-01-01");
    const interest = 0.1;
    
    const chartDisplayer = earnedUpToDate(date1, date2, interest, 5000);
  });

  //hardcodeooo
  const date1 = new Date("2023-02-01");
  const date2 = new Date("2023-01-01");
  const interest = 0.1;
  const chartDisplayer = earnedUpToDate(date1, date2, interest, 5000);

  return (
    <div>
      <div>
        <Buttons_nav />
        <Card>
          <Title>Investment </Title>
          <LineChart
            className="mt-6 stroke-pink-400"
            data={chartDisplayer}
            index="day"
            startEndOnly={false}
            autoMinValue={true}
            height='h-80'
            categories={["total", "amount"]}
            colors={["blue", "gray"]}
            valueFormatter={undefined}
            yAxisWidth={50}
          />
        </Card>
      </div>
      <div className="flex flex-row justify-between">
        <Signs title={"Investment amount"} amount={"5000,00"} />
        <Signs title={"Total Taxes"} amount={"500,00"} />
        <Signs title={"Total Profit"} amount={"6500,00"} />
      </div>
      <div></div>
    </div>
  );
}
