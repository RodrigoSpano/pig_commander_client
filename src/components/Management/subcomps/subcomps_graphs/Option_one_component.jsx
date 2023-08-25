import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
import {FaPiggyBank} from "react-icons/fa"

export default function Option_one_component() {
  const inversions = useSelector((state) => state.inversions.allInversions);

  const [selectedInversion, setSelected] = useState(0);
  const [chartDisplayer, setChartDisplayer] = useState("");
  const [earningShowUp, setEarningShowUp] = useState("Loading");
  const [amountShowUp, setAmountShowUp] = useState("Loading");
  const [isLoading, setLoading] = useState(false);

  const setSelectedInversion = (data) => {
    setSelected(data);
  };

  const Charter = async () => {
    setLoading(true); 
      try {
    
        setEarningShowUp(
          getEarnings(
            getDate(inversions[parseInt(selectedInversion)].started_on),
            getDate(inversions[parseInt(selectedInversion)].finish_at),
            inversions[parseInt(selectedInversion)].earning,
            inversions[parseInt(selectedInversion)].amount,
            0
          )
        );
        setAmountShowUp(inversions[parseInt(selectedInversion)].amount);

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
      } catch (error) {
        console.error("Error calculating chart data:", error);
      } finally {
        setLoading(false); 
      }
    
  };

  useEffect(() => {
    Charter();
    if(inversions.length === 0) {
      setAmountShowUp("0")
      setEarningShowUp("0")
      setChartDisplayer()
    }
  }, [selectedInversion, inversions]);

  return (
    <div>
      <div className="dark:border-0">
        {/* <Buttons_nav /> */}
        <Card className="rounded-t-2xl dark:bg-mediumGrayDarkMode dark:border-0">
          <Title className="text-3xl text-center text-boldPink dark:text-mediumPinkDark font-extrabold tracking-tight sm:text-3xl mb-2">
            Money vs Dates
          </Title>
          <LineChart
            className=" stroke-pink-400 capitalize"
            data={chartDisplayer}
            startEndOnly={false}
            autoMinValue={true}
            categories={["total", "amount"]}
            colors={["blue", "gray"]}
            valueFormatter={undefined}
            showXAxis={true}
            yAxisWidth={50}
          />
        </Card>
      </div>
      <div className="flex justify-center w-full max-h-20">
        <div className="w-1/3 flex justify-center content-center  text-center mt-4">
          <Signs title={"Investment Amount"} amount={amountShowUp} />
        </div>
        <div className="w-1/3 flex justify-center content-center text-center mt-4">
          <Signs title={"Total Profit"} amount={earningShowUp} />
        </div>
      </div>

      {
        !inversions.length ? <div className="flex flex-col gap-4 justify-center items-center h-64 "><p className="text-4xl text-gray-400"><FaPiggyBank/></p><h2 className="text-gray-400">No investments, create one</h2></div> : <TableComponent setSelectedInversion={setSelectedInversion} />
      }
    </div>
  );
}
