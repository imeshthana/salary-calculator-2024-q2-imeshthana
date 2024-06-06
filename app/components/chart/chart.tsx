'use client'
import React from 'react';
import './chart.css'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import LegendBox from './legendBox';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Low', 'Medium', 'Medium'],
    datasets: [
      {
        label: ['Low', 'Medium', 'High'],
        data: [100, 65, 30],
        backgroundColor: ['#2F80ED', '#EB5757', '#F2C94C'],
        borderRadius: 30,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false, 
        grid: {
          display: false, 
        },
        barPercentage: 0.5,
        categoryPercentage: 0.5, 
      },
      y: {
        display: false, 
        grid: {
          display: false,
        },
      },
    },
    plugins: {
        legend: {
            display: false, 
            position: 'bottom',  
            align: 'center',
            labels: {
              usePointStyle: true,
            }, 
            textDirection:'ltr'
          },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      bar: {
        borderRadius: 30, 
      },
    },
  };

  return (
    <div className='content-box'>
      <div className='title-box'>
          <h2>Task Priorities</h2>
      </div>
      <div className='line'></div>
      <div className='p-3'>
      <Bar data={data} options={options} />
      <LegendBox/>
      </div>
    </div>
  );
};

export default BarChart;
