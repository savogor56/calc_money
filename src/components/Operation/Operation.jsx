import React from 'react'
import styles from './Operation.module.css';
import { Form, Field } from 'react-final-form';
import { required } from '../../Utils/validators';

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
				render={({handleSubmit, form, submitting, pristine, hasValidationErrors}) => (
						<form onSubmit={(event) => {
							handleSubmit(event);
							if(!hasValidationErrors) form.reset();							
							}}>
							<Field 
									name='operationName' 
									                               
									validate={required}
									render={({input, meta}) => (
										<>
											<input 
												{...input}
												type='text' 
												placeholder='Наименование операции'  
												className={`${styles.fields} ${styles.name} ${meta.error && meta.touched && styles.fields_error}`} 
											/>
											{meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
										</>
									)}
							/>
							<Field 
									name='amount'
									validate={required}
									render={({input, meta}) => (
										<>
											<input 
												{...input}
												type='number'  
												placeholder='Введите сумму' 
												className={`${styles.fields} ${styles.amount} ${meta.error && meta.touched && styles.fields_error}`} 
											/>
											{meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
										</>
									)}
							/>
							<div className={styles.btns}>
								<button 
									onClick={() => this.setState({ type: 'cost'})} 
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
