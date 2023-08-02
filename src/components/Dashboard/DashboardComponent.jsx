import React from 'react';
import styles from './dashboard.module.css';

export default function DashboardComponent() {
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.grid_2x12}>
            <div className={styles.welcome}>Welcome</div>
            <div className={styles.myBalance}>myBalance</div>
            <div
              className={styles.profile}
              style={{ gridRow: 'span 2'}}
            >
              profile
            </div>
            <div
              className={styles.myExpenses}
              style={{ gridRow: 'span 2', gridColumn: 'span 3' }}
            >
              myExpenses
            </div>
            <div
              className={styles.myIncome}
              style={{ gridRow: 'span 2', gridColumn: 'span 3' }}
            >
              myIncome
            </div>
            <div
              className={styles.mySavings}
              style={{ gridRow: 'span 2', gridColumn: 'span 3' }}
            >
              mySavings
            </div>
          </div>

          <div className={styles.grid_2x3}>
            <div className={styles.myJournal}
            style={{ gridRow: 'span 2', gridColumn: 'span 3' }}>myJournal</div>
            <div
              className={styles.mySpendings}
              style={{ gridRow: 'span 2', gridColumn: 'span 2' }}
            >
              mySpendings
            </div>
            <div className={styles.myGraph}>myGraph</div>
          </div>
        </div>
      </div>
    </>
  );
}
