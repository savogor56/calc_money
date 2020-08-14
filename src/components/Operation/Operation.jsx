import React from 'react'
import styles from './Operation.module.css';
import { Form, Field } from 'react-final-form';

class Operation extends React.Component {
    state = {
        type: null
    }
    onSubmit = (formData) => {
       this.props.addTransaction(formData.operationName, formData.amount, this.state.type);
    }
    render() {
        return (
            <section className={styles.operation}>
                <h3>Новая операция</h3>
                <Form 
                onSubmit={this.onSubmit}
                render={({handleSubmit, form, submitting, pristine, submitSucceeded}) => (
                        <form onSubmit={handleSubmit}>
                            <Field 
                                name='operationName' 
                                type='text' component='input' 
                                placeholder='Наименование операции' 
                                className={`${styles.fields} ${styles.name}`} 
                            />
                            <Field 
                                name='amount' 
                                type='number' 
                                component='input' 
                                placeholder='Введите сумму' 
                                className={`${styles.fields} ${styles.amount}`} 
                            />
                            <div className={styles.btns}>
                            <button 
                                onClick={() => this.setState({ type: 'subtract'})} 
                                className={`${styles.btn} ${styles.btn_subtract}`} 
                                disabled={submitting || pristine}
                            >Расход</button>
                            <button 
                                onClick={() => this.setState({ type: 'add' })} 
                                className={`${styles.btn} ${styles.btn_add}`} 
                                disabled={submitting || pristine}
                            >Доход</button>
                            </div>
                        </form>
                    )}
                />
            </section>
        )
    }
}


export default Operation
