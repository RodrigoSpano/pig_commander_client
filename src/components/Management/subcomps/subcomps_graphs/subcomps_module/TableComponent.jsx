import React from "react";
import {FaTrashCan} from 'react-icons/fa6'
import { useSelector } from "react-redux";
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
import useDetailInv from "@/customHooks/useDetailInv";

export default function TableComponent({ setSelectedInversion }) {
  const inversions = useSelector((state) => state.inversions.allInversions);
  const { handleDetailInv } = useDetailInv();
  
  const deleteById = (id) => {
    handleDetailInv(id) //pop up hook
  }

  return (
    <div className="flex flex-col gap-3">
      <div className=" custom-scrollbar overflow-y-auto h-auto max-h-80">
        <Table
          color="danger"
          selectionMode="single"
          defaultSelectedKeys={["2"]}
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn></TableColumn>
            <TableColumn>NAME</TableColumn>
            <TableColumn>START</TableColumn>
            <TableColumn>FINISH</TableColumn>
            <TableColumn>INVESTED</TableColumn>
            <TableColumn>EARNED</TableColumn>
          </TableHeader>
          <TableBody>
            {inversions.map((element, index) => {
              return (
                <TableRow
                  key={element.id}
                  onClick={() => {
                    setSelectedInversion(index); //grafico
                  }}
                >
                  <TableCell onClick={() => {deleteById(element.id)}}>
                    <FaTrashCan className="text-red-600 cursor-pointer text-center"/>
                  </TableCell>
                  <TableCell>{element.name}</TableCell>
                  <TableCell>
                    {weldDates(getDate(element.started_on))}
                  </TableCell>
                  <TableCell>{weldDates(getDate(element.finish_at))}</TableCell>
                  <TableCell>{element.amount}</TableCell>
                  <TableCell>
                    {getEarnings(
                      getDate(element.started_on),
                      getDate(element.finish_at),
                      element.earning,
                      element.amount,
                      0
                    )}
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
