import React, { useEffect } from "react";
import {
  PiGraduationCapBold,
  PiHeartbeatBold,
  PiPiggyBankBold,
} from "react-icons/pi";
import { BiBus, BiHomeSmile } from "react-icons/bi";
import { MdOutlineFastfood } from "react-icons/md";
import { BsPiggyBank } from "react-icons/bs"

export default function CategoriesCard({
  name,
  amount,
  type,
  category,
  validation,
}) {
  function iconDisplayer() {
    switch (category) {
      case "education":
        return <PiGraduationCapBold />;
      case "health":
        return <PiHeartbeatBold />;
      case "food":
        return <MdOutlineFastfood />;
      case "entertainment":
        return <BiHomeSmile />;
      case "transport":
        return <BiBus />;
      default:
        return <BsPiggyBank />;
    }
  }

  const iconSrc = iconDisplayer();

  return (
    <div className="flex flex-col pt-2 pl-2 w-1/5 text-center items-center mt-4">
      <p className={"text-4xl"}>{iconSrc}</p>

      <div className="font-bold capitalize text-wrap w-24 text-">{name}</div>
      {/* Si es gasto va en rojo, si es ingreso va en verde */}
      {validation ? (
        <div className={type === "income" ? "text-green-700" : "text-red-700"}>
          $ {amount.toLocaleString()}
        </div>
      ) : (
        <div className={amount > 0 ? "text-green-700" : "text-red-700"}>
          $ {amount.toLocaleString()}
        </div>
      )}
    </div>
  );
}
