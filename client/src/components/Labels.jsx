/* eslint-disable react/prop-types */
import React from 'react';

const Labels = () => {
	const data = [
		{
			type: 'Income',
			percent: 10,
			color: '#f9c74f',
		},
		{
			type: 'Expense',
			percent: 20,
			color: '#EB5353',
		},
		{
			type: 'Investment',
			percent: 10,
			color: '#36AE7C',
		},
		{
			type: 'Savings',
			percent: 45,
			color: '#187498',
		},
	];
	return (
		<>
			{data.map((v, i) => (
				<LabelComponent key={i} data={v} />
			))}
		</>
	);
};

function LabelComponent({ data }) {
	if (!data) return <></>;
	return (
		<div className='labels flex justify-between'>
			<div className='flex gap-2'>
				<div
					className='w-2 h-2 rounded py-3'
					style={{ background: data.color ?? '#f9c74f' }}
				></div>
				<h3 className='text-md'>{data.type ?? ''}</h3>
			</div>
			<h3 className='font-bold'>{data.percent ?? 0}%</h3>
		</div>
	);
}

export default Labels;
