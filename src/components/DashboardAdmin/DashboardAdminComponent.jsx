import React from "react";
import AdminTable from "./AdminTable/AdminTable";
import UsersCards from "./TotalUsersCards/UsersCards";
import UserSection from "./User/UserSection";

const DashboardAdminComponent = () => {
  return (
    <div className="mx-6 sm:mx-8 md:mx-12 select-none p-4 rounded-lg">

      <section className="flex items-center justify-between my-6">
        <h1 className="font-bold text-strongPink text-4xl sm:text-5xl md:text-6xl">
          Admin Dashboard
        </h1>
        <UserSection />
      </section>

      <section className="my-8">
        <UsersCards />
      </section>

      <section>
        <AdminTable />
      </section>
    </div>
  );
};

export default DashboardAdminComponent;
