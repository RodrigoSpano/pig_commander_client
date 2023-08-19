import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import "../../../../Wallet/CustomScrollBar.css";
import {
  getEarnings,
  getDate,
  weldDates,
} from "@/utils/helper/inversionsFuncs";

export default function TableComponent({ setSelectedSaving, savings }) {
  const [selectedColor, setSelectedColor] = useState("default");

  return (
    <div className="flex flex-col gap-3">
      <div className=" custom-scrollbar overflow-y-auto max-h-[230px]">
        <Table
          color="danger"
          selectionMode="single"
          defaultSelectedKeys={["2"]}
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>DAILY SAVINGS</TableColumn>
            <TableColumn>GOAL AMOUNT</TableColumn>
          </TableHeader>
          <TableBody>
            {savings.map((element, index) => {
              return (
                <TableRow
                  key={element.id}
                  data-id={index}
                  onClick={setSelectedSaving}
                >
                  <TableCell>{element.name}</TableCell>
                  <TableCell>{element.amount}</TableCell>
                  <TableCell>{element.goal}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
