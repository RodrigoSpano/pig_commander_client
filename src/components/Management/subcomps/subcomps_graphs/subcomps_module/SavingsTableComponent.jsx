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
import useDetailSaving from "@/customHooks/useDetailSaving";

export default function TableComponent({ setSelectedSaving, savings }) {
  const [selectedId, setSelectedId] = useState(0);
  const [preSelectedId, setPreSelectedId] = useState("");
  const [clickCount, setClickCount] = useState(0);

  const { handleDetailSav } = useDetailSaving();

  const handleDoubleClick = () => {
    setPreSelectedId(selectedId);

    if (selectedId === preSelectedId) {
      setClickCount(clickCount + 1);
      if (clickCount === 1) {
     
        handleDetailSav(selectedId); //pop up hook

        setClickCount(0);
      }
    }
  };

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
                  onClick={() => {
                    setSelectedSaving(index); //este es para el grafico
                    setSelectedId(element.id); //este es para el popup
                    handleDoubleClick();
                  }}
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
