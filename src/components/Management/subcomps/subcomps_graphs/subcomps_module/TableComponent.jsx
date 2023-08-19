import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import  '../../../../Wallet/CustomScrollBar.css'
import { getEarnings, getDate, weldDates } from "@/utils/helper/inversionsFuncs";

export default function TableComponent({ setSelectedInversion, inversions }) {
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
          <TableColumn>STARTED</TableColumn>
          <TableColumn>FINISHED</TableColumn>
          <TableColumn>INVESTED</TableColumn>
          <TableColumn>EARNED</TableColumn>
        </TableHeader>
        <TableBody>
          {inversions.map((element, index) => {
            return (
              <TableRow key={element.id} data-id={index} onClick={setSelectedInversion}>
                <TableCell>{element.name}</TableCell>
                <TableCell>{weldDates(getDate(element.started_on))}</TableCell>
                <TableCell>{weldDates(getDate(element.finish_at))}</TableCell>
                <TableCell>{element.amount}</TableCell>
                <TableCell>
                  {
                   getEarnings(
                      getDate(element.started_on),
                      getDate(element.finish_at),
                      element.earning,
                      element.amount,
                      0
                    ) 
                  }
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </div>
    </div>
  );
}
