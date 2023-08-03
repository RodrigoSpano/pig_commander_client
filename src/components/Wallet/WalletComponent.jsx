import React from 'react';
import styles from './wallet.module.css'

export default function WalletComponent () {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.grid_2x2}>
                    <div className={`${styles.myBalance} ${styles.shadow_background}`}></div>
                    <div  className={`${styles.form} ${styles.shadow_background}`}></div>
                    <div  className={`${styles.spenByCategory} ${styles.shadow_background}`}></div>
                </div>
            </div>
        </div>
    )
}
