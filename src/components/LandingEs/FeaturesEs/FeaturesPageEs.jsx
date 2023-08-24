"use client";
import React from "react";
import SavingGoals from "./SavingGoalsEs";
import HelpSection from "./HelpSectionEs";
import FinalcialNews from "./FinalcialNewsEs";
import { motion } from "framer-motion";
import NavBarEs from "../NavBarEs";
import FooterEs from "../FooterEs";
import RecordOfExpensesAndIncomeEs from "./RecordOfExpensesAndIncomeEs";
import SavingsAndInvestmentEs from "./SavingsAndInvestmentEs";
import CustomDashboardEs from "./CustomDashboardEs";
import AuthomatizationEs from "./AuthomatizationEs";
import LimitPerMonthEs from "./LimitPerMonthEs";
import ProfessionalSubscriptionEs from "./ProfessionalSubscription";
import CustomThemesEs from "./CustomThemesEs";
import BudgetEs from "./BudgetEs";
import SavingGoalsEs from "./SavingGoalsEs";
import HelpSectionEs from "./HelpSectionEs";
import FinalcialNewsEs from "./FinalcialNewsEs";

const FeaturesPageEs = () => {
  return (
    <div className="select-none">
      <NavBarEs />
      <div className="py-12">
        <div className="container mx-auto">
          {/* TITULO Y SUBTITULO */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-center"
          >
            <h1 className="text-5xl font-bold">Funcionalidades</h1>
            <p className="text-gray-700 dark:text-lightGrey text-base py-3">
              Descubre todas las características que hacen de Pig Commander la
              aplicación financiera más completa y versátil en el mercado.
            </p>
            <p className="text-gray-700 dark:text-lightGrey mb-16 text-base">
              Hemos diseñado cuidadosamente cada característica para que puedas
              tener un control total sobre tus recursos financieros y alcanzar
              tus objetivos financieros de manera efectiva. Aquí están los
              aspectos destacados:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RecordOfExpensesAndIncomeEs />
            <SavingsAndInvestmentEs />
            <CustomDashboardEs />
            <AuthomatizationEs />
            <LimitPerMonthEs />
            <ProfessionalSubscriptionEs />
            <CustomThemesEs />
            <BudgetEs />
            <SavingGoalsEs />
            <HelpSectionEs />
            <FinalcialNewsEs />
          </div>

          {/* PIE DE PAGINA..*/}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-col items-center justify-center my-16"
          >
            <p className="text-gray-700 dark:text-lightGrey text-base text-center">
              En Pig Commander, nos enorgullecemos de ofrecerte una amplia gama
              de características que te permitirán tomar el control de tus
              finanzas y alcanzar tus objetivos financieros.
            </p>
            <p className="text-gray-700 dark:text-lightGrey text-base text-center">
              ¡Explora cada una de estas características y comienza a dominar
              tus finanzas hoy mismo!
            </p>
          </motion.div>
        </div>
      </div>
      <FooterEs />
    </div>
  );
};

export default FeaturesPageEs;
