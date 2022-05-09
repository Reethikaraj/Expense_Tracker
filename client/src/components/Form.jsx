import React from 'react';
import { useForm } from 'react-hook-form';
import List from './List';

const Form = () => {
	const { register, handleSubmit, resetField } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div className='form max-w-sm mx-auto w-96'>
			<h1 className='font-bold pb-4 text-xl'>Transaction</h1>
			<form id='form' onSubmit={handleSubmit(onSubmit)}>
				<div className='grid gap-4'>
					<select className='form-input' {...register('transaction_type')}>
						<option value='Income'>Income</option>
						<option value='Expense'>Expense</option>
						<option value='Savings'>Savings</option>
						<option value='Investment'>Investment</option>
					</select>
					<div className='input-group'>
						<input
							{...register('transaction_name')}
							type='text'
							placeholder='Salary, Rent, SIP'
							className='form-input'
						/>
					</div>
					<div className='input-group'>
						<input
							type='text'
							placeholder='Amount'
							className='form-input'
							{...register('transaction_amount')}
						/>
					</div>
					<div className='submit-btn'>
						<button className='border py-2 text-white bg-slate-600 w-full'>
							Save Transaction
						</button>
					</div>
				</div>
			</form>

			<List />
		</div>
	);
};

export default Form;
