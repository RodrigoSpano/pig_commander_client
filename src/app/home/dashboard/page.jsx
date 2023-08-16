"use client";
import DashboardComponent from "@/components/Dashboard/DashboardComponent";
import DashboardAdminComponent from "@/components/DashboardAdmin/DashboardAdminComponent";
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      {user.email === "pigcommandersp@gmail.com" ? (
        <DashboardAdminComponent />
      ) : (
        <DashboardComponent />
      )}
    </div>
  );
};

export default Dashboard;
