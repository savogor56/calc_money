import React from 'react';
import styles from './History.module.css';

const History = (props) => {
    const transactionsList = props.transactions.map(transaction => {
            return (
                <HistoryItem key={transaction.id} transaction={transaction} deleteTransaction={props.deleteTransaction} />
            )
        })
    
    return (
        <section className={styles.history}>
            <h3>История расходов/доходов</h3>
            <ul className={styles.list}>
                {transactionsList}
            </ul>
        </section>
    )
}

const HistoryItem = ({ transaction, deleteTransaction }) => {
    return(
        <li className={`${styles.item} ${transaction.type === 'add' ? styles.item_plus : styles.item_minus}`}>
            {transaction.description}
            <span className={styles.money}>{transaction.type === 'add' ? '+' : '-'}{transaction.amount} ₽</span>
            <button className={styles.delete} onClick={()=>{deleteTransaction(transaction.id)}}>x</button>
        </li>
    )
}

export default History
