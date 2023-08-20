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
import useDetailInv from "@/customHooks/useDetailInv";

export default function TableComponent({ setSelectedInversion, inversions }) {
  const [selectedId, setSelectedId] = useState(0)
  const [preSelectedId, setPreSelectedId] = useState("")
  const [clickCount, setClickCount] = useState(0);

  const { handleDetailInv } = useDetailInv();

  const handleDoubleClick = () => {
    setPreSelectedId(selectedId);
    console.log("Selected ID:", selectedId);
    if(preSelectedId === selectedId) {
      setClickCount(clickCount + 1);
      if (clickCount === 1) {
        console.log('pop up')
        handleDetailInv(selectedId) //pop up hook

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
            <TableColumn>STARTED</TableColumn>
            <TableColumn>FINISHED</TableColumn>
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
                    setSelectedId(element.id) //pop up
                    handleDoubleClick()
                  }}
                >
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
