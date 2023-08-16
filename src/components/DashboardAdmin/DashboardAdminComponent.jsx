import React from "react";
import AdminTable from "./AdminTable/AdminTable";

const DashboardAdminComponent = () => {
  return (
    <div className="m-12">
      <section className="flex justify-between items-center my-12">
        <div>Administrator Dashboard</div>
        <div className="flex items-center">
          <div className="mx-2">AdminName</div>
          <div className="mx-2">photo</div>
        </div>
      </section>

      <section className="flex justify-between my-12">
        <div className="w-1/4 p-4 bg-blue-300 flex justify-center items-center">
          Total Users
        </div>
        <div className="w-1/4 p-4 bg-green-300 flex justify-center items-center">
          Basic Users
        </div>
        <div className="w-1/4 p-4 bg-yellow-300 flex justify-center items-center">
          Pro Users
        </div>
        <div className="w-1/4 p-4 bg-red-300 flex justify-center items-center">
          Banned Users
        </div>
      </section>

      <section>
        <AdminTable />
      </section>
    </div>
  );
};

export default DashboardAdminComponent;
