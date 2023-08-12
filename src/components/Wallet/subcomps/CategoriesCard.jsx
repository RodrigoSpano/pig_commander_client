import React, { useEffect } from "react";
import Image from "next/image";
import education from "../../../utils/Images/CategoriesImages/education.png";
import entertainment from "../../../utils/Images/CategoriesImages/entertainment.png";
import food from "../../../utils/Images/CategoriesImages/food.png";
import health from "../../../utils/Images/CategoriesImages/health.png";
import transport from "../../../utils/Images/CategoriesImages/transport.png";

export default function CategoriesCard({
  name,
  amount,
  type,
  category,
  validation,
}) {
  function iconito() {
    switch (category) {
      case "education":
        return education;
      case "health":
        return health;
      case "food":
        return food;
      case "entertainment":
        return entertainment;
      case "transport":
        return transport;
      default:
        null;
    }
  }

  useEffect(() => {
    console.log(amount);
  });

  const iconSrc = iconito();

  return (
    <div className="flex flex-col pt-2 pl-2 w-1/5 text-center items-center">
      <Image
        src={iconSrc}
        alt="icon Category Pic"
        width={40}
        className="w-[50px] h-[50px] rounded-full items-center justify-center bg-slate-100"
      />

      <div className="font-bold overflow-x-auto">{name}</div>
      {/* Si es gasto va en rojo, si es ingreso va en verde */}
      {validation ? (
        <div className={type === "income" ? "text-green-700" : "text-red-700"}>
          {amount}
        </div>
      ) : (
        <div className={amount > 0 ? "text-green-700" : "text-red-700"}>
          {amount}
        </div>
      )}
    </div>
  );
}
