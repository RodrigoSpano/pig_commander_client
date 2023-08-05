"use client";
import React from "react";
import styles from "./dashboard.module.css";
import TransactionsComponent from "../Transactions/TransactionsComponent";
import {  useSelector } from "react-redux";


export default function DashboardComponent() {

  const user = useSelector(state => state.user)
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.grid_2x12}>
            <div className={`${styles.welcome}`}>
              <div className={styles.tipography_welcome}>Welcome Back {user.name.replace(/^\w/, (c) => c.toUpperCase())
}</div>
              <div className={styles.tipography_title}>Pig Commander is the most secure finance app.</div>
            </div>
            <div
              className={`${styles.myBalance} ${styles.shadow_background} ${styles.flex_inline}`}
            >
              <div className={styles.chancheiro}></div>
              <div className={`${styles.flex_column}`}>
                <div className={`${styles.tipography_title}`}>My Balance</div>
                <div className={`${styles.tipography_balance}`}>
                  $255.000,00
                </div>
              </div>
            </div>
            <div className={`${styles.profile} ${styles.shadow_background}`}>
              <div className={styles.profileContent}>
                <div className={styles.circle}></div>
                <h1 className={styles.name}>Nombre del Usuario</h1>
              </div>
            </div>
            <div
              className={`${styles.myExpenses} ${styles.shadow_background} ${styles.flex_inline}`}
            >
              <div className={styles.chancheiro}></div>
              <div className={styles.flex_column}>
                <div className={`${styles.tipography_title}`}>Expenses</div>
                <div className={`${styles.tipography_number}`}>$155.000</div>
              </div>
            </div>
            <div
              className={`${styles.myIncome} ${styles.shadow_background} ${styles.flex_inline}`}
            >
              <div className={styles.chancheiro}> </div>
              <div className={styles.flex_column}>
                <div className={`${styles.tipography_title}`}>Income</div>
                <div className={`${styles.tipography_number}`}>$75.00</div>
              </div>
            </div>
            <div
              className={`${styles.mySavings}  ${styles.shadow_background} ${styles.flex_inline}`}
            >
              <div className={styles.chancheiro}></div>
              <div className={styles.flex_column}>
                <div className={`${styles.tipography_title}`}>Savings</div>
                <div className={`${styles.tipography_number}`}>$93.222</div>
              </div>
            </div>
          </div>

          <div className={styles.grid_2x3}>
            <div
              className={`${styles.myJournal}  ${styles.shadow_background} `}
            >
              myJournal
            </div>
            <TransactionsComponent />
            <div
              className={`${styles.myGraph}  ${styles.shadow_background} `}
            >
              myGraph
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
