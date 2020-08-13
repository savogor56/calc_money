import React from 'react';
import styles from './History.module.css';

const History = () => {
    return (
        <section className={styles.history}>
            <h3>История расходов</h3>
            <ul className={styles.list}>
                <li className={`${styles.item} ${styles.item_plus}`}>
                    Получил зарплату
                    <span className={styles.money}>+30000 ₽</span>
                    <button className={styles.delete}>x</button>
                </li>
                <li className={`${styles.item} ${styles.item_minus}`}>
                    Отдал долг
                    <span className={styles.money}>-10000 ₽</span>
                    <button className={styles.delete}>x</button>
                </li>
            </ul>
        </section>
    )
}

export default History
