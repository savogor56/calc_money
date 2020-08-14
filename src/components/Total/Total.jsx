import React from 'react';
import styles from './Total.module.css';

const Total = ({cost, income}) => {
    const total = income - cost;
    return (            
        <section className={styles.total}>
            <header className={styles.header} >
                <h3>Баланс</h3>
                <p className={styles.balance} >{total} ₽</p>
            </header>
            <div className={styles.main}>
            <div className={`${styles.main_item} ${styles.income}`}>
                    <h4>Доходы</h4>
                    <p className={`${styles.money} ${styles.money_income}`}>
                        +{income} ₽
                    </p>
            </div>
            <div className={`${styles.main_item} ${styles.expenses}`}>
                <h4>Расходы</h4>
                <p className={`${styles.money}`}>
                        -{cost} ₽
                </p>
            </div>
            </div>
        </section>
    )
}

export default Total;
