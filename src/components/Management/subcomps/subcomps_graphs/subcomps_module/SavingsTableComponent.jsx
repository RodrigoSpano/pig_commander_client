import React, { useState } from "react";
import { useSelector } from "react-redux";
import {FaTrashCan} from 'react-icons/fa6'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import "../../../../Wallet/CustomScrollBar.css";
import useDetailSaving from "@/customHooks/useDetailSaving";

export default function TableComponent({ setSelectedSaving }) {
  const savings = useSelector((state) => state.savings.allSavings);
  const { handleDetailSav } = useDetailSaving();

  const deleteById = (id) => {
    handleDetailSav(id);//pop up hook
  }


  return (
    <div className="flex flex-col gap-3">
      <div className=" custom-scrollbar overflow-y-auto max-h-[230px] w-2/3 self-center">
        <Table
          color="danger"
          selectionMode="single"
          defaultSelectedKeys={["2"]}
          aria-label="Example static collection table"
        >
          <TableHeader>
          <TableColumn></TableColumn>
            <TableColumn>NAME</TableColumn>
            <TableColumn>GOAL AMOUNT</TableColumn>
          </TableHeader>
          <TableBody>
            {savings.map((element, index) => {
              return (
                <TableRow
                  key={element.id}
                  onClick={() => {
                    setSelectedSaving(index); //este es para el grafico
                  }}
                >
                   <TableCell onClick={() => {deleteById(element.id)}}>
                   <FaTrashCan className="text-red-600 cursor-pointer text-center"/>
                   </TableCell>
                  <TableCell>{element.name}</TableCell>
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
