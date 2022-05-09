/* eslint-disable react/prop-types */
import React from 'react';
import 'boxicons';

const List = () => {
	const data = [
		{
			name: 'Income',
			color: '#f9c74f',
		},
		{
			name: 'Expense',
			color: '#EB5353',
		},

		{
			name: 'Investment',
			color: '#36AE7C',
		},
		{
			name: 'Savings',
			color: '#187498',
		},
	];
	return (
		<div className='flex flex-col py-6 gap-3'>
			<h1 className='py-4 font-bold text-xl'>History</h1>
			{data.map((v, i) => (
				<Transaction key={i} data={v} />
			))}
		</div>
	);
};

function Transaction({ data, handler }) {
	if (!data) return null;
	return (
		<div
			className='item flex justify-center bg-gray-50 py-2 rounded-r'
			style={{ borderRight: `8px solid ${data.color ?? '#e5e5e5'}` }}
		>
			<button className='px-1' onClick={handler}>
				<box-icon
					data-id={data._id ?? ''}
					color={data.color ?? '#e5e5e5'}
					name='trash'
				/>
			</button>
			<span className='block w-full'>{data.name ?? 'hi'}</span>
		</div>
	);
}

export default List;
