"use client";
import React, { useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import { IoBan } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { columns } from "./data";
import {
  banUser,
  getTableUsers,
  unbanUser,
} from "@/redux/actions/adminActions";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import UserDetailModal from "./UserDetailModal";

const statusColorMap = {
  active: "success",
  banned: "danger",
};

const planColorMap = {
  true: "secondary",
  false: "default",
};

export default function AdminTable() {
  const [cookies, setCookie] = useCookies();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.admin.tableUsers);
  useEffect(() => {
    dispatch(getTableUsers(cookies.token));
  }, []);
  const renderCell = React.useCallback((users, columnKey) => {
    const cellValue = users[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: users.image }}
            description={users.email}
            name={`${users.name.replace(/^\w/, (c) => c.toUpperCase())} ${users.lastname.replace(/^\w/, (c) => c.toUpperCase())}`}
          >
            {users.email}
          </User>
        );
      case "totalBalance":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {users.balance}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[users.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "plan":
        return (
          <Chip
            className="capitalize"
            color={planColorMap[users.premium]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <UserDetailModal user={users} />
              </span>
            </Tooltip>
            <Tooltip color="warning" content="Unban">
              <span
                className="text-lg text-warning cursor-pointer active:opacity-50"
                onClick={() => {
                  dispatch(unbanUser({ token: cookies.token, id: users.id }));
                }}
              >
                <AiOutlineExclamationCircle />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Ban">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => {
                  dispatch(banUser({ token: cookies.token, id: users.id }));
                }}
              >
                <IoBan />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      {users === undefined ? (
        <p>Loading...</p>
      ) : (
        <Table aria-label="Admin dashboard">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell key={columnKey}>
                    {renderCell(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </>
  );
}