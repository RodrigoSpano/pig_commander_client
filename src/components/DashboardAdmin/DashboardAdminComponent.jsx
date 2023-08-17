import React from "react";
import { motion } from "framer-motion";
import AdminTable from "./AdminTable/AdminTable";
import UsersCards from "./TotalUsersCards/UsersCards";
import UserSection from "./User/UserSection";

const DashboardAdminComponent = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <motion.div
      className="mx-6 sm:mx-8 md:mx-12 select-none p-4 rounded-lg"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <section className="flex items-center justify-between my-6">
        <motion.h1
          className="font-bold text-strongPink text-4xl sm:text-xl md:text-6xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }}
        >
          Admin Dashboard
        </motion.h1>
        <UserSection />
      </section>

      <section className="my-8">
        <UsersCards />
      </section>

      <section>
        <AdminTable />
      </section>
    </motion.div>
  );
};

export default DashboardAdminComponent;
