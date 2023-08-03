import React from 'react';
import styles from './managment.module.css'

export default function ManagmentComponent() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.grid_3x13}>
                    <div className={`${styles.select} ${styles.shadow_background}`}>Select your investmenet... </div>
                    <div className={`${styles.method} ${styles.shadow_background}`}>Select Method:</div>
                    <div className={`${styles.graphs} ${styles.shadow_background}`}> graphs</div>
                    <div className={`${styles.investment} ${styles.shadow_background}`}>Investment</div>
                    <div className={`${styles.advice} ${styles.shadow_background}`}>advice</div>
                </div>
            </div>
        </div>
    )
}
