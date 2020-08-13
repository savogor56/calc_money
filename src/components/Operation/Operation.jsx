import React from 'react'
import styles from './Operation.module.css';
import { Form, Field } from 'react-final-form';

const Operation = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <section className={styles.operation}>
            <h3>Новая операция</h3>
            <Form 
            onSubmit={onSubmit}
            render={({handleSubmit, form}) => (
                <form onSubmit={handleSubmit}>
                    <Field name='operationName' type='text' component='input' placeholder='Наименование операции' className={styles.name} />
                    <Field name='amount' type='number' component='input' placeholder='Введите сумму' className={styles.amount} />
                    <div className={styles.btns}>
                        <button className={`${styles.btn} ${styles.btn_subtract}`}>
                            Расход
                        </button>
                        <button className={`${styles.btn} ${styles.btn_add}`}>
                            Доход
                        </button>
                    </div>
                </form>
            )}
            />
        </section>
    )
}


export default Operation
