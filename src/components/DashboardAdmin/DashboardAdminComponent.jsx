import React from "react";

const DashboardAdminComponent = () => {
  return (
    <div>
      <div className="flex justify-between items-center my-4 mx-12">
        <div>Administrator Dashboard</div>
        <div className="flex items-center">
          <div className="mx-2">AdminName</div>
          <div className="mx-2">photo</div>
        </div>
      </div>
      <div className="flex justify-between m-12">
        <div className="w-1/4 p-4 bg-blue-300 flex justify-center items-center">Total User</div>
        <div className="w-1/4 p-4 bg-green-300 flex justify-center items-center">Basic User</div>
        <div className="w-1/4 p-4 bg-yellow-300 flex justify-center items-center">Pro User</div>
        <div className="w-1/4 p-4 bg-red-300 flex justify-center items-center">Banned User</div>
      </div>
    </div>
  );
};

export default DashboardAdminComponent;
