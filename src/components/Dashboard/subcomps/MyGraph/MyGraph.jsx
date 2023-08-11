import React from "react";
import { Card, DonutChart } from "@tremor/react";
import { motion } from "framer-motion";

const valueFormatter = (number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const DonutChartComponent = () => {
  const chartData = [
    { name: "Groceries", sales: 250, color: "#5A67D8" },
    { name: "Dining Out", sales: 120, color: "#7F9CF5" },
    { name: "Entertainment", sales: 80, color: "#93C5FD" },
    { name: "Shopping", sales: 180, color: "#A5E4FF" },
    { name: "Bills", sales: 300, color: "#D1EEFF" },
  ];

  const colors = chartData.map((item) => item.color);

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
  };

  return (
    <Card className="max-w-xl max-h-xl p-4 shadow-lg rounded-lg bg-white select-none">
      <h2 className="text-xl font-bold mb-8 text-boldPink">Spending This Month</h2>
      <div className="flex justify-center">
        <DonutChart
          data={chartData}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={colors}
          width={400}
          height={400}
        />
      </div>

      <hr className="mt-4" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {chartData.map((item, index) => (
          <motion.div
            key={index}
            variants={listItemVariants}
            className="flex justify-between items-center py-3"
          >
            <div className="flex items-center">
              <motion.div
                className="w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
                whileHover={{ scale: 1.2 }}
              ></motion.div>
              <span className="text-gray-800">{item.name}</span>
            </div>

            <div className="text-gray-700">
              <span className="">${item.sales}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
};

export default DonutChartComponent;
