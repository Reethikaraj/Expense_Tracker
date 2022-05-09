import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import Labels from './Labels';

Chart.register(ArcElement);
const Graph = () => {
	// 	const { data, isFetching , isSuccess, isError } = api.useGetLabelsQuery()
	//   let graphData;
	// if(isFetching){
	//     graphData = <div>Fetching</div>;
	//   }else if(isSuccess){
	//     graphData = <Doughnut {...chart_Data(data)}></Doughnut>;
	//   }else if(isError){
	//     graphData = <div>Error</div>
	//   }
	const config = {
		data: {
			datasets: [
				{
					data: [300, 50, 100, 100],
					backgroundColor: ['#187498', '#EB5353', '#f9c74f', '#36AE7C'],
					hoverOffset: 4,
					borderRadius: 10,
					spacing: 0,
				},
			],
		},
		options: {
			cutout: 115,
		},
	};
	return (
		<div className='flex justify-content max-w-xs mx-auto'>
			<div className='item'>
				<div className='chart relative'>
					<Doughnut {...config} />
					<h3 className='mb-4 font-bold title'>
						Total
						<span className='block text-3xl text-emerald-400'>0</span>
					</h3>
				</div>

				<div className='flex flex-col py-10 gap-4'>
					{/* Labels */}
					<Labels />
				</div>
			</div>
		</div>
	);
};

export default Graph;
