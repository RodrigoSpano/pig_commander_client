import { motion } from "framer-motion";
import AdminTable from "./AdminTable/AdminTable";
import UsersCards from "./TotalUsersCards/UsersCards";
import UserSection from "./User/UserSection";
import { useSelector } from "react-redux";
import UserSectionEs from "./User/UserSectionEs";
import UsersCardsEs from "./TotalUsersCards/UsersCardsEs";
import AdminTableEs from "./AdminTable/AdminTableEs";

const DashboardAdminComponent = () => {
  const selectedLanguage = useSelector((state) => state.language);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <motion.div
      className="mx-6 sm:mx-8 md:mx-12 md:mt-0 select-none p-4 rounded-lg"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <section className="flex flex-col md:flex-row items-center justify-between my-6">
        <motion.h1
          className="font-bold text-strongPink text-4xl invisible sm:text-xl md:text-6xl md:visible"
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, delay: 0.2 },
          }}
        >
          {selectedLanguage === "en"
            ? "Admin Dashboard"
            : "Panel de Administrador"}
        </motion.h1>
        {selectedLanguage === "en" ? <UserSection /> : <UserSectionEs />}
      </section>

      <section className="my-8">
        {selectedLanguage === "en" ? <UsersCards /> : <UsersCardsEs />}
      </section>

      <section>
        {selectedLanguage === "en" ? <AdminTable /> : <AdminTableEs />}
      </section>
    </motion.div>
  );
};

export default DashboardAdminComponent;
