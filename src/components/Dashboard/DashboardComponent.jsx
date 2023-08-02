import React from "react";
import styles from "./dashboard.module.css";
import { Flex } from "@tremor/react";

export default function DashboardComponent() {
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.grid_2x12}>
            <div className={`${styles.welcome} ${styles.shadow_background}`}>Welcome</div>
            <div className={`${styles.myBalance} ${styles.shadow_background}`}>myBalance</div>
            <div className={`${styles.profile} ${styles.shadow_background}`}>profile</div>
            <div className={`${styles.myExpenses}  ${styles.shadow_background}`}>myExpenses</div>
            <div className={`${styles.myIncome}  ${styles.shadow_background}`}>myIncome</div>
            <div className={`${styles.mySavings}  ${styles.shadow_background}`}>mySavings</div>
          </div>

          <div className={styles.grid_2x3}>
            <div className={`${styles.myJournal}  ${styles.shadow_background}`}>myJournal</div>
            <div className={`${styles.mySpendings}  ${styles.shadow_background}`}>mySpendings</div>
            <div className={`${styles.myGraph}  ${styles.shadow_background}`}>myGraph</div>
          </div>
        </div>
      </div>
    </>
  );
}
